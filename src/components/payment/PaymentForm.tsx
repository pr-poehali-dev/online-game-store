
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface PaymentFormProps {
  onSubmit: (data: any) => void;
  isProcessing: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit, isProcessing }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  
  // Форматирование номера карты для отображения
  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    let formatted = '';
    
    for (let i = 0; i < digits.length; i += 4) {
      formatted += digits.substring(i, i + 4) + ' ';
    }
    
    return formatted.trim();
  };
  
  // Обработка ввода номера карты
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 16) {
      setCardNumber(input);
    }
  };
  
  // Обработка ввода срока действия карты
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    
    if (input.length <= 4) {
      let formatted = input;
      if (input.length > 2) {
        formatted = input.substring(0, 2) + '/' + input.substring(2);
      }
      setExpiry(formatted);
    }
  };
  
  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация формы
    if (cardNumber.length < 16 || !cardHolder || expiry.length < 5 || cvv.length < 3) {
      return;
    }
    
    onSubmit({
      cardNumber,
      cardHolder,
      expiry,
      cvv,
      saveCard
    });
  };
  
  // Определение типа карты по первым цифрам
  const getCardType = () => {
    if (!cardNumber) return null;
    
    if (cardNumber.startsWith('4')) {
      return <Icon name="CreditCard" className="text-blue-500" />;
    } else if (/^5[1-5]/.test(cardNumber)) {
      return <Icon name="CreditCard" className="text-red-500" />;
    } else if (/^3[47]/.test(cardNumber)) {
      return <Icon name="CreditCard" className="text-purple-500" />;
    } else if (/^6(?:011|5)/.test(cardNumber)) {
      return <Icon name="CreditCard" className="text-yellow-500" />;
    }
    
    return <Icon name="CreditCard" className="text-gray-400" />;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="card-number">Номер карты</Label>
        <div className="relative">
          <Input
            id="card-number"
            placeholder="0000 0000 0000 0000"
            value={formatCardNumber(cardNumber)}
            onChange={handleCardNumberChange}
            className="bg-muted/20 border-game-primary/20 pl-10"
            required
            disabled={isProcessing}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {getCardType()}
          </div>
        </div>
      </div>
      
      <div>
        <Label htmlFor="card-holder">Имя владельца карты</Label>
        <Input
          id="card-holder"
          placeholder="IVAN IVANOV"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
          className="bg-muted/20 border-game-primary/20"
          required
          disabled={isProcessing}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiry">Срок действия</Label>
          <Input
            id="expiry"
            placeholder="ММ/ГГ"
            value={expiry}
            onChange={handleExpiryChange}
            className="bg-muted/20 border-game-primary/20"
            required
            disabled={isProcessing}
          />
        </div>
        
        <div>
          <Label htmlFor="cvv">CVV/CVC</Label>
          <Input
            id="cvv"
            type="password"
            placeholder="•••"
            value={cvv}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, '');
              if (input.length <= 3) {
                setCvv(input);
              }
            }}
            className="bg-muted/20 border-game-primary/20"
            required
            disabled={isProcessing}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="save-card" 
          checked={saveCard} 
          onCheckedChange={(checked) => setSaveCard(checked as boolean)}
          disabled={isProcessing}
        />
        <Label htmlFor="save-card" className="font-normal text-sm">
          Сохранить карту для будущих покупок
        </Label>
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-game-primary hover:bg-game-accent text-white"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Icon name="Loader2" className="mr-2 animate-spin" />
              Обработка платежа...
            </>
          ) : (
            `Оплатить ${4198} ₽`
          )}
        </Button>
      </div>
      
      <div className="text-xs text-gray-400 text-center">
        <div className="flex justify-center gap-2 mb-1">
          <Icon name="Shield" size={14} />
          <span>Безопасная оплата</span>
        </div>
        Ваши платежные данные надежно защищены при передаче
      </div>
    </form>
  );
};

export default PaymentForm;

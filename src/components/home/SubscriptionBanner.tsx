
import React from 'react';
import { Button } from '@/components/ui/button';

const SubscriptionBanner: React.FC = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-game-dark to-game-accent p-8 md:p-12">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1586182987320-4f17e36640df?q=80&w=2070&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
              Подписка Game+ Premium
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Получите доступ к более чем 300 играм, эксклюзивным скидкам и ранним бета-тестам всего за 699 ₽ в месяц!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-game-dark hover:bg-gray-200">
                Попробовать бесплатно
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;


import React from 'react';
import { Button } from '@/components/ui/button';

const RegistrationBanner: React.FC = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">
            Присоединяйтесь к сообществу GameStore
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Зарегистрируйтесь сейчас и получите 500 бонусных рублей на первую покупку, доступ к эксклюзивным акциям и персональным рекомендациям.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-game-primary hover:bg-game-accent text-white">
              Зарегистрироваться
            </Button>
            <Button variant="outline" className="border-game-primary/40 text-white hover:border-game-primary hover:text-game-primary">
              Войти в аккаунт
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationBanner;

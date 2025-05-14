
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/ui/hero-slider';
import GameSection from '@/components/games/GameSection';
import CategoryBar from '@/components/categories/CategoryBar';
import { Game } from '@/components/games/GameCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Данные для слайдера
const heroSlides = [
  {
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty",
    description: "Отправляйтесь в новое захватывающее приключение в мире Cyberpunk 2077. Раскройте заговор и спасите президента Новых США.",
    imageUrl: "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop",
    price: 1999,
    discount: 15,
  },
  {
    id: 2,
    title: "Assassin's Creed: Shadows",
    description: "Исследуйте древнюю Японию эпохи самураев. Станьте тенью и измените ход истории.",
    imageUrl: "https://images.unsplash.com/photo-1621886292650-520e76c3d245?q=80&w=1931&auto=format&fit=crop",
    price: 2999,
  },
  {
    id: 3,
    title: "Elden Ring: Shadow of the Erdtree",
    description: "Грандиозное дополнение для легендарной игры. Новые земли, монстры и испытания ждут вас.",
    imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=2070&auto=format&fit=crop",
    price: 1499,
    discount: 10,
  },
];

// Популярные игры
const popularGames: Game[] = [
  {
    id: 1,
    title: "Red Dead Redemption 2",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    price: 1899,
    categories: ["Приключения", "Вестерн"],
    rating: 4.9,
  },
  {
    id: 2,
    title: "The Witcher 3: Wild Hunt",
    imageUrl: "https://images.unsplash.com/photo-1636489953081-c4ebbd50fa3a?q=80&w=2072&auto=format&fit=crop",
    price: 999,
    discountPercent: 50,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.8,
  },
  {
    id: 3,
    title: "God of War Ragnarök",
    imageUrl: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop",
    price: 3499,
    categories: ["Экшен", "Приключения"],
    rating: 4.9,
  },
  {
    id: 4,
    title: "Baldur's Gate 3",
    imageUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop",
    price: 2499,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.9,
  },
  {
    id: 5,
    title: "Starfield",
    imageUrl: "https://images.unsplash.com/photo-1532289735118-8a2ae5ee0fb7?q=80&w=2026&auto=format&fit=crop",
    price: 2899,
    discountPercent: 20,
    categories: ["Ролевая", "Космос"],
    rating: 4.5,
  },
];

// Новые игры
const newGames: Game[] = [
  {
    id: 6,
    title: "Dragon Age: The Veilguard",
    imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop",
    price: 3499,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.7,
    isNew: true,
  },
  {
    id: 7,
    title: "Call of Duty: Black Ops 6",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    price: 2999,
    categories: ["Шутер", "Экшен"],
    rating: 4.5,
    isNew: true,
  },
  {
    id: 8,
    title: "STALKER 2: Heart of Chornobyl",
    imageUrl: "https://images.unsplash.com/photo-1627855497821-d1035d10ef71?q=80&w=2070&auto=format&fit=crop",
    price: 2499,
    categories: ["Шутер", "Хоррор"],
    rating: 4.6,
    isNew: true,
  },
  {
    id: 9,
    title: "Star Wars Outlaws",
    imageUrl: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1976&auto=format&fit=crop",
    price: 3299,
    categories: ["Приключения", "Экшен"],
    rating: 4.4,
    isNew: true,
  },
  {
    id: 10,
    title: "Frostpunk 2",
    imageUrl: "https://images.unsplash.com/photo-1619912174527-26a189d41d59?q=80&w=2070&auto=format&fit=crop",
    price: 1899,
    categories: ["Стратегия", "Симулятор"],
    rating: 4.8,
    isNew: true,
  },
];

// Игры со скидкой
const discountGames: Game[] = [
  {
    id: 11,
    title: "Hogwarts Legacy",
    imageUrl: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop",
    price: 2499,
    discountPercent: 40,
    categories: ["Приключения", "Фэнтези"],
    rating: 4.7,
  },
  {
    id: 12,
    title: "Resident Evil 4 Remake",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    price: 1999,
    discountPercent: 30,
    categories: ["Хоррор", "Экшен"],
    rating: 4.8,
  },
  {
    id: 13,
    title: "Dying Light 2",
    imageUrl: "https://images.unsplash.com/photo-1604398907654-ec2bf7108b3a?q=80&w=1742&auto=format&fit=crop",
    price: 1999,
    discountPercent: 35,
    categories: ["Выживание", "Хоррор"],
    rating: 4.5,
  },
  {
    id: 14,
    title: "Diablo 4",
    imageUrl: "https://images.unsplash.com/photo-1587652296559-e5605bb08f2c?q=80&w=2070&auto=format&fit=crop",
    price: 2999,
    discountPercent: 25,
    categories: ["Ролевая", "Экшен"],
    rating: 4.6,
  }
];

// Рекомендуемые игры
const featuredGames: Game[] = [
  {
    id: 15,
    title: "Final Fantasy XVI",
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065&auto=format&fit=crop",
    price: 3999,
    discountPercent: 20,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.8,
  },
  {
    id: 16,
    title: "Alan Wake 2",
    imageUrl: "https://images.unsplash.com/photo-1618680892707-0256b65e291b?q=80&w=2145&auto=format&fit=crop",
    price: 2499,
    categories: ["Хоррор", "Приключения"],
    rating: 4.9,
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Главный слайдер */}
        <section className="mb-12">
          <div className="container mx-auto px-4">
            <HeroSlider slides={heroSlides} />
          </div>
        </section>
        
        {/* Категории */}
        <section className="mb-8">
          <div className="container mx-auto">
            <CategoryBar 
              activeCategoryId={activeCategory} 
              onCategorySelect={setActiveCategory} 
            />
          </div>
        </section>
        
        {/* Рекомендуемые игры */}
        <GameSection 
          title="Рекомендуемые игры" 
          subtitle="Выбор наших редакторов"
          games={featuredGames}
          featured={true}
        />
        
        {/* Популярные игры */}
        <GameSection 
          title="Популярные игры" 
          subtitle="Хиты продаж этого месяца"
          games={popularGames}
          viewAllLink="/popular"
        />
        
        {/* Баннер с подпиской */}
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
        
        {/* Новые игры */}
        <GameSection 
          title="Новинки" 
          subtitle="Самые свежие релизы"
          games={newGames}
          viewAllLink="/new"
        />
        
        {/* Игры со скидкой */}
        <GameSection 
          title="Скидки и акции" 
          subtitle="Лучшие предложения на этой неделе"
          games={discountGames}
          viewAllLink="/sales"
        />
        
        {/* Баннер с призывом к регистрации */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

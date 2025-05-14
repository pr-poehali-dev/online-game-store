import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameSection from "@/components/games/GameSection";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import SubscriptionBanner from "@/components/home/SubscriptionBanner";
import RegistrationBanner from "@/components/home/RegistrationBanner";

// Импорт данных из выделенных файлов
import {
  popularGames,
  newGames,
  discountGames,
  featuredGames,
} from "@/data/games";

// Данные для слайдера
const heroSlides = [
  {
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty",
    description:
      "Отправляйтесь в новое захватывающее приключение в мире Cyberpunk 2077. Раскройте заговор и спасите президента Новых США.",
    imageUrl:
      "https://images.unsplash.com/photo-1640443eae1c-e0e846ecf95c?q=80&w=2071&auto=format&fit=crop",
    price: 1999,
    discount: 15,
  },
  {
    id: 2,
    title: "Assassin's Creed: Shadows",
    description:
      "Исследуйте древнюю Японию эпохи самураев. Станьте тенью и измените ход истории.",
    imageUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080&auto=format&fit=crop",
    price: 2999,
  },
  {
    id: 3,
    title: "Elden Ring: Shadow of the Erdtree",
    description:
      "Грандиозное дополнение для легендарной игры. Новые земли, монстры и испытания ждут вас.",
    imageUrl:
      "https://images.unsplash.com/photo-1594997756045-4d98476ebe46?q=80&w=2070&auto=format&fit=crop",
    price: 1499,
    discount: 10,
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Главный слайдер */}
        <HeroSection slides={heroSlides} />

        {/* Категории */}
        <CategorySection
          activeCategoryId={activeCategory}
          onCategorySelect={setActiveCategory}
        />

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
        <SubscriptionBanner />

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
        <RegistrationBanner />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

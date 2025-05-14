import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameSection from "@/components/games/GameSection";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import SubscriptionBanner from "@/components/home/SubscriptionBanner";
import RegistrationBanner from "@/components/home/RegistrationBanner";

// Импорт данных из выделенных файлов
import { heroSlides } from "@/data/heroSlides";
import {
  popularGames,
  newGames,
  discountGames,
  featuredGames,
} from "@/data/games";

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

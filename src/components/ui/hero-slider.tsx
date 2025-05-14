
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount?: number;
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  // Сброс состояния перехода после анимации
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const calculatePrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return price - (price * discount) / 100;
  };

  return (
    <div className="relative overflow-hidden rounded-xl h-[500px] md:h-[500px]">
      {/* Слайды */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Градиентный оверлей для текста */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            
            {/* Фоновое изображение */}
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Контент слайда */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-md">
                  {slide.description}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  {slide.discount ? (
                    <div className="flex items-center gap-3">
                      <span className="text-white/60 line-through text-sm">
                        {slide.price} ₽
                      </span>
                      <span className="text-2xl font-bold text-game-primary">
                        {calculatePrice(slide.price, slide.discount)} ₽
                      </span>
                      <span className="bg-game-accent text-white text-sm px-2 py-1 rounded">
                        -{slide.discount}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-game-primary">
                      {slide.price} ₽
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button className="bg-game-primary hover:bg-game-accent text-white">
                    Купить сейчас
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Навигация */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10"
        disabled={isTransitioning}
      >
        <Icon name="ChevronLeft" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10"
        disabled={isTransitioning}
      >
        <Icon name="ChevronRight" />
      </Button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-game-primary w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

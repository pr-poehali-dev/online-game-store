
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export interface Game {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  discountPercent?: number;
  categories: string[];
  rating: number;
  isNew?: boolean;
}

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, featured = false }) => {
  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return price - (price * discount) / 100;
  };

  // Генерация звезд рейтинга
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Полные звезды
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon 
          key={`star-${i}`} 
          name="Star" 
          className="text-yellow-400 fill-yellow-400" 
          size={16} 
        />
      );
    }

    // Половина звезды
    if (hasHalfStar) {
      stars.push(
        <Icon 
          key="half-star" 
          name="StarHalf" 
          className="text-yellow-400 fill-yellow-400" 
          size={16} 
        />
      );
    }

    // Пустые звезды
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon 
          key={`empty-star-${i}`} 
          name="Star" 
          className="text-gray-400" 
          size={16} 
        />
      );
    }

    return stars;
  };

  return (
    <div className={`game-card group ${featured ? 'md:flex' : ''}`}>
      {/* Картинка игры */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/5' : 'h-48'}`}>
        <img
          src={game.imageUrl}
          alt={game.title}
          className="game-card-image"
        />
        
        {/* Плашки статуса */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {game.discountPercent && (
            <div className="bg-game-accent text-white text-xs font-bold px-2 py-1 rounded">
              -{game.discountPercent}%
            </div>
          )}
          {game.isNew && (
            <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              Новинка
            </div>
          )}
        </div>
        
        {/* Кнопка "в избранное" */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon name="Heart" size={16} />
        </Button>
      </div>
      
      {/* Контент карточки */}
      <div className={`p-4 ${featured ? 'md:w-3/5' : ''}`}>
        <div className="flex gap-2 flex-wrap mb-2">
          {game.categories.slice(0, 2).map((category, index) => (
            <span key={index} className="category-badge">
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="font-semibold text-white mb-1 line-clamp-1">
          {game.title}
        </h3>
        
        <div className="flex items-center mb-3">
          {renderRating(game.rating)}
          <span className="ml-1 text-xs text-gray-400">({game.rating})</span>
        </div>
        
        {/* Цена и кнопка покупки */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {game.discountPercent ? (
              <>
                <span className="text-gray-400 line-through text-sm">
                  {game.price} ₽
                </span>
                <span className="text-white font-bold">
                  {calculateDiscountedPrice(game.price, game.discountPercent)} ₽
                </span>
              </>
            ) : (
              <span className="text-white font-bold">{game.price} ₽</span>
            )}
          </div>
          
          <Button size="sm" className="game-button-sm">
            <Icon name="ShoppingCart" size={16} className="mr-1" />
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

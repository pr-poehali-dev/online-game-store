
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'action', name: 'Экшен', icon: 'Swords' },
  { id: 'adventure', name: 'Приключения', icon: 'MapPin' },
  { id: 'rpg', name: 'Ролевые', icon: 'Sword' },
  { id: 'strategy', name: 'Стратегии', icon: 'Chess' },
  { id: 'puzzle', name: 'Головоломки', icon: 'Puzzle' },
  { id: 'sport', name: 'Спорт', icon: 'Trophy' },
  { id: 'horror', name: 'Хоррор', icon: 'Skull' },
  { id: 'shooter', name: 'Шутеры', icon: 'Target' },
  { id: 'driving', name: 'Гонки', icon: 'Car' },
  { id: 'family', name: 'Семейные', icon: 'Users' },
];

interface CategoryBarProps {
  activeCategoryId?: string;
  onCategorySelect?: (categoryId: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  activeCategoryId,
  onCategorySelect,
}) => {
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-hide">
      <div className="flex gap-3 min-w-max px-4">
        <Button
          key="all"
          variant={!activeCategoryId ? "default" : "outline"}
          className={`rounded-full ${
            !activeCategoryId 
              ? 'bg-game-primary hover:bg-game-accent text-white' 
              : 'border-game-primary/30 text-white hover:border-game-primary hover:text-game-primary'
          }`}
          onClick={() => onCategorySelect && onCategorySelect('')}
        >
          Все игры
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategoryId === category.id ? "default" : "outline"}
            className={`rounded-full ${
              activeCategoryId === category.id 
                ? 'bg-game-primary hover:bg-game-accent text-white' 
                : 'border-game-primary/30 text-white hover:border-game-primary hover:text-game-primary'
            }`}
            onClick={() => onCategorySelect && onCategorySelect(category.id)}
          >
            <Icon name={category.icon} className="mr-2" size={16} />
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;

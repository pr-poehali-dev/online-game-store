
import React from 'react';
import CategoryBar from '@/components/categories/CategoryBar';

interface CategorySectionProps {
  activeCategoryId: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ activeCategoryId, onCategorySelect }) => {
  return (
    <section className="mb-8">
      <div className="container mx-auto">
        <CategoryBar 
          activeCategoryId={activeCategoryId} 
          onCategorySelect={onCategorySelect} 
        />
      </div>
    </section>
  );
};

export default CategorySection;

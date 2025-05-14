
import React from 'react';
import HeroSlider from '@/components/ui/hero-slider';
import { HeroSlide } from '@/data/heroSlides';

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <HeroSlider slides={slides} />
      </div>
    </section>
  );
};

export default HeroSection;

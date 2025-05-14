export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount?: number;
}

// Данные для слайдера
export const heroSlides: HeroSlide[] = [
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

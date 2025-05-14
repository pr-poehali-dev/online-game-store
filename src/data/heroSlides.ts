
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

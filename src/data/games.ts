
import { Game } from '@/components/games/GameCard';

// Популярные игры
export const popularGames: Game[] = [
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
export const newGames: Game[] = [
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
export const discountGames: Game[] = [
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
export const featuredGames: Game[] = [
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

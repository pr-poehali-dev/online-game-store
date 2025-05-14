import { Game } from "@/components/games/GameCard";

// Популярные игры
export const popularGames: Game[] = [
  {
    id: 1,
    title: "Red Dead Redemption 2",
    imageUrl:
      "https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?q=80&w=2070&auto=format&fit=crop",
    price: 1899,
    categories: ["Приключения", "Вестерн"],
    rating: 4.9,
  },
  {
    id: 2,
    title: "The Witcher 3: Wild Hunt",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    price: 999,
    discountPercent: 50,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.8,
  },
  {
    id: 3,
    title: "God of War Ragnarök",
    imageUrl:
      "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=2080&auto=format&fit=crop",
    price: 3499,
    categories: ["Экшен", "Приключения"],
    rating: 4.9,
  },
  {
    id: 4,
    title: "Baldur's Gate 3",
    imageUrl:
      "https://images.unsplash.com/photo-1605479232929-06e8e7ef5a1f?q=80&w=2070&auto=format&fit=crop",
    price: 2499,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.9,
  },
  {
    id: 5,
    title: "Starfield",
    imageUrl:
      "https://images.unsplash.com/photo-1581375234833-bfd1881625a1?q=80&w=1974&auto=format&fit=crop",
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
    imageUrl:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop",
    price: 3499,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.7,
    isNew: true,
  },
  {
    id: 7,
    title: "Call of Duty: Black Ops 6",
    imageUrl:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1947&auto=format&fit=crop",
    price: 2999,
    categories: ["Шутер", "Экшен"],
    rating: 4.5,
    isNew: true,
  },
  {
    id: 8,
    title: "STALKER 2: Heart of Chornobyl",
    imageUrl:
      "https://images.unsplash.com/photo-1624988223455-2e03e189fdb3?q=80&w=2070&auto=format&fit=crop",
    price: 2499,
    categories: ["Шутер", "Хоррор"],
    rating: 4.6,
    isNew: true,
  },
  {
    id: 9,
    title: "Star Wars Outlaws",
    imageUrl:
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop",
    price: 3299,
    categories: ["Приключения", "Экшен"],
    rating: 4.4,
    isNew: true,
  },
  {
    id: 10,
    title: "Frostpunk 2",
    imageUrl:
      "https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=2070&auto=format&fit=crop",
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
    imageUrl:
      "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?q=80&w=2070&auto=format&fit=crop",
    price: 2499,
    discountPercent: 40,
    categories: ["Приключения", "Фэнтези"],
    rating: 4.7,
  },
  {
    id: 12,
    title: "Resident Evil 4 Remake",
    imageUrl:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop",
    price: 1999,
    discountPercent: 30,
    categories: ["Хоррор", "Экшен"],
    rating: 4.8,
  },
  {
    id: 13,
    title: "Dying Light 2",
    imageUrl:
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop",
    price: 1999,
    discountPercent: 35,
    categories: ["Выживание", "Хоррор"],
    rating: 4.5,
  },
  {
    id: 14,
    title: "Diablo 4",
    imageUrl:
      "https://images.unsplash.com/photo-1599148400620-8e54ae5d5cd5?q=80&w=2071&auto=format&fit=crop",
    price: 2999,
    discountPercent: 25,
    categories: ["Ролевая", "Экшен"],
    rating: 4.6,
  },
];

// Рекомендуемые игры
export const featuredGames: Game[] = [
  {
    id: 15,
    title: "Final Fantasy XVI",
    imageUrl:
      "https://images.unsplash.com/photo-1591465001609-ded6360ecaab?q=80&w=1974&auto=format&fit=crop",
    price: 3999,
    discountPercent: 20,
    categories: ["Ролевая", "Фэнтези"],
    rating: 4.8,
  },
  {
    id: 16,
    title: "Alan Wake 2",
    imageUrl:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop",
    price: 2499,
    categories: ["Хоррор", "Приключения"],
    rating: 4.9,
  },
];

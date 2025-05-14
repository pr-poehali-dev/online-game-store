
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 bg-game-dark/90 backdrop-blur-md border-b border-game-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-game-primary rounded-md flex items-center justify-center">
              <span className="text-black font-montserrat font-bold">G</span>
            </div>
            <span className="text-xl font-montserrat font-bold text-white hidden sm:block">
              GameStore
            </span>
          </Link>

          {/* Основная навигация - скрыта на мобильных */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-game-primary transition">Главная</Link>
            <Link to="/catalog" className="text-white hover:text-game-primary transition">Каталог</Link>
            <Link to="/new" className="text-white hover:text-game-primary transition">Новинки</Link>
            <Link to="/sale" className="text-white hover:text-game-primary transition">Скидки</Link>
          </nav>

          {/* Правая часть навигации */}
          <div className="flex items-center gap-4">
            {/* Поиск - для десктопов */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Поиск игр..."
                className="bg-muted/40 border border-game-primary/20 focus:border-game-primary rounded-full pl-10 pr-4 py-2 w-48 lg:w-64 text-sm focus:outline-none"
              />
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={16}
              />
            </div>

            {/* Иконки действий */}
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="md:hidden">
              <Icon name="Search" className="text-white" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" className="text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-game-primary text-white text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            
            <Button className="bg-game-primary hover:bg-game-accent text-white rounded-md hidden md:flex">
              Войти
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              <Icon name={isMenuOpen ? "X" : "Menu"} className="text-white" />
            </Button>
          </div>
        </div>

        {/* Мобильный поиск */}
        {isSearchOpen && (
          <div className="mt-3 relative md:hidden animate-fadeIn">
            <input
              type="text"
              placeholder="Поиск игр..."
              className="bg-muted/40 border border-game-primary/20 focus:border-game-primary rounded-full pl-10 pr-10 py-2 w-full text-sm focus:outline-none"
              autoFocus
            />
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={16}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
              onClick={toggleSearch}
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        )}

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-game-dark border-t border-game-primary/20 mt-3 animate-fadeIn">
            <nav className="flex flex-col py-2">
              <Link to="/" className="px-4 py-3 hover:bg-muted/20" onClick={toggleMenu}>
                Главная
              </Link>
              <Link to="/catalog" className="px-4 py-3 hover:bg-muted/20" onClick={toggleMenu}>
                Каталог
              </Link>
              <Link to="/new" className="px-4 py-3 hover:bg-muted/20" onClick={toggleMenu}>
                Новинки
              </Link>
              <Link to="/sale" className="px-4 py-3 hover:bg-muted/20" onClick={toggleMenu}>
                Скидки
              </Link>
              <div className="px-4 py-3">
                <Button className="w-full bg-game-primary hover:bg-game-accent">
                  Войти
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

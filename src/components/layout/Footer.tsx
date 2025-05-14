
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-game-dark border-t border-game-primary/20 py-12">
      <div className="container mx-auto px-4">
        {/* Верхняя часть футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-game-primary rounded-md flex items-center justify-center">
                <span className="text-black font-montserrat font-bold">G</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-white">
                GameStore
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Ваш надежный магазин цифровых игр с огромным выбором и выгодными ценами. Играйте с удовольствием!
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-game-primary">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-game-primary">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-game-primary">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-game-primary">
                <Icon name="Youtube" />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-white font-bold mb-4">Магазин</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-gray-400 hover:text-game-primary transition">
                  Все игры
                </Link>
              </li>
              <li>
                <Link to="/new" className="text-gray-400 hover:text-game-primary transition">
                  Новинки
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-game-primary transition">
                  Скидки и акции
                </Link>
              </li>
              <li>
                <Link to="/soon" className="text-gray-400 hover:text-game-primary transition">
                  Скоро в продаже
                </Link>
              </li>
              <li>
                <Link to="/bundles" className="text-gray-400 hover:text-game-primary transition">
                  Наборы игр
                </Link>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="text-white font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-game-primary transition">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-game-primary transition">
                  Техподдержка
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-400 hover:text-game-primary transition">
                  Возврат товара
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-game-primary transition">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-game-primary transition">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400">
                <Icon name="Mail" className="text-game-primary shrink-0" />
                <span>support@gamestore.ru</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Icon name="Phone" className="text-game-primary shrink-0" />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Icon name="MapPin" className="text-game-primary shrink-0" />
                <span>г. Москва, ул. Игровая, 42</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Icon name="Clock" className="text-game-primary shrink-0" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="pt-6 border-t border-game-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GameStore. Все права защищены.
          </p>
          <div className="flex gap-4">
            <img src="https://via.placeholder.com/40x25/333333/FFFFFF?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25/333333/FFFFFF?text=MC" alt="MasterCard" className="h-6" />
            <img src="https://via.placeholder.com/40x25/333333/FFFFFF?text=MIR" alt="Mir" className="h-6" />
            <img src="https://via.placeholder.com/40x25/333333/FFFFFF?text=SBP" alt="СБП" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

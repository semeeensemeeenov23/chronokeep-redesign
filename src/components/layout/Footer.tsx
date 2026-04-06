import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-dark-300 border-t border-dark-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-600 mb-4">ChronoKeep</h3>
            <p className="text-gray-400">
              Современные решения для цифровой эпохи
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-600">Главная</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-600">О нас</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-600">Блог</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-600">Услуги</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@chronokeep.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Адрес: Москва, ул. Технологическая, д. 1</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 text-2xl">
                <FiGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 text-2xl">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 text-2xl">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-100 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ChronoKeep. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
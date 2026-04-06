import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', color: '#ffffff' },
    { icon: FiTwitter, href: 'https://twitter.com', color: '#ffffff' },
    { icon: FiLinkedin, href: 'https://linkedin.com', color: '#ffffff' }
  ];

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about' },
    { name: 'Услуги', path: '/services' },
    { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contact' }
  ];

  return (
    <footer className="footer-custom">
      <div className="footer-gradient-bar" />
      
      <div className="container">
        <div className="footer-grid">
          {/* Логотип и описание */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="footer-logo-wrapper">
              <Link to="/" className="footer-logo">
                ChronoKeep
              </Link>
            </motion.div>
            <p className="footer-description">
              Инновационные решения для цифровой трансформации вашего бизнеса
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3, rotate: 360 }}
                    className="footer-social-icon"
                    aria-label={social.href === 'https://github.com' ? 'GitHub' : social.href === 'https://twitter.com' ? 'Twitter' : 'LinkedIn'}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="footer-title">Навигация</h4>
            <ul className="footer-links">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="footer-link"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-contact">
              <li>
                <FiMail className="footer-contact-icon" />
                <a href="mailto:info@chronokeep.com" className="footer-contact-link">info@chronokeep.com</a>
              </li>
              <li>
                <FiPhone className="footer-contact-icon" />
                <a href="tel:+79991234567" className="footer-contact-link">+7 (999) 123-45-67</a>
              </li>
              <li>
                <FiMapPin className="footer-contact-icon" />
                <span>Москва, ул. Технологическая, д. 1</span>
              </li>
            </ul>
          </div>

          {/* Подписка */}
          <div>
            <h4 className="footer-title">Новости</h4>
            <p className="footer-newsletter-text">
              Подпишитесь на рассылку и получайте свежие новости первыми
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="footer-form">
              <input
                type="email"
                placeholder="Ваш email"
                className="footer-input"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="footer-button"
              >
                <FiSend size={16} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Копирайт */}
        <div className="footer-copyright">
          <p>© {currentYear} ChronoKeep. Все права защищены. Сделано с ❤️ для цифрового будущего</p>
        </div>
      </div>

      <style>{`
        .footer-custom {
          position: relative;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(2, 6, 23, 0.95));
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(79, 70, 229, 0.2);
          margin-top: 0;
          overflow-x: hidden;
          width: 100%;
        }
        
        .footer-gradient-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #4f46e5, #ec489a, #4f46e5, transparent);
          background-size: 200% auto;
          animation: gradientMove 3s linear infinite;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          padding: 4rem 0 2rem;
        }
        
        .footer-logo-wrapper {
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .footer-logo {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(135deg, #4f46e5, #ec489a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
        }
        
        .footer-description {
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .footer-social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(79, 70, 229, 0.1);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          transition: all 0.3s ease;
          border: 1px solid rgba(79, 70, 229, 0.2);
        }
        
        .footer-social-icon:hover {
          background: #4f46e5;
          color: #fff;
          border-color: #4f46e5;
        }
        
        .footer-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #fff;
          position: relative;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #4f46e5;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          font-size: 0.875rem;
        }
        
        .footer-link:hover {
          color: #4f46e5;
          transform: translateX(5px);
        }
        
        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-contact li {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
        }
        
        .footer-contact-icon {
          color: #4f46e5;
          flex-shrink: 0;
        }
        
        .footer-contact-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-contact-link:hover {
          color: #4f46e5;
        }
        
        .footer-newsletter-text {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        
        .footer-form {
          display: flex;
          gap: 0.5rem;
        }
        
        .footer-input {
          flex: 1;
          padding: 0.75rem;
          border-radius: 0.5rem;
          background: rgba(31, 41, 55, 0.5);
          border: 1px solid rgba(79, 70, 229, 0.3);
          color: #fff;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.3s ease;
        }
        
        .footer-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }
        
        .footer-button {
          padding: 0.75rem;
          border-radius: 0.5rem;
          background: #4f46e5;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .footer-button:hover {
          background: #6366f1;
        }
        
        .footer-copyright {
          border-top: 1px solid rgba(51, 65, 85, 0.3);
          padding: 1.5rem 0;
          text-align: center;
        }
        
        .footer-copyright p {
          color: #6b7280;
          font-size: 0.75rem;
          margin: 0;
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        /* Планшеты: 2 колонки */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            padding: 3rem 0 1.5rem;
          }
        }
        
        /* Мобильные: 1 колонка */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            padding: 2.5rem 0 1.5rem;
          }
          
          .footer-copyright {
            padding: 1rem 0;
          }
        }
      `}</style>
    </footer>
  );
};
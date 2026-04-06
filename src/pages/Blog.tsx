import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock, FiArrowRight } from 'react-icons/fi';

const articles = [
  {
    id: 1,
    title: 'Будущее цифровой трансформации',
    excerpt: 'Исследуем, как новые технологии меняют индустрии и создают новые возможности для бизнеса.',
    image: `images/blog/digital-transformation.jpg`, 
    date: '15 марта 2024',
    readTime: '8 мин',
    author: 'Алексей Иванов',
    category: 'Технологии',
    slug: 'future-digital-transformation'
  },
  {
    id: 2,
    title: 'Оптимизация процесса разработки',
    excerpt: 'Лучшие практики и инструменты для повышения продуктивности разработки.',
    image: `images/blog/development-optimization.jpg`, 
    date: '10 марта 2024',
    readTime: '6 мин',
    author: 'Мария Петрова',
    category: 'Разработка',
    slug: 'optimizing-development-workflow'
  },
  {
    id: 3,
    title: 'Создание масштабируемых приложений',
    excerpt: 'Принципы создания приложений, которые растут вместе с вашей аудиторией.',
    image: `images/blog/scalable-apps.jpg`, 
    date: '5 марта 2024',
    readTime: '10 мин',
    author: 'Дмитрий Смирнов',
    category: 'Архитектура',
    slug: 'building-scalable-applications'
  }
];

export const Blog = () => {
  return (
    <main style={{ backgroundColor: '#0f172a' }}>
      <section style={{
        position: 'relative',
        padding: '8rem 0 4rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.15), transparent 70%)'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(79, 70, 229, 0.1)',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(79, 70, 229, 0.3)'
              }}
            >
              <span style={{ color: '#4f46e5', fontSize: '0.875rem', fontWeight: '500' }}>📝 Наш блог</span>
            </motion.div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Полезные статьи
            </h1>
            <p className="text-gray-300" style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              maxWidth: '600px', 
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              Идеи, инсайты и экспертные мнения от нашей команды
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card"
                style={{
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={`${import.meta.env.BASE_URL}${article.image}`} // ИСПРАВЛЕНО
                    alt={article.title} 
                    style={{ 
                      width: '100%', 
                      height: 'clamp(200px, 30vw, 240px)', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(79, 70, 229, 0.9)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {article.category}
                  </div>
                </div>

                <div className="card-body" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FiCalendar size={14} color="#4f46e5" />
                      <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{article.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FiClock size={14} color="#4f46e5" />
                      <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{article.readTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FiUser size={14} color="#4f46e5" />
                      <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{article.author}</span>
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    lineHeight: '1.3',
                    color: '#fff'
                  }}>
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400" style={{ 
                    lineHeight: '1.6', 
                    marginBottom: '1.5rem',
                    fontSize: 'clamp(0.875rem, 3.5vw, 1rem)'
                  }}>
                    {article.excerpt}
                  </p>

                  <Link 
                    to={`/blog/${article.slug}`} 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#4f46e5',
                      textDecoration: 'none',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '0.75rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '0.5rem';
                    }}
                  >
                    Читать статью
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </main>
  );
};
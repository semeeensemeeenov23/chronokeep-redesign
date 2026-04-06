import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiCpu, 
  FiZap, 
  FiShield, 
  FiHeadphones
} from 'react-icons/fi';

const features = [
  { 
    title: 'Инновационные решения', 
    desc: 'Современные технологии для вашего бизнеса',
    icon: FiCpu,
    color: '#4f46e5',
    stats: '150+',
    statLabel: 'проектов',
    progress: 95
  },
  { 
    title: 'Высокая производительность', 
    desc: 'Оптимизировано для скорости и эффективности',
    icon: FiZap,
    color: '#f59e0b',
    stats: '99.9%',
    statLabel: 'аптайм',
    progress: 99
  },
  { 
    title: 'Безопасность', 
    desc: 'Защита корпоративного уровня',
    icon: FiShield,
    color: '#10b981',
    stats: '24/7',
    statLabel: 'мониторинг',
    progress: 98
  },
  { 
    title: '24/7 Поддержка', 
    desc: 'Помощь экспертов всегда на связи',
    icon: FiHeadphones,
    color: '#ec489a',
    stats: '< 15мин',
    statLabel: 'ответ',
    progress: 92
  }
];

const articles = [
  {
    title: 'Будущее цифровой трансформации',
    excerpt: 'Как новые технологии меняют бизнес',
    image: 'images/blog/digital-transformation.jpg',
    date: '15 марта 2024',
    slug: 'digital-transformation'
  },
  {
    title: 'Оптимизация разработки',
    excerpt: 'Лучшие практики для команд',
    image: 'images/blog/development-optimization.jpg',
    date: '10 марта 2024',
    slug: 'development-optimization'
  },
  {
    title: 'Масштабируемые приложения',
    excerpt: 'Принципы создания надежных систем',
    image: 'images/blog/scalable-apps.jpg',
    date: '5 марта 2024',
    slug: 'scalable-apps'
  }
];

export const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
              Добро пожаловать в <span className="text-primary">будущее</span>
            </h1>
            <p className="text-gray-300" style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              maxWidth: '600px', 
              margin: '1rem auto 2rem',
              padding: '0 1rem'
            }}>
              Инновационные решения для современного мира. Помогаем бизнесу воплощать идеи в реальность
            </p>
            <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg">Начать</button>
              <button className="btn btn-outline btn-lg">Узнать больше</button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#020617' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}
          >
            <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', marginBottom: '1rem' }}>Почему выбирают нас</h2>
            <p className="text-gray-300" style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              maxWidth: '600px', 
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              Мы создаем технологии, которые меняют бизнес
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                  style={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                  }} />
                  
                  <div className="card-body" style={{ 
                    padding: 'clamp(1rem, 4vw, 2rem)', 
                    position: 'relative', 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{
                        width: 'clamp(50px, 12vw, 70px)',
                        height: 'clamp(50px, 12vw, 70px)',
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}08)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <Icon size={36} color={feature.color} />
                    </motion.div>

                    <h3 style={{ 
                      fontSize: 'clamp(1.25rem, 5vw, 1.5rem)', 
                      marginBottom: '0.75rem'
                    }}>{feature.title}</h3>
                    
                    <p className="text-gray-400" style={{ 
                      marginBottom: '1.5rem', 
                      lineHeight: '1.6',
                      fontSize: 'clamp(0.875rem, 3.5vw, 1rem)'
                    }}>
                      {feature.desc}
                    </p>

                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#334155',
                      borderRadius: '3px',
                      marginBottom: '1rem',
                      marginTop: 'auto',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                          borderRadius: '3px'
                        }}
                      />
                    </div>

                    <div style={{
                      borderTop: '1px solid #334155',
                      paddingTop: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      <div>
                        <div style={{ fontSize: 'clamp(1.25rem, 5vw, 1.75rem)', fontWeight: 'bold', color: feature.color }}>
                          {feature.stats}
                        </div>
                        <div style={{ fontSize: 'clamp(0.75rem, 3vw, 0.875rem)', color: '#9ca3af' }}>
                          {feature.statLabel}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        style={{ color: feature.color, cursor: 'pointer' }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="stats-grid">
            <div className="text-center">
              <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 'bold', color: '#4f46e5' }}>50+</div>
              <div className="text-gray-400" style={{ fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}>Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 'bold', color: '#4f46e5' }}>200+</div>
              <div className="text-gray-400" style={{ fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}>Завершенных проектов</div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 'bold', color: '#4f46e5' }}>5 лет</div>
              <div className="text-gray-400" style={{ fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}>На рынке</div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 'bold', color: '#4f46e5' }}>24/7</div>
              <div className="text-gray-400" style={{ fontSize: 'clamp(0.75rem, 3vw, 0.875rem)' }}>Техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-center" style={{ 
            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', 
            marginBottom: 'clamp(2rem, 5vw, 3rem)' 
          }}>Последние статьи</h2>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{ width: '100%', height: 'clamp(180px, 30vw, 200px)', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://picsum.photos/id/0/400/300';
                  }}
                />
                <div className="card-body">
                  <p style={{ color: '#4f46e5', fontSize: 'clamp(0.75rem, 3vw, 0.875rem)', marginBottom: '0.5rem' }}>{article.date}</p>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.25rem)' }}>{article.title}</h3>
                  <p className="text-gray-400" style={{ 
                    marginBottom: '1rem', 
                    fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
                    lineHeight: '1.6'
                  }}>{article.excerpt}</p>
                  <Link to={`/blog/${article.slug}`} className="btn btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
                    Читать далее →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: clamp(2rem, 6vw, 4rem);
          padding: clamp(1rem, 4vw, 2rem);
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-radius: 1.5rem;
          border: 1px solid #334155;
        }
        
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(1, 1fr);
          }
          .stats-grid {
            grid-template-columns: repeat(1, 1fr);
          }
          .articles-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </main>
  );
};
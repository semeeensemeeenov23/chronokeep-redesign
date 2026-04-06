import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Веб-разработка', 
    desc: 'Современные адаптивные сайты на передовых технологиях', 
    image: '/images/services/web-dev.jpg'
  },
  { 
    title: 'Мобильные приложения', 
    desc: 'Кроссплатформенные приложения для iOS и Android', 
    image: '/images/services/mobile-app.jpg'
  },
  { 
    title: 'Облачные решения', 
    desc: 'Масштабируемая облачная инфраструктура', 
    image: '/images/services/cloud.jpg'
  },
  { 
    title: 'UI/UX дизайн', 
    desc: 'Пользовательский интерфейс, ориентированный на людей', 
    image: '/images/services/ui-ux-design.jpg'
  },
  { 
    title: 'Разработка API', 
    desc: 'Надежные и безопасные API для интеграции', 
    image: '/images/services/api-development.jpg'
  },
  { 
    title: 'IT-консалтинг', 
    desc: 'Экспертное сопровождение цифровой трансформации', 
    image: '/images/services/it-consulting.jpg'
  }
];

export const Services = () => {
  return (
    <main>
      <section className="py-20 pt-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 style={{ 
              fontSize: 'clamp(2rem, 8vw, 3rem)',
              marginBottom: '1rem'
            }}>Наши услуги</h1>
            <p className="text-gray-300" style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              maxWidth: '600px', 
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              Комплексные решения, адаптированные под ваши потребности
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{ 
                    width: '100%', 
                    height: 'clamp(180px, 30vw, 200px)', 
                    objectFit: 'cover' 
                  }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://picsum.photos/id/0/400/300';
                  }}
                />
                <div className="card-body text-center">
                  <h3 style={{ 
                    fontSize: 'clamp(1.25rem, 5vw, 1.5rem)', 
                    marginBottom: '0.75rem' 
                  }}>{service.title}</h3>
                  <p className="text-gray-400" style={{ 
                    fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
                    lineHeight: '1.6'
                  }}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </main>
  );
};
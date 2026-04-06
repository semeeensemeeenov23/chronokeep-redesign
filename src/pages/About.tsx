import { motion } from 'framer-motion';

const team = [
  { 
    name: 'Алексей Иванов', 
    role: 'Генеральный директор', 
    image: 'images/team/ceo.jpg',
    bio: 'Более 15 лет в IT-индустрии, эксперт по цифровой трансформации'
  },
  { 
    name: 'Мария Петрова', 
    role: 'Технический директор', 
    image: 'images/team/cto.jpg',
    bio: 'Специалист по масштабируемым архитектурам и облачным решениям'
  },
  { 
    name: 'Дмитрий Смирнов', 
    role: 'Ведущий разработчик', 
    image: 'images/team/lead-dev.jpg',
    bio: 'Full-stack разработчик с опытом в FinTech и E-commerce'
  }
];

export const About = () => {
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
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              marginBottom: '1rem'
            }}>О нас</h1>
            <p className="text-gray-300" style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              maxWidth: '800px', 
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              Мы команда увлеченных технологов, создающих выдающиеся цифровые продукты
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#020617' }}>
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="images/hero-bg.jpg" 
                alt="Наша миссия" 
                style={{ borderRadius: '1rem', width: '100%' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/id/10/600/400';
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{ 
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                marginBottom: '1rem' 
              }}>Наша миссия</h2>
              <p className="text-gray-300" style={{ 
                marginBottom: '2rem',
                fontSize: 'clamp(0.875rem, 3.5vw, 1rem)',
                lineHeight: '1.6'
              }}>
                Помогать бизнесу расти с помощью передовых технологий и инновационных решений
              </p>
              <h2 style={{ 
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                marginBottom: '1rem' 
              }}>Наши ценности</h2>
              <ul className="text-gray-300" style={{ 
                listStyle: 'none', 
                padding: 0,
                fontSize: 'clamp(0.875rem, 3.5vw, 1rem)'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Инновации прежде всего</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Успех клиента — наш успех</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Стремление к совершенству</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Постоянное развитие</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-center" style={{ 
            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }}>Наша команда</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="card-body">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ 
                      width: 'clamp(100px, 20vw, 150px)',
                      height: 'clamp(100px, 20vw, 150px)',
                      borderRadius: '50%', 
                      margin: '0 auto 1rem', 
                      objectFit: 'cover' 
                    }}
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/id/${20 + index}/200/200`;
                    }}
                  />
                  <h3 style={{ 
                    fontSize: 'clamp(1.1rem, 4.5vw, 1.25rem)',
                    marginBottom: '0.5rem'
                  }}>{member.name}</h3>
                  <p className="text-primary" style={{ fontSize: 'clamp(0.875rem, 3.5vw, 1rem)' }}>{member.role}</p>
                  <p className="text-gray-400" style={{ 
                    fontSize: 'clamp(0.75rem, 3vw, 0.875rem)', 
                    marginTop: '0.5rem',
                    lineHeight: '1.5'
                  }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          align-items: center;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
          }
          .team-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </main>
  );
};
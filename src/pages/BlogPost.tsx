import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock, FiArrowLeft } from 'react-icons/fi';

const articles = [
  {
    id: 1,
    title: 'Будущее цифровой трансформации',
    content: `
      <p>Цифровая трансформация — это не просто внедрение новых технологий, это фундаментальное изменение подхода к ведению бизнеса. Компании, которые успешно проходят этот путь, получают значительные конкурентные преимущества.</p>
      
      <h3>Ключевые тренды</h3>
      <p>Искусственный интеллект, машинное обучение, интернет вещей — эти технологии меняют правила игры во всех отраслях. От розничной торговли до промышленного производства, везде мы видим примеры успешной цифровой трансформации.</p>
      
      <h3>Как начать трансформацию</h3>
      <p>Первый шаг — это аудит текущих процессов и определение точек роста. Затем необходимо сформировать стратегию и постепенно внедрять изменения, начиная с наиболее критичных областей.</p>
    `,
    image: '/images/blog/digital-transformation.jpg',
    date: '15 марта 2024',
    readTime: '8 мин',
    author: 'Алексей Иванов',
    category: 'Технологии',
    slug: 'future-digital-transformation'
  },
  {
    id: 2,
    title: 'Оптимизация процесса разработки',
    content: `
      <p>Эффективность разработки напрямую влияет на скорость выхода продукта на рынок. Современные методологии и инструменты позволяют значительно ускорить этот процесс.</p>
      
      <h3>Agile и Scrum</h3>
      <p>Гибкие методологии разработки помогают командам быстрее реагировать на изменения требований. Регулярные спринты и ретроспективы позволяют постоянно улучшать процесс.</p>
      
      <h3>CI/CD пайплайны</h3>
      <p>Непрерывная интеграция и доставка — это основа современной разработки. Автоматизация тестирования и деплоя сокращает время выхода релизов и уменьшает количество ошибок.</p>
    `,
    image: '/images/blog/development-optimization.jpg',
    date: '10 марта 2024',
    readTime: '6 мин',
    author: 'Мария Петрова',
    category: 'Разработка',
    slug: 'optimizing-development-workflow'
  },
  {
    id: 3,
    title: 'Создание масштабируемых приложений',
    content: `
      <p>Масштабируемость — это способность системы расти вместе с бизнесом. Правильная архитектура с самого начала позволяет избежать проблем в будущем.</p>
      
      <h3>Микросервисная архитектура</h3>
      <p>Разделение приложения на независимые сервисы позволяет масштабировать только те компоненты, которые испытывают высокую нагрузку. Это делает систему более гибкой и устойчивой.</p>
      
      <h3>Базы данных</h3>
      <p>Выбор правильной базы данных критически важен для масштабируемости. Реляционные, NoSQL, NewSQL — каждый вариант имеет свои преимущества для разных сценариев использования.</p>
    `,
    image: '/images/blog/scalable-apps.jpg',
    date: '5 марта 2024',
    readTime: '10 мин',
    author: 'Дмитрий Смирнов',
    category: 'Архитектура',
    slug: 'building-scalable-applications'
  }
];

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '120px', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '1rem' }}>Статья не найдена</h1>
        <button onClick={() => navigate('/blog')} className="btn btn-primary">
          Вернуться в блог
        </button>
      </div>
    );
  }

  return (
    <main>
      <section className="py-20 pt-24">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate('/blog')} 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'none',
                border: 'none',
                color: '#4f46e5',
                cursor: 'pointer',
                marginBottom: '2rem',
                fontSize: '0.875rem'
              }}
            >
              <FiArrowLeft size={16} />
              Назад к статьям
            </button>

            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', borderRadius: '1rem', marginBottom: '2rem' }}
              onError={(e) => {
                e.currentTarget.src = 'https://picsum.photos/id/0/1200/600';
              }}
            />
            
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCalendar size={14} color="#4f46e5" />
                <span style={{ color: '#9ca3af' }}>{article.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiClock size={14} color="#4f46e5" />
                <span style={{ color: '#9ca3af' }}>{article.readTime}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiUser size={14} color="#4f46e5" />
                <span style={{ color: '#9ca3af' }}>{article.author}</span>
              </div>
              <div style={{
                background: 'rgba(79, 70, 229, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.75rem',
                color: '#4f46e5'
              }}>
                {article.category}
              </div>
            </div>

            <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{article.title}</h1>
            
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: '1.8',
                color: '#d1d5db'
              }}
            />
          </motion.div>
        </div>
      </section>

      <style>{`
        .blog-content h3 {
          font-size: 1.5rem;
          margin: 2rem 0 1rem;
          color: #4f46e5;
        }
        .blog-content p {
          margin-bottom: 1rem;
        }
      `}</style>
    </main>
  );
};
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: FiMapPin, title: 'Адрес', value: 'Москва, ул. Технологическая, д. 1', color: '#4f46e5' },
    { icon: FiMail, title: 'Email', value: 'info@chronokeep.com', link: 'mailto:info@chronokeep.com', color: '#4f46e5' },
    { icon: FiPhone, title: 'Телефон', value: '+7 (999) 123-45-67', link: 'tel:+79991234567', color: '#4f46e5' },
    { icon: FiClock, title: 'Часы работы', value: 'Пн-Пт: 9:00 - 18:00', color: '#4f46e5' }
  ];

  return (
    <main style={{ backgroundColor: '#0f172a', minHeight: '100vh' }}>
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
            style={{ textAlign: 'center' }}
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
              <span style={{ color: '#4f46e5', fontSize: '0.875rem', fontWeight: '500' }}>📬 Свяжитесь с нами</span>
            </motion.div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Готовы к сотрудничеству?
            </h1>
            <p className="text-gray-300" style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6',
              padding: '0 1rem'
            }}>
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                borderRadius: '1.5rem',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                border: '1px solid rgba(79, 70, 229, 0.2)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  background: 'linear-gradient(135deg, #fff, #4f46e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Контактная информация
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.75rem',
                          borderRadius: '0.75rem',
                          transition: 'all 0.3s ease',
                          background: 'rgba(31, 41, 55, 0.3)'
                        }}
                      >
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: 'rgba(79, 70, 229, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Icon size={22} color={item.color} />
                        </div>
                        <div>
                          <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{item.title}</p>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              style={{ color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500' }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p style={{ color: '#fff', fontSize: '0.875rem', fontWeight: '500' }}>{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} style={{
                background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                borderRadius: '1.5rem',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                border: '1px solid rgba(79, 70, 229, 0.2)'
              }}>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      marginBottom: '1.5rem',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FiCheckCircle size={20} />
                    <span>Сообщение успешно отправлено! 🎉</span>
                  </motion.div>
                )}

                <h3 style={{
                  fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #fff, #4f46e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Отправить сообщение
                </h3>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: focused.name ? '#4f46e5' : '#9ca3af',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}>
                    <FiUser size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused({ ...focused, name: true })}
                    onBlur={() => setFocused({ ...focused, name: false })}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(31, 41, 55, 0.5)',
                      border: `1px solid ${focused.name ? '#4f46e5' : '#334155'}`,
                      color: 'white',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    placeholder="Иван Иванов"
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: focused.email ? '#4f46e5' : '#9ca3af',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}>
                    <FiMail size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused({ ...focused, email: true })}
                    onBlur={() => setFocused({ ...focused, email: false })}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(31, 41, 55, 0.5)',
                      border: `1px solid ${focused.email ? '#4f46e5' : '#334155'}`,
                      color: 'white',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    placeholder="ivan@example.com"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: focused.message ? '#4f46e5' : '#9ca3af',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}>
                    <FiMessageSquare size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Сообщение
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused({ ...focused, message: true })}
                    onBlur={() => setFocused({ ...focused, message: false })}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(31, 41, 55, 0.5)',
                      border: `1px solid ${focused.message ? '#4f46e5' : '#334155'}`,
                      color: 'white',
                      resize: 'vertical',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FiSend size={18} />
                  Отправить сообщение
                </motion.button>

                <p style={{
                  textAlign: 'center',
                  color: '#6b7280',
                  fontSize: '0.75rem',
                  marginTop: '1rem'
                }}>
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
};
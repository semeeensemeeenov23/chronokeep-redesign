import type { Article, Service, Feature } from '../types';

export const features: Feature[] = [
  {
    id: 1,
    title: "Инновационные решения",
    description: "Современные технологии, адаптированные под потребности вашего бизнеса",
    icon: "FiCpu"
  },
  {
    id: 2,
    title: "Высокая производительность",
    description: "Оптимизировано для скорости и эффективности работы",
    icon: "FiZap"
  },
  {
    id: 3,
    title: "Безопасная инфраструктура",
    description: "Защита корпоративного уровня для ваших данных",
    icon: "FiShield"
  },
  {
    id: 4,
    title: "Круглосуточная поддержка",
    description: "Помощь экспертов 24/7 когда она вам нужна",
    icon: "FiHeadphones"
  }
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Будущее цифровой трансформации",
    excerpt: "Исследуем, как новые технологии меняют индустрии и создают новые возможности для бизнеса",
    content: "Полный текст статьи о цифровой трансформации...",
    image: "https://picsum.photos/id/0/400/300",
    date: "15 марта 2024",
    slug: "future-digital-transformation"
  },
  {
    id: 2,
    title: "Оптимизация процесса разработки",
    excerpt: "Лучшие практики и инструменты для повышения продуктивности разработки",
    content: "Полный текст статьи об оптимизации...",
    image: "https://picsum.photos/id/1/400/300",
    date: "10 марта 2024",
    slug: "optimizing-development-workflow"
  },
  {
    id: 3,
    title: "Создание масштабируемых приложений",
    excerpt: "Принципы создания приложений, которые растут вместе с вашей аудиторией",
    content: "Полный текст статьи о масштабировании...",
    image: "https://picsum.photos/id/2/400/300",
    date: "5 марта 2024",
    slug: "building-scalable-applications"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Веб-разработка",
    description: "Современные адаптивные сайты на передовых технологиях",
    icon: "FiCode"
  },
  {
    id: 2,
    title: "Мобильные приложения",
    description: "Кроссплатформенные приложения для iOS и Android",
    icon: "FiSmartphone"
  },
  {
    id: 3,
    title: "Облачные решения",
    description: "Масштабируемая облачная инфраструктура и деплой",
    icon: "FiCloud"
  },
  {
    id: 4,
    title: "UI/UX дизайн",
    description: "Пользовательский интерфейс, ориентированный на людей",
    icon: "FiLayout"
  },
  {
    id: 5,
    title: "Разработка API",
    description: "Надежные и безопасные API для бесшовной интеграции",
    icon: "FiLink"
  },
  {
    id: 6,
    title: "IT-консалтинг",
    description: "Экспертное сопровождение цифровой трансформации",
    icon: "FiUsers"
  }
];
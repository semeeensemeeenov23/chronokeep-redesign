import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">
          ChronoKeep
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Добро пожаловать в будущее
        </p>
        <div className="space-x-4">
          <Link 
            to="/about" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300"
          >
            О нас
          </Link>
          <Link 
            to="/services" 
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
          >
            Услуги
          </Link>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-6">О нас</h1>
        <p className="text-xl text-gray-300 mb-8">
          Мы создаем современные веб-приложения
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-6">Наши услуги</h1>
        <p className="text-xl text-gray-300 mb-8">
          Страница в разработке
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
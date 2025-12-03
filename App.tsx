import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingActions from './components/Layout/FloatingActions'; // Updated from WhatsAppButton
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import NeighborhoodPage from './pages/NeighborhoodPage';

// Simple component to handle scroll reset
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopWrapper />
      <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cidade/:cityName" element={<CityPage />} />
            <Route path="/bairro/:neighborhoodName" element={<NeighborhoodPage />} />
          </Routes>
        </div>
        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
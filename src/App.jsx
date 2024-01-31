import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import CardGallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beranda" element={<Home />} />
          <Route path="/tentang" element={<AboutUs />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/galeri" element={<CardGallery />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

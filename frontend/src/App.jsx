import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fests from './components/Fests';
import Footer from './components/Footer';
import TechSparksNova from './pages/TechSparksNova';
import EventDetails from './pages/EventDetails';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Fests />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/tech-sparks-nova" element={<TechSparksNova />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

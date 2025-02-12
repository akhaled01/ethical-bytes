import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingAvatar from './components/FloatingAvatar';
import Home from './pages/Home';
import Principles from './pages/Principles';
import CaseStudies from './pages/CaseStudies';
// import Resources from './pages/Resources';
import Game from './pages/Game';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <FloatingAvatar />
    </div>
  );
}

export default App;
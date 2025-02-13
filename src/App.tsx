import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingAvatar from "./components/FloatingAvatar";
import { ThemeProvider } from "./context/ThemeContext";
import { NavbarProvider } from "./context/NavbarContext";
import Home from "./pages/Home";
import Principles from "./pages/Principles";
import CaseStudies from "./pages/CaseStudies";
// import Resources from './pages/Resources';
import Game from "./pages/Game";
import About from "./pages/About";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <NavbarProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950 transition-colors duration-300">
        <Navbar />
        <main className="">
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
      </NavbarProvider>
    </ThemeProvider>
  );
}

export default App;

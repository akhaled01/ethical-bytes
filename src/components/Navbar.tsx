import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, GamepadIcon, Users, Home } from 'lucide-react';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-white">Ethical Bytes</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home />} text="Home" />
            <NavLink to="/principles" icon={<Brain />} text="AI Principles" />
            <NavLink to="/case-studies" icon={<BookOpen />} text="Examples" />
            {/* <NavLink to="/resources" icon={<BookOpen />} text="Resources" /> */}
            <NavLink to="/game" icon={<GamepadIcon />} text="Fun Game" />
            <NavLink to="/about" icon={<Users />} text="About Us" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-white hover:text-yellow-100 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { Brain, BookOpen, GamepadIcon, Users, Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavbar } from "@/context/NavbarContext";


function Navbar() {
  const { isTransparent } = useNavbar();
  return (
    <nav 
      className={`
        fixed w-full z-50 
        transition-all duration-700 ease-in-out
        ${isTransparent 
          ? 'bg-transparent' 
          : 'bg-gradient-to-r from-yellow-500/95 via-amber-600/95 to-orange-600/95 dark:from-purple-900/95 dark:via-purple-800/95 dark:to-purple-900/95 shadow-lg backdrop-blur-sm'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="Ethical Bytes Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-white dark:text-white">Ethical Bytes</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home />} text="Home" />
            <NavLink to="/principles" icon={<Brain />} text="AI Principles" />
            <NavLink to="/case-studies" icon={<BookOpen />} text="Examples" />
            {/* <NavLink to="/resources" icon={<BookOpen />} text="Resources" /> */}
            <NavLink to="/game" icon={<GamepadIcon />} text="Fun Game" />
            <NavLink to="/about" icon={<Users />} text="About Us" />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  to,
  icon,
  text,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      to={to}
      className="flex text-xl items-center space-x-1 text-white hover:text-yellow-100 dark:text-white dark:hover:text-purple-200 transition-all duration-300"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;

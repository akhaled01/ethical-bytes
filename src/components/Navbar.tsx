import React from "react";
import { Link } from "react-router-dom";
import { Brain, BookOpen, GamepadIcon, Users, Home, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavbar } from "@/context/NavbarContext";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
} from "@/components/ui/drawer";


function Navbar() {
  const { isTransparent } = useNavbar();
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { to: "/", icon: <Home />, text: "Home" },
    { to: "/principles", icon: <Brain />, text: "AI Principles" },
    { to: "/case-studies", icon: <BookOpen />, text: "Examples" },
    { to: "/game", icon: <GamepadIcon />, text: "Fun Game" },
    { to: "/about", icon: <Users />, text: "About Us" },
  ];

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

          {/* Desktop and Tablet Navigation */}
          <div className="hidden sm:flex items-center">
            {/* Icon-only navigation for tablets */}
            <div className="sm:flex lg:hidden items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} showText={false} />
              ))}
            </div>
            {/* Full navigation for desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
            </div>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex items-center">
            <ThemeToggle />
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button
                  className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-white" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-[70vh] bg-gradient-to-b from-yellow-500 to-orange-600 dark:from-purple-900 dark:to-purple-800">
                <DrawerHeader className="text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <img src="/assets/logo.png" alt="Ethical Bytes Logo" className="h-8 w-8 object-contain" />
                    <span className="text-xl font-bold">Ethical Bytes</span>
                  </div>
                </DrawerHeader>
                <div className="px-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center space-x-3 text-white hover:text-yellow-100 dark:hover:text-purple-200 transition-all duration-300 py-2.5 px-2 rounded-lg hover:bg-white/10"
                    >
                      {link.icon}
                      <span className="text-lg">{link.text}</span>
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
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
  showText = true,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
  showText?: boolean;
}) {
  return (
    <Link
      to={to}
      className="flex items-center text-white hover:text-yellow-100 dark:text-white dark:hover:text-purple-200 transition-all duration-300 group"
      title={text}
    >
      <span className="text-xl">{icon}</span>
      {showText && (
        <span className="ml-1 text-base lg:text-lg">{text}</span>
      )}
    </Link>
  );
}

export default Navbar;

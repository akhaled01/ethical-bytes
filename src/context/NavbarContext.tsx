import React, { createContext, useContext, useState, useEffect } from 'react';

type NavbarContextType = {
  isTransparent: boolean;
  setIsTransparent: (value: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isTransparent, setIsTransparent] = useState(false);

  // Reset transparency when component unmounts
  useEffect(() => {
    return () => setIsTransparent(false);
  }, []);

  return (
    <NavbarContext.Provider value={{ isTransparent, setIsTransparent }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}

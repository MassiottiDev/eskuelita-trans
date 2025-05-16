
import React, { useState } from 'react';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/media/Logo_Escuelita.jpg"; // Correctly import the image!

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return <header className="bg-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              alt="Eskuelita Trans Logo"
              src={logo} // Use imported image variable
              className="h-10 w-10 rounded-full object-fill"
            />
            <h1 className="text-2xl font-bold text-gray-800">Eskuelita Trans</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#about" label="La Eskuelita" />
            <NavLink href="#initiatives" label="Espacios Permanentes" />
            <NavLink href="#radio" label="Radio de la Eskuelita" />
            <NavLink href="#contact" label="Contacto" />
          </nav>
          
          {/* Mobile Navigation Button */}
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </Button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && <nav className="mt-4 pb-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <NavLink href="#about" label="La Eskuelita" />
              <NavLink href="#initiatives" label="Espacios Permanentes" />
              <NavLink href="#radio" label="Radio de la Eskuelita" />
              <NavLink href="#contact" label="Contacto" />
            </div>
          </nav>}
      </div>
    </header>;
};

const NavLink = ({
  href,
  label
}: {
  href: string;
  label: string;
}) => {
  return <a href={href} className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
      {label}
    </a>;
};
export default Header;

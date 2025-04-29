
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300 
    ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}
  `;

  const navLinks = [
    { title: "Início", href: "#hero" },
    { title: "Cardápio", href: "#menu" },
    { title: "Localização", href: "#location" },
    { title: "Delivery", href: "#delivery" }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-burger-dark">
              BURGER<span className="text-burger">VERSE</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="font-medium text-burger-text hover:text-burger transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Order Button - Desktop */}
          <div className="hidden md:block">
            <Button className="bg-burger hover:bg-burger-hover text-white font-medium">
              Pedir Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="text-burger-dark hover:text-burger"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-accordion-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="py-2 px-4 font-medium text-burger-text hover:text-burger"
                  onClick={toggleMenu}
                >
                  {link.title}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-burger hover:bg-burger-hover text-white font-medium">
                  Pedir Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

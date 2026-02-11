import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Globe, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Fruits', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-accent/20 bg-primary/95 backdrop-blur-md px-6 md:px-12 py-5"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center border border-accent/50 rounded-full p-2 group-hover:border-accent transition-colors">
              <Leaf className="text-accent" size={24} />
            </div>
            <h2 className="text-white text-xl font-serif font-bold tracking-tight uppercase">
              FruitExport <span className="text-accent">Pro</span>
            </h2>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.2em] font-medium transition-colors uppercase ${
                  isActive(link.path)
                    ? 'text-accent relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-accent'
                    : 'text-white/70 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden md:flex items-center text-white/80 hover:text-accent transition-colors">
            <Globe size={24} />
          </button>
          <button className="bg-accent hover:bg-accent/90 text-primary px-8 py-2.5 rounded-sm font-bold text-xs tracking-widest uppercase transition-all shadow-lg">
            Partner With Us
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

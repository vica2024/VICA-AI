"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import Logo from './Logo';
import MainNav from './MainNav';
import UserSection from './UserSection';
import MobileMenuButton from './MobileMenuButton';
import CreditsBadge from './CreditsBadge';
import { MobileMenu } from './MobileMenu';
import LanguageSelect  from './LanguageSelect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-purple-400/20 bg-black/95 py-4 shadow-[0_0_10px_rgba(168,85,247,0.3)] backdrop-blur-sm duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <MainNav />
          </div>
          
          {/* Desktop User Section */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <CreditsBadge credits={5} />
            <UserSection username="Vica" />
            <LanguageSelect />
          </div>
          
          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <CreditsBadge credits={5} mobile />
            <UserSection username="awinweaka" mobile />
            <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}  />
          </div>
           <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
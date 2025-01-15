'use client'; // Add this at the top of the file

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`py-4 border-b border-[#5b3e75] fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90' : 'bg-black'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </div>
          {/* Menu */}
          <div className="text-white space-x-8">
            <span>Home</span>

            <div className=" border-2  text-white font-bold hover:text-white w-22 p-1 rounded-lg inline-flex justify-center items-center hover:border-red-500 ">
              
                           <a
                href="https://s3.eu-west-2.amazonaws.com/cyberquest.alpha.test/index.html"  target="_blank"
                
              >
                <button>Play Game</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

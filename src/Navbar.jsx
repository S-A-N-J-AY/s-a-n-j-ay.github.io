import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold text-gray-900">Portfolio</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800 focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-800 font-medium bg-white">
          <a href="#hero" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#skills" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // 1. SCROLL LISTENER
  // This detects if the user has scrolled down.
  // If they have, we darken the navbar background.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 cursor-pointer">
          <Link href="/">Portfolio.</Link>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>

        {/* MOBILE MENU BUTTON (Simple Placeholder) */}
        {/* In a real app, you'd add a click handler here to open a drawer */}
        <div className="md:hidden text-gray-700 dark:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
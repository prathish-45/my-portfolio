"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-white dark:bg-gray-900">
      
      {/* Background decoration (Optional subtle glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="z-10 max-w-4xl px-4">
        
        {/* 1. Small Greeting */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        {/* 2. Your Name (Gradient Text) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
            Prathish S
          </span>
        </motion.h1>

        {/* 3. Your Title/Role */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-700 dark:text-gray-200 font-semibold mb-6"
        >
          Building scalable web applications.
        </motion.h2>

        {/* 4. Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          I am a Full Stack Developer specializing in React, Next.js, and Java. 
          I build accessible, pixel-perfect, and performant web experiences.
        </motion.p>
 
        {/* 5. Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
            View My Work
          </a>
          <a href="https://github.com/prathish-45" target="_blank" className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            GitHub
          </a>
        </motion.div>
      </div>

      {/* 6. Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10"
      >
        <span className="text-gray-400 text-sm tracking-widest">SCROLL DOWN</span>
      </motion.div>

    </section>
  );
};

export default HeroSection;
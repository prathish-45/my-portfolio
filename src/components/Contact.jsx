"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    // 1. THE ID "contact" IS HERE
    // This allows the Navbar link to find the bottom of the page.
    <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      
      {/* Background Decor (Optional Gradient Blob) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          {/* THE MAILTO LINK */}
          {/* This opens the user's default email app automatically */}
          <a 
            href="mailto:prathishsakthivel@gmail.com" 
            className="inline-block bg-white text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-lg text-lg"
          >
            Say Hello 👋
          </a>
        </motion.div>

        {/* Footer / Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; 2025 Prathish. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/prathish-45" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="www.linkedin.com/in/prathish-s-2a256328b" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/PrathishS45" target="_blank" className="hover:text-white transition-colors">X</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
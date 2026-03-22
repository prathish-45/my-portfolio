"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/SkillsData";



const Skills = () => {
  return (
    // 1. THE ID "skills" IS HERE!
    // This allows the Navbar link (<a href="#skills">) to find this section.
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The technologies I use to build robust applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{y: -10}}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400  mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.category}
              </h3>

              {/* List of Skills */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm hover:scale-105 transform transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
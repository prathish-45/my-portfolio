"use client"

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const ProjectCart = ({ title, description, imageUrl, techStack, githubLink}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{y: -10}}
            transition={{ duration: 0.3 }}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 "
        >
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {tech}
                        </span>
                    ))}
                </div>
                <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white text-sm font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                    View on GitHub
                </a>
            </div>
        </motion.div>
    )
}

export default ProjectCart;
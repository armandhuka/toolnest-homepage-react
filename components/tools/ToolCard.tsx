'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  path: string;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const IconComponent = tool.icon;

  return (
    <Link href={tool.path}>
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 h-full"
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-toolnest-bg p-3 rounded-xl group-hover:bg-toolnest-accent transition-colors duration-300">
              <IconComponent 
                className="text-toolnest-text group-hover:scale-110 transition-transform duration-300" 
                size={24} 
              />
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-toolnest-text mb-2 group-hover:text-toolnest-text/80 transition-colors">
            {tool.name}
          </h3>
          
          <p className="text-toolnest-text/70 text-sm leading-relaxed flex-grow">
            {tool.description}
          </p>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-toolnest-text/60 bg-toolnest-bg px-3 py-1 rounded-full">
              {tool.category}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ToolCard;
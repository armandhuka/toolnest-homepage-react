
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-6 bg-toolnest-accent rounded-full p-1 transition-colors duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="absolute w-4 h-4 bg-toolnest-text rounded-full flex items-center justify-center"
        animate={{
          x: theme === 'light' ? -10 : 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {theme === 'light' ? (
          <Sun size={12} className="text-toolnest-bg" />
        ) : (
          <Moon size={12} className="text-toolnest-bg" />
        )}
      </motion.div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <Sun size={12} className={`text-toolnest-text/40 ${theme === 'light' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        <Moon size={12} className={`text-toolnest-text/40 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;

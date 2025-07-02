
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('toolnest-theme') as Theme;
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
    // Also apply class to html element for better CSS targeting
    document.documentElement.className = theme;
    // Save theme to localStorage
    localStorage.setItem('toolnest-theme', theme);
    
    console.log('Theme applied:', theme);
    console.log('Document theme attribute:', document.documentElement.getAttribute('data-theme'));
    console.log('Document class:', document.documentElement.className);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', prevTheme, 'to', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tools', path: '/tools' },
    { name: 'Contact', path: '/contact' },
    { name: 'Content', path: '/content' }
  ];

  return (
    <footer className="py-12 px-6 bg-toolnest-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-4 md:mb-0">
            © 2025 ToolNest. All rights reserved.
          </div>
          <nav className="flex items-center space-x-6 mb-4 md:mb-0">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.path}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

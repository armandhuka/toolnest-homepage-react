
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, RefreshCw, ArrowRight, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      {/* Header */}
      <header className="bg-toolnest-bg shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-toolnest-text">
              <Link to="/">ToolNest</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Tools', path: '/tools' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-toolnest-text hover:text-toolnest-text/80 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-toolnest-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    item.path === '/about' ? 'after:scale-x-100' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Section 1: Intro */}
      <section className="py-20 px-6 bg-toolnest-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-toolnest-text mb-8"
              variants={itemVariants}
            >
              About ToolNest
            </motion.h1>
            
            <motion.div 
              className="space-y-6 text-lg text-toolnest-text/80"
              variants={itemVariants}
            >
              <p>
                ToolNest was born from a simple idea: the rapidly evolving world of AI tools shouldn't be overwhelming. 
                We recognized that creators, entrepreneurs, and professionals were spending countless hours searching for 
                the right AI solutions, often missing out on incredible tools that could transform their work.
              </p>
              
              <p>
                Our mission is to bridge that gap by curating, categorizing, and presenting the best AI tools in one 
                accessible platform. We're not just another directory – we're your trusted guide in the AI landscape, 
                helping you discover tools that match your specific needs and goals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-20 px-6 bg-toolnest-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-toolnest-text mb-6">Our Mission</h2>
              <ul className="space-y-4 text-toolnest-text/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-toolnest-text rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Democratize access to cutting-edge AI tools for everyone
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-toolnest-text rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Save time by providing curated, tested, and categorized solutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-toolnest-text rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Empower creators and professionals to focus on what matters most
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-toolnest-text mb-6">Our Vision</h2>
              <p className="text-toolnest-text/80 leading-relaxed">
                We envision a future where AI tools are as accessible and easy to find as any other digital resource. 
                ToolNest aims to become the go-to platform where innovation meets practicality, where every user can 
                find the perfect AI companion for their unique challenges. We're building a community-driven ecosystem 
                that evolves with the rapidly changing AI landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose ToolNest */}
      <section className="py-20 px-6 bg-toolnest-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
              Why Choose ToolNest?
            </h2>
            <p className="text-toolnest-text/80 text-lg">
              Three key reasons that set us apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Tools Library',
                description: 'Comprehensive collection of 150+ carefully vetted AI tools across all categories',
                icon: Search,
                delay: 0
              },
              {
                title: 'Categorized For Easy Use',
                description: 'Smart organization by use case, industry, and functionality for quick discovery',
                icon: Star,
                delay: 0.2
              },
              {
                title: 'Updated Weekly',
                description: 'Fresh additions and updates ensure you never miss the latest innovations',
                icon: RefreshCw,
                delay: 0.4
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <feature.icon className="text-toolnest-text mb-6 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-2xl font-semibold text-toolnest-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-toolnest-text/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-toolnest-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-toolnest-text mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-toolnest-text/80 text-lg mb-8">
              Join thousands of professionals who've already discovered their perfect AI tools
            </p>
            <motion.button
              className="bg-toolnest-text text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Tools
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-toolnest-text">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              © 2025 ToolNest. All rights reserved.
            </div>
            <nav className="flex items-center space-x-6 mb-4 md:mb-0">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Tools', path: '/tools' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
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
    </div>
  );
};

export default About;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, RefreshCw, ArrowDown, Mail, X, Zap, Bot, Image, FileText, Code, Video, Music, Palette } from 'lucide-react';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    // Add your email submission logic here
  };

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
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const toolsData = [
    { name: "AI Writer Pro", description: "Generate high-quality content with advanced AI writing assistance", icon: FileText },
    { name: "Code Assistant", description: "Smart code completion and debugging for developers", icon: Code },
    { name: "Image Generator", description: "Create stunning visuals with AI-powered image generation", icon: Image },
    { name: "Video Editor AI", description: "Edit videos automatically with intelligent scene detection", icon: Video },
    { name: "Smart Analytics", description: "Get deep insights from your data with AI analysis", icon: Zap },
    { name: "Voice Synthesis", description: "Convert text to natural-sounding speech instantly", icon: Music },
    { name: "Design Assistant", description: "Create beautiful designs with AI-powered suggestions", icon: Palette },
    { name: "Chat Bot Builder", description: "Build intelligent chatbots without coding knowledge", icon: Bot }
  ];

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      {/* Popup Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md mx-auto relative shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-toolnest-text mb-4">
                🔥 ToolNest is Live!
              </h3>
              <p className="text-toolnest-text/80 mb-6">
                Discover 150+ AI tools designed to simplify your digital life.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-toolnest-text text-white px-6 py-3 rounded-full font-semibold hover:bg-toolnest-text/90 transition-colors"
              >
                Explore Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Sticky Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-toolnest-bg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-toolnest-text"
              whileHover={{ scale: 1.05 }}
            >
              ToolNest
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Tools', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-toolnest-text hover:text-toolnest-text/80 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="animate-float absolute top-20 left-10">
            <Search size={40} className="text-toolnest-text" />
          </div>
          <div className="animate-float absolute top-40 right-20" style={{ animationDelay: '1s' }}>
            <Star size={35} className="text-toolnest-text" />
          </div>
          <div className="animate-float absolute bottom-40 left-20" style={{ animationDelay: '2s' }}>
            <RefreshCw size={30} className="text-toolnest-text" />
          </div>
        </div>

        <motion.div 
          className="text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-toolnest-text mb-6"
            variants={itemVariants}
          >
            Discover 150+ AI Tools to{' '}
            <span className="bg-gradient-to-r from-toolnest-text to-toolnest-accent bg-clip-text text-transparent">
              Supercharge
            </span>{' '}
            Your Workflow
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-toolnest-text/80 mb-8"
            variants={itemVariants}
          >
            Handpicked categories. Fast access. Always updated.
          </motion.p>
          
          <motion.button
            className="bg-toolnest-accent text-toolnest-text px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#9a99a3' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Tools
          </motion.button>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-toolnest-text/60" size={24} />
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
              Why ToolNest?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '150+ Tools', description: 'Carefully curated collection of the best AI tools', icon: Search },
              { title: 'Smart Categories', description: 'Organized by use case for easy discovery', icon: Star },
              { title: 'Updated Weekly', description: 'Fresh tools added every week', icon: RefreshCw }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-toolnest-accent p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="text-toolnest-text mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-toolnest-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-toolnest-text/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-6 bg-toolnest-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
              Explore Popular Tools
            </h2>
            <p className="text-toolnest-text/80 text-lg">
              Get a preview of what's waiting for you in our collection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsData.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-toolnest-accent p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <tool.icon className="text-toolnest-text mr-3 group-hover:scale-110 transition-transform" size={32} />
                  <span className="bg-toolnest-text text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-toolnest-text mb-2">
                  {tool.name}
                </h3>
                <p className="text-toolnest-text/80 text-sm">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
              How It Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Browse Tools', description: 'Explore our curated collection of AI tools' },
              { step: '2', title: 'Choose Category', description: 'Find tools by specific use case or industry' },
              { step: '3', title: 'Start Using', description: 'Click through to start using your chosen tool' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-toolnest-text text-toolnest-bg rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-toolnest-text mb-3">
                  {step.title}
                </h3>
                <p className="text-toolnest-text/80">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-toolnest-accent p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-toolnest-text mb-4">
              Get Updates When New Tools Are Added
            </h2>
            <p className="text-toolnest-text/80 mb-8">
              Be the first to discover the latest AI tools in our collection
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full border-2 border-toolnest-text/20 focus:border-toolnest-text outline-none bg-toolnest-bg text-toolnest-text"
                required
              />
              <motion.button
                type="submit"
                className="bg-toolnest-text text-toolnest-bg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-toolnest-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-toolnest-text mb-6">
              Want to explore all 150+ tools?
            </h2>
            <motion.button
              className="bg-toolnest-text text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Tools
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-toolnest-text/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-toolnest-text mb-4 md:mb-0">
            ToolNest © 2025
          </div>
          <nav className="flex space-x-6">
            {['Home', 'About', 'Tools', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-toolnest-text/80 hover:text-toolnest-text transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;

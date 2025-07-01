
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Tools = () => {
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
      <Header />

      {/* Title Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="toolnest-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-toolnest-text mb-6"
              variants={itemVariants}
            >
              AI Tools Directory
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-toolnest-text/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Discover the most comprehensive collection of AI tools to boost your productivity
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-toolnest-accent/20">
        <div className="toolnest-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-toolnest-text mb-4">
                Coming Soon
              </h2>
              <p className="text-toolnest-text/80 text-lg mb-8">
                We're building an amazing collection of AI tools for you. Stay tuned for the launch!
              </p>
              <div className="bg-toolnest-accent/30 rounded-lg p-6">
                <p className="text-toolnest-text font-medium">
                  🚀 Features in development:
                </p>
                <ul className="text-toolnest-text/80 mt-4 space-y-2">
                  <li>• 150+ curated AI tools</li>
                  <li>• Smart categorization</li>
                  <li>• User reviews and ratings</li>
                  <li>• Advanced search filters</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;

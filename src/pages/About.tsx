
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, RefreshCw, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Header />

      {/* Section 1: Introduction */}
      <section className="pt-32 pb-20 px-6 bg-toolnest-bg">
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

      {/* Section 2: Built for Modern Creators */}
      <section className="py-20 px-6 bg-toolnest-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="Modern AI workspace"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-toolnest-text mb-6">
                Built for Modern Creators
              </h2>
              <div className="space-y-4 text-toolnest-text/80 text-lg">
                <p>
                  In today's fast-paced digital world, creators need tools that work as hard as they do. 
                  ToolNest understands the unique challenges faced by modern professionals.
                </p>
                <p>
                  We've built a platform that cuts through the noise, delivering only the most effective 
                  AI solutions that have been tested and approved by real creators in the field.
                </p>
                <p>
                  From content creation to data analysis, from design to development – ToolNest empowers 
                  you to focus on what you do best while AI handles the rest.
                </p>
              </div>
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
                title: '150+ Tools',
                description: 'Comprehensive collection of carefully vetted AI tools across all categories',
                icon: Search,
                delay: 0
              },
              {
                title: 'Categorized Browsing',
                description: 'Smart organization by use case, industry, and functionality for quick discovery',
                icon: Star,
                delay: 0.2
              },
              {
                title: 'Weekly Updates',
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
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -10 }}
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

      {/* Section 4: Mission & Vision */}
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

      {/* Section 5: Final CTA */}
      <section className="py-20 px-6 bg-toolnest-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-toolnest-text mb-6">
              Join thousands of creators using ToolNest today
            </h2>
            <p className="text-toolnest-text/80 text-lg mb-8">
              Ready to transform your workflow with the power of AI?
            </p>
            <motion.button
              className="bg-toolnest-text text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Tools
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

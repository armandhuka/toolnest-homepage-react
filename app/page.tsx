'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/tools/ToolCard';
import { toolsData } from '@/data/toolsData';

const Index = () => {
  const featuredTools = toolsData.slice(0, 8);

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

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant access to all tools with blazing-fast performance'
    },
    {
      icon: Shield,
      title: 'Always Free',
      description: 'No hidden fees, no subscriptions, no registration required'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Find the right tool quickly with our smart categorization'
    }
  ];

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      <Helmet>
        <title>ToolNest - Your Smart Tool Directory</title>
        <meta name="description" content="Access 150+ handy tools for development, productivity, calculations, and more - all free and accessible." />
        <link rel="canonical" href="https://toolnest.com/" />
        <meta property="og:title" content="ToolNest - Your Smart Tool Directory" />
        <meta property="og:description" content="Access 150+ handy tools for development, productivity, calculations, and more - all free and accessible." />
        <meta property="og:url" content="https://toolnest.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-toolnest-bg">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-toolnest-text mb-6"
              variants={itemVariants}
            >
              Your Smart Tool
              <span className="block bg-gradient-to-r from-toolnest-text via-toolnest-text/80 to-toolnest-text bg-clip-text text-transparent">
                Directory
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-toolnest-text/80 max-w-3xl mx-auto mb-12"
              variants={itemVariants}
            >
              Access 150+ handy tools for development, productivity, calculations, and more — all free and accessible.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/tools">
                <motion.button
                  className="bg-toolnest-text text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Tools
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link href="/about">
                <motion.button
                  className="border-2 border-toolnest-text text-toolnest-text px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-toolnest-text hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-toolnest-accent">
        <div className="max-w-6xl mx-auto">
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
              Built for developers, designers, and productivity enthusiasts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <feature.icon 
                  className="text-toolnest-text mx-auto mb-6 group-hover:scale-110 transition-transform" 
                  size={48} 
                />
                <h3 className="text-xl font-semibold text-toolnest-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-toolnest-text/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
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
              Featured Tools
            </h2>
            <p className="text-toolnest-text/80 text-lg">
              Get started with these popular tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/tools">
              <motion.button
                className="bg-toolnest-accent text-toolnest-text px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-toolnest-text/20 hover:border-toolnest-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All 150+ Tools
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
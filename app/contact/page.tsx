'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', subject: '', message: '' });
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
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      <Helmet>
        <title>Contact Us - ToolNest</title>
        <meta name="description" content="Get in touch with the ToolNest team. We'd love to hear your feedback, suggestions, or questions about our tools." />
        <link rel="canonical" href="https://toolnest.com/contact" />
      </Helmet>

      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-toolnest-text mb-6">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-toolnest-text/80 max-w-2xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-toolnest-accent p-3 rounded-2xl">
                  <Mail className="text-toolnest-text" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-toolnest-text">
                  Send us a message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-toolnest-text mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-toolnest-text outline-none transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-toolnest-text mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-toolnest-text outline-none transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-toolnest-text mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-toolnest-text outline-none transition-colors duration-200"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-toolnest-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-toolnest-text outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your experience with ToolNest or suggest new features..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-toolnest-text text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div className="text-center mt-12" variants={itemVariants}>
              <p className="text-toolnest-text/70 mb-6">
                Prefer email? Reach us directly at{' '}
                <a href="mailto:hello@toolnest.com" className="text-toolnest-text hover:underline font-semibold">
                  hello@toolnest.com
                </a>
              </p>
              
              <Link href="/tools" className="inline-flex items-center gap-2 text-toolnest-text hover:text-toolnest-text/80 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Tools
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
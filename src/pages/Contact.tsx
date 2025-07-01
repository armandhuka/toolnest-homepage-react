
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Twitter, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
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
      <Header />

      {/* Title & Subtitle Section */}
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
              Get in Touch
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-toolnest-text/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We'd love to hear from you—whether it's feedback, a question, or a tool suggestion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-toolnest-accent/20">
        <div className="toolnest-container">
          <div className="max-w-2xl mx-auto">
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 text-center"
              >
                Thank you! We'll get back to you soon.
              </motion.div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-toolnest-text font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`border-2 focus:border-toolnest-text ${errors.name ? 'border-red-500' : 'border-toolnest-accent'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-toolnest-text font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`border-2 focus:border-toolnest-text ${errors.email ? 'border-red-500' : 'border-toolnest-accent'}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-toolnest-text font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`border-2 focus:border-toolnest-text ${errors.subject ? 'border-red-500' : 'border-toolnest-accent'}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-toolnest-text font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`border-2 focus:border-toolnest-text min-h-[120px] ${errors.message ? 'border-red-500' : 'border-toolnest-accent'}`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-toolnest-text hover:bg-toolnest-text/90 text-white py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-toolnest-bg">
        <div className="toolnest-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Mail className="w-8 h-8 text-toolnest-text mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-toolnest-text mb-2">Email</h3>
                <p className="text-toolnest-text/80">support@toolnest.ai</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <MapPin className="w-8 h-8 text-toolnest-text mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-toolnest-text mb-2">Address</h3>
                <p className="text-toolnest-text/80">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center space-x-4 mb-4">
                  <Twitter className="w-6 h-6 text-toolnest-text hover:text-toolnest-text/70 cursor-pointer transition-colors" />
                  <Linkedin className="w-6 h-6 text-toolnest-text hover:text-toolnest-text/70 cursor-pointer transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-toolnest-text mb-2">Follow Us</h3>
                <p className="text-toolnest-text/80">Stay connected for updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

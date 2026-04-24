import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/laxman-gurav-4b9865404', label: 'LinkedIn', color: '#0A66C2', bg: '#E8F0FE' },
    { icon: <FaGithub size={20} />, href: 'https://github.com/Laxman1507-Gurav', label: 'GitHub', color: '#171515', bg: '#F5F5F5' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/sujal_g15?igsh=MWswM2x3Y3VweDZpeQ==', label: 'Instagram', color: '#E1306C', bg: '#FDE8EF' },
    { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/919322857455', label: 'WhatsApp', color: '#25D366', bg: '#E6FFED' },
  ];

  const footerLinks = [
    { 
      title: 'Navigation', 
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' }
      ] 
    },
    { 
      title: 'Expertise', 
      links: [
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' }
      ] 
    },
    { 
      title: 'Connect', 
      links: [
        { name: 'Contact', href: '#contact' }
      ] 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-primary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-1xl font-bold font-heading uppercase tracking-widest bg-gradient-to-r from-accent to-accentSecond bg-clip-text text-transparent mb-4">Laxman Gurav</h3>
            <p className="text-textSecondary text-sm">
              Building User Friendly and functional web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-textPrimary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-textSecondary hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-textPrimary">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-border flex items-center justify-center transition-all shadow-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                  style={{ color: link.color, backgroundColor: link.bg }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-border my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-textSecondary text-sm">
            © 2026. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-accent hover:text-accentSecond transition-colors mt-4 md:mt-0"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Back to top</span>
            <FiArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

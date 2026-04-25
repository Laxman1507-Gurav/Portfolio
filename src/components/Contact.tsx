import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function (Indian phone number format)
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Handle form submission here
    setSubmitted(true);
    setIsSuccess(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
      setIsSuccess(false);
    }, 2000);
  };

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
      transition: { duration: 0.8 },
    },
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: 'guravsujal371@gmail.com',
      href: 'mailto:guravsujal371@gmail.com',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      content: '+91 9322857455',
      href: 'tel:+919322857455',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      content: 'Pune, Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/laxman-gurav-4b9865404', label: 'LinkedIn', color: '#0A66C2', bg: '#E8F0FE' },
    { icon: <FaGithub size={24} />, href: 'https://github.com/Laxman1507-Gurav', label: 'GitHub', color: '#171515', bg: '#F5F5F5' },
    { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/sujal_g15?igsh=MWswM2x3Y3VweDZpeQ==', label: 'Instagram', color: '#E1306C', bg: '#FDE8EF' },
    { icon: <FaWhatsapp size={24} />, href: 'https://wa.me/919322857455', label: 'WhatsApp', color: '#25D366', bg: '#E6FFED' },
  ];

  return (
    <section className="min-h-screen bg-secondary py-20 px-4" id="contact">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out to me via email or connect on social media.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-lg bg-primary border border-border hover:border-accent hover:shadow-lg transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="text-accent mt-1 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-textPrimary group-hover:text-accent transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-textSecondary text-sm break-all">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-primary rounded-xl p-8 border border-border shadow-lg"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-textPrimary">
                Your Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-secondary border rounded-lg px-4 py-3 text-textPrimary placeholder-textSecondary transition-all focus:outline-none focus:ring-1 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'
                  }`}
                placeholder="Name"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.name && (
                <motion.div className="flex items-center gap-2 mt-2 text-red-500" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                  <FiAlertCircle size={16} />
                  <span className="text-sm">{errors.name}</span>
                </motion.div>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-textPrimary">
                Your Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-secondary border rounded-lg px-4 py-3 text-textPrimary placeholder-textSecondary transition-all focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'
                  }`}
                placeholder="example@gmail.com"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && (
                <motion.div className="flex items-center gap-2 mt-2 text-red-500" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                  <FiAlertCircle size={16} />
                  <span className="text-sm">{errors.email}</span>
                </motion.div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-textPrimary">
                Phone Number
              </label>
              <motion.input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-secondary border rounded-lg px-4 py-3 text-textPrimary placeholder-textSecondary transition-all focus:outline-none focus:ring-1 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'
                  }`}
                placeholder="+91"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.phone && (
                <motion.div className="flex items-center gap-2 mt-2 text-red-500" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                  <FiAlertCircle size={16} />
                  <span className="text-sm">{errors.phone}</span>
                </motion.div>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-textPrimary">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full bg-secondary border rounded-lg px-4 py-3 text-textPrimary placeholder-textSecondary transition-all focus:outline-none focus:ring-1 resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'
                  }`}
                placeholder="Send me a message..."
                whileFocus={{ scale: 1.02 }}
              />
              {errors.message && (
                <motion.div className="flex items-center gap-2 mt-2 text-red-500" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                  <FiAlertCircle size={16} />
                  <span className="text-sm">{errors.message}</span>
                </motion.div>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitted}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-75"
              whileHover={{ scale: submitted ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSuccess ? (
                <>
                  <FiCheckCircle />
                  Message Sent Successfully!
                </>
              ) : submitted ? (
                'Sending...'
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          className="mt-16 rounded-lg overflow-hidden border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-96 bg-primary flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl mb-4">📍</p>
              <p className="text-textPrimary font-semibold">Pune, Maharashtra, India</p>
              <p className="text-sm text-textSecondary mt-2">Map integration available upon request</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

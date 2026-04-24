import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaBug, FaDatabase } from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive, modern web applications with cutting-edge technologies like React, Vue, and Node.js.',
    icon: <FaCode className="w-12 h-12" />,
    color: '#61dafb',
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Deploying and managing scalable applications on AWS, Google Cloud, and Azure platforms.',
    icon: <FaCloud className="w-12 h-12" />,
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'Quality Testing',
    description: 'Ensuring code quality through comprehensive testing strategies including unit, integration, and E2E testing.',
    icon: <FaBug className="w-12 h-12" />,
    color: '#10b981',
  },
  {
    id: 4,
    title: 'Big Data Solutions',
    description: 'Developing data pipelines and analytics solutions using Python, SQL, and modern data tools.',
    icon: <FaDatabase className="w-12 h-12" />,
    color: '#f59e0b',
  },
];

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen bg-secondary py-12 pb-8 px-4" id="services">
      <div className="container mx-auto">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="gradient-text">Services</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="relative h-full bg-white rounded-xl p-6 border border-border shadow-lg cursor-pointer overflow-hidden transition-all duration-300"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(69, 69, 69, 0.15)',
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 transition-colors"
                    style={{ color: service.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-textPrimary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textSecondary text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated bottom border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accentSecond rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

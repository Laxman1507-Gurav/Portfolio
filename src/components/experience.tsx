import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'experience' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: 'January 2026 - March 2026',
    title: 'Full Stack Developer',
    company: 'Custard Apple Animations',
    description: 'Where I developed CarePlus, A MERN stack healthcare management system where patients can book appointments, doctors can manage them, and admins control the system. I worked on both frontend and backend, built APIs, and used MongoDB for data storage.',
    type: 'experience',
  },
  {
    id: 2,
    year: '2022-2025',
    title: 'Bachelor of Science(B.Sc) Computer Science',
    company: 'Yashwantrao Mohite College of Arts, Science and Commerce, Kothrud, Pune.',
    description: '',
    type: 'education',
  },
];

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="min-h-screen bg-primary py-20 px-4" id="experience">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="relative h-full bg-white rounded-xl p-6 border border-border shadow-lg cursor-pointer overflow-hidden transition-all duration-300"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(69, 69, 70, 0.15)',
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.type === 'experience'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-accentSecond/20 text-accentSecond'
                    }`}>
                      {item.type === 'experience' ? '💼' : '🎓'} {item.type}
                    </div>
                  </div>

                  {/* Year */}
                  <p className="text-sm text-accent font-semibold mb-2">{item.year}</p>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-textPrimary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Company */}
                  <p className="text-textSecondary font-semibold mb-3">{item.company}</p>

                  {/* Description */}
                  <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>

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

export default Experience;


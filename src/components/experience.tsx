import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'Experience' | 'Education';
}

const educationData: TimelineItem[] = [
  {
    id: 2,
    year: '2022-2025',
    title: 'Bachelor of Science(B.Sc) Computer Science',
    company: 'Yashwantrao Mohite College of Arts, Science and Commerce, Kothrud, Pune.',
    description: '',
    type: 'Education',
  },
  {
    id: 3,
    year: '2025-Present',
    title: 'Master of Science(M.Sc) Computer Science',
    company: 'Yashwantrao Mohite College of Arts, Science and Commerce, Kothrud, Pune.',
    description: '',
    type: 'Education',
  },
];

const experienceData: TimelineItem[] = [
  {
    id: 1,
    year: 'January 2026 - March 2026',
    title: 'Full Stack Developer',
    company: 'Custard Apple Animations',
    description: 'Where I developed CarePlus, A MERN stack healthcare management system where patients can book appointments, doctors can manage them, and admins control the system. I worked on both frontend and backend, built APIs, and used MongoDB for data storage.',
    type: 'Experience',
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

  const renderCard = (item: TimelineItem) => (
    <motion.div
      key={item.id}
      variants={cardVariants}
      className="group"
    >
      <motion.div
        className="relative h-full bg-primary rounded-xl p-6 border border-border shadow-lg cursor-pointer overflow-hidden transition-all duration-300"
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(69, 69, 70, 0.15)',
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
              item.type === 'Experience'
                ? 'bg-accent/20 text-accent'
                : 'bg-accentSecond/20 text-accentSecond'
            }`}>
              {item.type === 'Experience' ? '💼' : '🎓'} {item.type}
            </div>
          </div>

          <p className="text-sm text-accent font-semibold mb-2">{item.year}</p>

          <h3 className="text-xl font-bold mb-2 text-textPrimary group-hover:text-accent transition-colors">
            {item.title}
          </h3>

          <p className="text-textSecondary font-semibold mb-3">{item.company}</p>

          <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>

          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accentSecond rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative py-20 bg-transparent" id="experience">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accentSecond/20 text-accentSecond flex items-center justify-center text-xl">
                🎓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-textPrimary">Education</h3>
                <p className="text-textSecondary">Academic background</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {educationData.map((item) => renderCard(item))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xl">
                💼
              </div>
              <div>
                <h3 className="text-2xl font-bold text-textPrimary">Experience</h3>
                <p className="text-textSecondary">Professional work</p>
              </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {experienceData.map((item) => renderCard(item))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


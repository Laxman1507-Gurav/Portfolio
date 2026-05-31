import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub } from 'react-icons/fi';
import ScreenshotSlider from './ScreenshotSlider';

interface Project {
  id: number;
  title: string;
  category: 'web-app' | 'cloud' | 'big-data' | 'testing';
  image: string;
  screenshots?: string[];
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'CarePlus',
    category: 'web-app',
    image: '/careplus.jpg',
    screenshots: [
      '/careplus1.png',
      '/careplus2.png',
      '/careplus3.png',
      '/careplus4.png',
      '/careplus5.png',
      '/careplus6.png',
      '/careplus7.png',
    ],
    description: 'A MERN stack-based healthcare management system. The project focuses on improving patient care by providing features like appointment booking (for adults and children), user authentication, profile management, and efficient handling of medical records.Through this project, I strengthened my skills in MongoDB, Express.js, React, and Node.js, along with real-world problem-solving and full-stack development.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/Laxman1507-Gurav/CarePlus',
    github: 'https://github.com/Laxman1507-Gurav/CarePlus',
  },
  {

    id: 2,
    title: 'PetCure',
    category: 'web-app',
    image: '/Paws.jpg',
    screenshots: [
      '/petcure1.png',
      '/petcure2.png',
      '/petcure3.png',
      '/petcure4.png',
      '/petcure5.png',
      '/petcure6.png',
      '/petcure7.png',
      '/petcure8.png',
    ],
    description: 'PetCure is a MERN stack-based animal healthcare and rescue platform designed to simplify pet care and improve accessibility to veterinary services. The application allows users to book appointments, find nearby veterinary clinics using map integration, upload and read blogs, and manage their pet care journey efficiently. This project helped me strengthen my skills in full-stack development, authentication using JWT, API integration, and building real-world scalable applications.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Leaflet', 'OpenStreetMap'],
    link: 'https://github.com/Laxman1507-Gurav/PetCure',
    github: 'https://github.com/Laxman1507-Gurav/PetCure',

  },
  {
    id: 3,
    title: 'MailHub',
    category: 'web-app',
    image: '/Mailhub.jpg',
    screenshots: [
      '/mailhub1.png',
      '/mailhub2.png',
      '/mailhub3.png',
      '/mailhub4.png',
      '/mailhub5.png',
      '/mailhub6.png',
      '/mailhub7.png',
    ],
    description: 'MailHub is a modern SaaS-style Email Automation software developed using PHP, MySQL, Tailwind CSS, and JavaScript. The platform is designed to help organizations efficiently manage and automate business email communication through a clean, responsive, and professional admin dashboard.',
    technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/Laxman1507-Gurav/MailHub',
    github: 'https://github.com/Laxman1507-Gurav/MailHub',
  }
];

const categories: { id: 'all' | 'web-app' | 'cloud' | 'big-data' | 'testing'; label: string }[] = [
];

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-primary relative rounded-2xl max-w-2xl w-full border border-border shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-textSecondary hover:text-accent transition-colors"
          >
            <FiX size={24} />
          </button>

          {/* Content */}
          <div className="p-5 sm:p-8 overflow-y-auto custom-scrollbar">
            {/* Icon / Image */}
            {project.image.startsWith('http') || project.image.startsWith('/') || project.image.startsWith('.') || project.image.startsWith('data:') ? (
              <>
                <img src={project.image} alt={project.title} className="w-full h-auto max-h-64 object-cover rounded-lg mb-4" />

                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-accent font-semibold mb-3">Screenshots</h4>
                    <ScreenshotSlider images={project.screenshots} />
                  </div>
                )}
              </>
            ) : (
              <div className="text-6xl mb-4 text-center text-textSecondary">{project.image}</div>
            )}

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-textPrimary">{project.title}</h3>

            {/* Description */}
            <p className="text-textSecondary text-sm sm:text-base mb-6 leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-accent font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-secondary text-textSecondary px-3 py-1 rounded-full text-sm border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links (only GitHub) */}
            <div className="flex justify-center gap-3 mb-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub /> View Code
              </motion.a>
            </div>

            {/* Back Button */}
            <div className="mt-10 pt-6 border-t border-border flex justify-center">
              <button
                onClick={onClose}
                className="group flex items-center gap-2 px-6 py-2.5 bg-secondary text-textPrimary hover:bg-accent hover:text-primary transition-all rounded-full border border-border text-sm font-semibold"
              >
                <FiX className="group-hover:rotate-90 transition-transform" />
                <span>Close</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-transparent" id="projects">
      <div className="container mx-auto">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-accent">Projects</span>
        </motion.h2>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 font-semibold transition-all ${selectedCategory === category.id
                ? 'text-accent border-b-2 border-accent'
                : 'text-textSecondary hover:text-accent'
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                exit={{ opacity: 0, y: 20 }}
              >
                <motion.div
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-primary rounded-3xl overflow-hidden border border-border cursor-pointer h-72 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:border-accent/30" whileHover={{ y: -5 }}
                >
                  {/* Minimal overlay */}
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity" />

                  {/* Content */}
                  <div className="relative z-10 text-center p-6 w-full flex flex-col items-center">
                    {project.image.startsWith('http') || project.image.startsWith('/') || project.image.startsWith('.') || project.image.startsWith('data:') ? (
                      <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded mb-4" />
                    ) : (
                      <div className="text-7xl mb-4">{project.image}</div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-textPrimary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-textSecondary line-clamp-2">{project.description}</p>
                  </div>

                  {/* Zoom indicator */}
                  <motion.div
                    className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-sm"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                  >
                    <p className="text-accent font-semibold tracking-widest uppercase border border-accent px-6 py-2">View Details</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;

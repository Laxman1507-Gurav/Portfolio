import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiMysql, SiExpress,
} from 'react-icons/si';
import {
  FaCode, FaCloud, FaBrain, FaLightbulb, FaProjectDiagram,
  FaUsers, FaComments, FaHandshake, FaStar, FaLeaf, FaJava, FaCss3Alt,
} from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
  category: 'industry' | 'tools' | 'interpersonal';
}

const skills: Skill[] = [
  // Industry Knowledge
  { name: 'Computer Science', icon: <MdComputer size={28} />, level: 90, color: '#6366f1', category: 'industry' },
  { name: 'Web Application', icon: <FaCode size={26} />, level: 88, color: '#0ea5e9', category: 'industry' },
  { name: 'MERN Stack', icon: <FaCloud size={26} />, level: 85, color: '#10b981', category: 'industry' },
  { name: 'SQL', icon: <SiMysql size={28} />, level: 80, color: '#f59e0b', category: 'industry' },
  { name: 'Java', icon: <FaJava size={28} />, level: 75, color: '#ef4444', category: 'industry' },
  { name: 'Project Management', icon: <FaProjectDiagram size={24} />, level: 82, color: '#8b5cf6', category: 'industry' },
  { name: 'Problem Solving', icon: <FaBrain size={26} />, level: 90, color: '#ec4899', category: 'industry' },

  // Tools & Technology
  { name: 'HTML', icon: <SiHtml5 size={28} />, level: 95, color: '#e34f26', category: 'tools' },
  { name: 'CSS', icon: <FaCss3Alt size={28} />, level: 90, color: '#2965f1', category: 'tools' },
  { name: 'JavaScript', icon: <SiJavascript size={26} />, level: 88, color: '#f7df1e', category: 'tools' },
  { name: 'React.js', icon: <SiReact size={28} />, level: 87, color: '#61dafb', category: 'tools' },
  { name: 'Node.js', icon: <SiNodedotjs size={28} />, level: 84, color: '#68a063', category: 'tools' },
  { name: 'Express.js', icon: <SiExpress size={26} />, level: 82, color: '#888888', category: 'tools' },
  { name: 'MongoDB', icon: <SiMongodb size={28} />, level: 83, color: '#4db33d', category: 'tools' },

  // Interpersonal Skills
  { name: 'Communication', icon: <FaComments size={26} />, level: 92, color: '#06b6d4', category: 'interpersonal' },
  { name: 'Teamwork', icon: <FaUsers size={26} />, level: 95, color: '#3b82f6', category: 'interpersonal' },
  { name: 'Leadership', icon: <FaStar size={26} />, level: 85, color: '#f59e0b', category: 'interpersonal' },
  { name: 'Team Management', icon: <FaHandshake size={24} />, level: 83, color: '#8b5cf6', category: 'interpersonal' },
  { name: 'Easily Adaptable', icon: <FaLeaf size={26} />, level: 90, color: '#10b981', category: 'interpersonal' },
  { name: 'Problem Solving', icon: <FaLightbulb size={26} />, level: 90, color: '#ec4899', category: 'interpersonal' },
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    whileHover={{ y: -6, scale: 1.04 }}
    className="group bg-primary rounded-2xl p-5 border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 cursor-default"
  >
    {/* Icon circle */}
    <motion.div
      className="w-14 h-14 rounded-xl flex items-center justify-center bg-secondary border border-border shadow-sm"
      whileHover={{ rotate: 8, scale: 1.1 }}
      transition={{ duration: 0.3 }}
      style={{
        color: skill.color,
        backgroundColor: `${skill.color}22`,
        borderColor: `${skill.color}44`,
      }}
    >
      {skill.icon}
    </motion.div>

    {/* Skill name */}
    <p className="text-sm font-semibold text-textPrimary text-center leading-tight transition-colors">
      {skill.name}
    </p>

    {/* Progress bar */}
    <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.06 + 0.3 }}
      />
    </div>

    {/* Percentage */}
    <span className="text-xs font-bold text-textSecondary">{skill.level}%</span>
  </motion.div>
);

const Skills: React.FC = () => {
  const industrySkills = skills.filter(s => s.category === 'industry');
  const toolsSkills = skills.filter(s => s.category === 'tools');
  const interpersonalSkills = skills.filter(s => s.category === 'interpersonal');

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const renderSection = (
    title: string,
    accentClass: string,
    items: Skill[],
    offset = 0
  ) => (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className={`text-2xl md:text-1xl font-bold mb-8 uppercase tracking-widest text-center ${accentClass}`}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {items.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i + offset} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-primary pt-8 pb-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="section-title mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        {renderSection('Industry Knowledge', 'text-accent', industrySkills, 0)}
        {renderSection('Tools & Technology', 'text-accentSecond', toolsSkills, industrySkills.length)}
        {renderSection('Interpersonal Skills', 'text-accent', interpersonalSkills, industrySkills.length + toolsSkills.length)}
      </div>
    </section>
  );
};

export default Skills;

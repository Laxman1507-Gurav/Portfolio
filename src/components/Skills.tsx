
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiExpress, SiPhp,
} from 'react-icons/si';

import {
  FaCode,
  FaCloud,
  FaBrain,
  FaLightbulb,
  FaProjectDiagram,
  FaUsers,
  FaComments,
  FaHandshake,
  FaStar,
  FaLeaf,
  FaJava,
  FaCss3Alt,
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
  { name: 'PHP', icon: <SiPhp size={28} />, level: 85, color: '#777bb4', category: 'tools' },
  { name: 'MySQL', icon: <SiMysql size={28} />, level: 80, color: '#f59e0b', category: 'tools' },
  { name: 'Tailwind CSS', icon: <FaLeaf size={26} />, level: 80, color: '#38bdf8', category: 'tools' },

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
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -6, scale: 1.04 }}
    className="group bg-primary rounded-2xl p-5 border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3"
  >
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center border"
      style={{
        color: skill.color,
        backgroundColor: `${skill.color}22`,
        borderColor: `${skill.color}44`,
      }}
    >
      {skill.icon}
    </div>

    <p className="text-sm font-semibold text-textPrimary text-center">
      {skill.name}
    </p>

    <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
      <motion.div
        className="h-full bg-accent rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1 }}
      />
    </div>

    <span className="text-xs font-bold text-textSecondary">
      {skill.level}%
    </span>
  </motion.div>
);

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('industry');

  const tabs = [
    { id: 'industry', label: 'Industry Knowledge' },
    { id: 'tools', label: 'Tools & Technology' },
    { id: 'interpersonal', label: 'Interpersonal Skills' },
  ];

  const activeSkills = skills.filter(
    (skill) => skill.category === activeTab
  );

  return (
    <section className="relative py-20 bg-transparent" id="skills">
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

        {/* Tab Navigation */}

        <div className="max-w-4xl mx-auto mb-14">
          <div className="flex flex-wrap justify-center gap-2 bg-secondary border border-border rounded-2xl p-2">

            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300
        ${activeTab === tab.id
                    ? 'bg-accent text-primary shadow-md'
                    : 'text-textPrimary hover:bg-primary'
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}

          </div>
        </div>

        {/* Skills Grid */}

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {activeSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;


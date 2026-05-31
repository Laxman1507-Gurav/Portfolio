import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { FiMail, FiPhone, FiMapPin, FiUser, FiCalendar } from 'react-icons/fi';


interface AboutProps {
    onReviewCv: () => void;
}

const About: React.FC<AboutProps> = ({ onReviewCv }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    return (
        <section className="relative py-20 bg-transparent" id="about">
            <div className="container mx-auto">
                <motion.h2
                    className="section-title mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Single Column Layout */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        {/* Personal Details Card */}
                        <motion.div
                            className="bg-primary rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-all"
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-2xl font-bold text-accent mb-6">Personal Details</h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-textSecondary">
    
    <div className="flex items-center gap-3">
        <FiUser size={22} className="text-accent flex-shrink-0" />
        <span>Laxman Gurav</span>
    </div>

    <div className="flex items-center gap-3">
        <FiCalendar size={22} className="text-accent flex-shrink-0" />
        <span>July 15, 2004</span>
    </div>

    <div className="flex items-center gap-3">
        <FiMapPin size={22} className="text-accent flex-shrink-0" />
        <span>Pune, Maharashtra</span>
    </div>

    <div className="flex items-center gap-3 break-all">
        <FiMail size={22} className="text-accent flex-shrink-0" />
        <span>guravsujal371@gmail.com</span>
    </div>

    <div className="flex items-center gap-3 md:col-span-2">
        <FiPhone size={22} className="text-accent flex-shrink-0" />
        <span>+91 9322857455</span>
    </div>

</div>
                        </motion.div>

                        {/* About Me Paragraph */}
                        <motion.p
                            className="text-textSecondary text-lg leading-relaxed bg-primary rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-all"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            I am a motivated Computer Science graduate with a strong passion for software development and building real-world applications. I enjoy solving complex problems through efficient and scalable solutions while continuously enhancing my technical skills to stay aligned with evolving industry trends. Currently pursuing a Master’s degree in Computer Science, I am focused on expanding my expertise in full-stack development and modern web technologies. I am actively seeking opportunities where I can contribute, learn, and grow as a Full Stack Developer, and I am open to internships and entry-level roles that provide valuable industry experience and professional growth.

                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <motion.a
                                href="/laxman_gurav_resume.pdf"
                                download="Laxman_Gurav_Resume.pdf"
                                onClick={onReviewCv}
                                className="btn-primary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiDownload /> Download CV
                            </motion.a>
                            <motion.button
                                type="button"
                                onClick={onReviewCv}
                                className="btn-secondary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Review My CV
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;

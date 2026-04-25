import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

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
        <section className="min-h-screen bg-secondary py-20 px-4" id="about">
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
                                <p><span className="text-accent font-semibold">Name:</span> Laxman Gurav</p>
                                <p><span className="text-accent font-semibold">DOB:</span> July 15, 2004</p>
                                <p><span className="text-accent font-semibold">Address:</span> Pune, Maharashtra</p>
                                <p><span className="text-accent font-semibold">Email:</span> guravsujal371@gmail.com</p>
                                <p className="md:col-span-2"><span className="text-accent font-semibold">Phone:</span> +91 9322857455</p>
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
                            I am a BSc Computer Science graduate with a strong interest in software development and problem-solving. I have worked on many projects, where I developed leadership and technical skills under time constraints.
                            Currently, I am looking to pursue MSc in Computer Science and grow as a full-stack developer
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <motion.a
                                href="/MYResume.pdf"
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

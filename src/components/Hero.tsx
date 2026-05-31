import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    const socialLinks = [
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/laxman-gurav-4b9865404', label: 'LinkedIn', color: '#0A66C2', bg: '#E8F0FE' },
        { icon: <FaGithub />, href: 'https://github.com/Laxman1507-Gurav', label: 'GitHub', color: '#171515', bg: '#F5F5F5' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/sujal_g15?igsh=MWswM2x3Y3VweDZpeQ==', label: 'Instagram', color: '#E1306C', bg: '#FDE8EF' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/919322857455', label: 'WhatsApp', color: '#25D366', bg: '#E6FFED' },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-transparent flex items-center justify-center overflow-hidden pt-20"
            id="home"
        >
            {/* Minimalist geometric background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-10 w-32 h-32 border border-border rounded-full animate-float"></div>
                <div className="absolute top-40 right-1/4 w-16 h-16 border border-border rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-border rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 border border-border rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                {/* Diagonal line accent */}
                <div className="absolute top-0 right-[20%] w-px h-[150%] bg-border transform rotate-[30deg] origin-top opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Content (Left) */}
                <motion.div
                    className="md:w-1/2 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 font-heading text-accent uppercase tracking-wide leading-tight"
                    >
                        Hi, I'm
                        <br />Laxman Gurav
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-textSecondary mb-8 max-w-lg font-light"
                    >
                        I am a Fullstack Web Developer & Creative Problem Solver
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.a
                            href="#contact"
                            className="btn-primary flex items-center justify-center gap-2 w-max uppercase tracking-wider text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="btn-secondary w-max uppercase tracking-wider text-sm flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            My Works
                        </motion.a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-6">
                        <h4 className="text-textPrimary font-semibold mb-4">Connect with me on</h4>
                        <div className="flex items-center gap-3 sm:gap-4">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg border border-border flex items-center justify-center transition-all shadow-sm"
                                    style={{ backgroundColor: social.bg, color: social.color }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Photo (Right) */}
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative w-full max-w-[460px] h-[335px] md:h-[80vh] rounded-[1rem] overflow-hidden border border-border shadow-2xl bg-secondary">
                        <img
                            src="/laxman.jpg"
                            alt="Hero portrait"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const About = () => {
    const socialLinks = [
      {
        name: "Instagram",
        icon: <FaInstagram />,
        url: "https://www.instagram.com/hariksh_suryawanshi/",
      },
      {
        name: "CodeChef",
        icon: <FaCode />,
        url: "https://www.codechef.com/users/grace_trail_85",
      },
      {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/hariksh-suryawanshi-318a65314/",
      },
      { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Hariksh" },
    ];

    return (
        <section id="about" className="about-section" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-secondary)',
            position: 'relative'
        }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            I am a dedicated <span style={{ color: 'var(--accent-color)' }}>Computer Science student</span> with a passion for problem-solving and web development.
                            My journey in technology started with curiosity and has evolved into a deep commitment to creating
                            meaningful digital experiences.
                        </p>
                        <p style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            I believe in continuous learning and staying updated with the latest technologies.
                            When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects,
                            or sharing knowledge with fellow developers.
                        </p>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '20px 24px',
                                    background: 'var(--bg-tertiary)',
                                    borderRadius: '2px',
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontWeight: 500,
                                    transition: 'all 0.3s ease',
                                    border: '1px solid var(--border-glass)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                                    e.currentTarget.style.transform = 'translateX(10px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <span style={{ fontSize: '20px', color: 'var(--accent-color)' }}>{link.icon}</span>
                                <span style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>{link.name}</span>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;

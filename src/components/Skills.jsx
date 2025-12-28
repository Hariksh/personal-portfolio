import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['JavaScript', 'CSS', 'HTML', 'Python']
        },
        {
            title: 'Frameworks & Databases',
            skills: ['React', 'Node.js', 'Next.js', 'Express.js', 'MongoDB', 'MySQL', 'Prisma ORM', 'Tailwind CSS', 'React Native']
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'GitHub', 'Postman', 'Framer Motion', 'OAuth 2.0', 'ESLint', 'VS Code']
        }
    ];

    return (
        <section id="skills" className="skills-section" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-primary)',
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
                    Skills & Technologies
                </motion.h2>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-glass)',
                                padding: '40px',
                                borderRadius: '2px',
                                boxShadow: 'var(--shadow-light)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{
                                y: -5,
                                borderColor: 'var(--accent-color)',
                                boxShadow: 'var(--shadow-medium)'
                            }}
                        >
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: 600,
                                marginBottom: '24px',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.02em'
                            }}>
                                {category.title}
                            </h3>
                            <div className="skills" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-tag"
                                        style={{
                                            background: 'transparent',
                                            color: 'var(--text-secondary)',
                                            padding: '6px 16px',
                                            borderRadius: '100px',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            border: '1px solid var(--border-glass)',
                                            display: 'inline-block',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = 'var(--accent-color)';
                                            e.target.style.color = 'var(--accent-color)';
                                            e.target.style.background = 'rgba(212, 175, 55, 0.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = 'var(--border-glass)';
                                            e.target.style.color = 'var(--text-secondary)';
                                            e.target.style.background = 'transparent';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

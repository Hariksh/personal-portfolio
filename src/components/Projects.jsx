import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'ShopEasy - E-commerce Platform',
            description: 'A full-featured e-commerce platform with product catalog, shopping cart, category filtering, and modern UI. Features Spring Collection 2025 showcase and newsletter subscription functionality.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Shopping Cart'],
            links: {
                demo: 'https://ecommerce-website-theta-olive.vercel.app/',
                github: 'https://github.com/Hariksh/ecommerce_website'
            },
            icon: '🛒'
        },
        {
            title: 'NSAT - Educational Platform',
            description: 'A comprehensive educational platform for engineering aspirants featuring exam preparation materials for JEE, NEET, VITEE, UGEE with study materials, test series, and subject-wise content organization.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Educational Content', 'Responsive UI'],
            links: {
                demo: 'https://super-zabaione-95f90e.netlify.app/',
                github: 'https://github.com/Hariksh/NSAT-2.0'
            },
            icon: '📚'
        },
        {
            title: 'Personalized Academic Tracker',
            description: 'A smart, student-centric web app that helps track grades, monitor attendance, and stay organized with timely reminders. Features JWT-based authentication, progress dashboard with charts, and PWA capabilities.',
            tech: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'PWA', 'TailwindCSS'],
            links: {
                demo: 'https://personalized-academic-tracker-rho.vercel.app/',
                github: 'https://github.com/Hariksh/Personalized-Academic-Tracker'
            },
            icon: '📊'
        },
        {
            title: 'Personal Portfolio Website',
            description: 'A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. Features smooth animations, mobile-first design, interactive elements, and comprehensive sections showcasing skills and projects.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations'],
            links: {
                demo: '/',
                github: 'https://github.com/Hariksh'
            },
            icon: '🌐'
        },
        {
            title: 'Algorithm Visualizer',
            description: 'An interactive web application to visualize sorting and searching algorithms, helping students understand how different algorithms work step by step with real-time animations and explanations.',
            tech: ['JavaScript', 'Canvas API', 'CSS Animations', 'Data Structures'],
            links: {
                demo: '#',
                github: 'https://github.com/Hariksh'
            },
            icon: '🔍',
            status: 'In Development'
        },
        {
            title: 'Full-Stack Web Application',
            description: 'Planning to build a comprehensive full-stack application with modern technologies, user authentication, real-time features, and scalable architecture to showcase advanced development skills.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
            links: {
                demo: '#',
                github: 'https://github.com/Hariksh'
            },
            icon: '🚀',
            status: 'Planning'
        }
    ];

    return (
        <section id="projects" className="projects-section" style={{
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
                    Selected Works
                </motion.h2>

                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px',
                    marginTop: '60px'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-glass)',
                                borderRadius: '2px',
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: 'var(--shadow-medium)',
                                borderColor: 'var(--border-accent)'
                            }}
                        >
                            <div className="project-image" style={{
                                height: '180px',
                                background: 'var(--bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                color: 'var(--accent-color)',
                                borderBottom: '1px solid var(--border-glass)'
                            }}>
                                {project.icon}
                            </div>

                            <div className="project-content" style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                {project.status && (
                                    <div className="coming-soon" style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        background: 'var(--accent-color)',
                                        color: '#000',
                                        padding: '4px 12px',
                                        borderRadius: '100px',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {project.status}
                                    </div>
                                )}

                                <h3 className="project-title" style={{
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    marginBottom: '16px',
                                    fontFamily: 'var(--font-heading)',
                                    lineHeight: 1.3
                                }}>
                                    {project.title}
                                </h3>

                                <p className="project-description" style={{
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                    marginBottom: '24px',
                                    fontSize: '15px',
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                <div className="project-tech" style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                    marginBottom: '32px'
                                }}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-tag" style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-mono)'
                                        }}>
                                            #{tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links" style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                                    <a
                                        href={project.links.demo}
                                        target={project.links.demo.startsWith('http') ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="project-link primary"
                                        style={{
                                            padding: '12px 24px',
                                            borderRadius: '2px',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            transition: 'all 0.3s ease',
                                            background: 'var(--text-primary)',
                                            color: 'var(--bg-primary)',
                                            textAlign: 'center',
                                            flex: 1
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--accent-color)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'var(--text-primary)';
                                        }}
                                    >
                                        {project.status ? 'Details' : 'Live Demo'}
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link secondary"
                                        style={{
                                            padding: '12px 24px',
                                            borderRadius: '2px',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            transition: 'all 0.3s ease',
                                            background: 'transparent',
                                            color: 'var(--text-primary)',
                                            border: '1px solid var(--border-glass)',
                                            textAlign: 'center',
                                            flex: 1
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = 'var(--text-primary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = 'var(--border-glass)';
                                        }}
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

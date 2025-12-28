import React from 'react';
import { motion } from 'framer-motion';
import { FaAmbulance, FaWallet, FaGraduationCap, FaShoppingCart, FaUniversity } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Ambulance Booking System',
            description: 'Real-time emergency response platform featuring live tracking, driver assignment, and secure JWT authentication. Built with a scalable microservices architecture and deployed on Render.',
            tech: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Render'],
            links: {
                demo: 'https://ambulance-booking-sooty.vercel.app/',
                github: 'https://github.com/Hariksh/Ambulance_Booking'
            },
            gradient: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)',
            icon: <FaAmbulance />
        },
        {
            title: 'Expense Tracker',
            description: 'Full-stack mobile application for financial management with secure auth, categorization, and detailed analytics. Uses Prisma ORM with MySQL for robust data handling.',
            tech: ['React Native', 'Node.js', 'MySQL', 'Prisma', 'Expo'],
            links: {
                demo: 'https://drive.google.com/file/d/12FrK3MzIxHtl2s1XPWdjuuOfunEPOYLe/view?usp=sharing',
                github: 'https://github.com/Hariksh/Expense_tracker'
            },
            gradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
            icon: <FaWallet />
        },
        {
            title: 'Personalized Academic Tracker',
            description: 'A smart, student-centric web app that helps track grades, monitor attendance, and stay organized. Features JWT-based authentication and PWA capabilities.',
            tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'PWA'],
            links: {
                demo: 'https://personalized-academic-tracker-rho.vercel.app/',
                github: 'https://github.com/Hariksh/Personalized-Academic-Tracker'
            },
            gradient: 'linear-gradient(135deg, #5EFCE8 0%, #736EFE 100%)',
            icon: <FaGraduationCap />
        },
        {
            title: 'ShopEasy - E-commerce',
            description: 'Feature-rich e-commerce platform with product catalog, cart management, and category filtering. Includes newsletter subscription and modern responsive design.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            links: {
                demo: 'https://ecommerce-website-theta-olive.vercel.app/',
                github: 'https://github.com/Hariksh/ecommerce_website'
            },
            gradient: 'linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)',
            icon: <FaShoppingCart />
        },
        {
            title: 'NSAT - Education Platform',
            description: 'Comprehensive exam preparation platform for engineering aspirants with study materials, test series, and subject-wise content organization.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Educational Tech'],
            links: {
                demo: 'https://super-zabaione-95f90e.netlify.app/',
                github: 'https://github.com/Hariksh/NSAT-2.0'
            },
            gradient: 'linear-gradient(135deg, #FDBB2D 0%, #3A1C71 100%)',
            icon: <FaUniversity />
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
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                                borderColor: 'var(--border-accent)'
                            }}
                        >
                            <div className="project-image" style={{
                                height: '220px',
                                background: project.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <motion.div
                                    style={{
                                        fontSize: '80px',
                                        color: 'rgba(255,255,255,0.9)',
                                        filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.2))'
                                    }}
                                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {project.icon}
                                </motion.div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '60px',
                                    background: 'linear-gradient(to top, var(--bg-secondary), transparent)'
                                }}></div>
                            </div>

                            <div className="project-content" style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 className="project-title" style={{
                                    fontSize: '24px',
                                    fontWeight: 700,
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
                                            color: 'var(--accent-color)',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            fontFamily: 'var(--font-mono)',
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            padding: '4px 10px',
                                            borderRadius: '4px'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links" style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link primary"
                                        style={{
                                            padding: '12px 24px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            transition: 'all 0.3s ease',
                                            background: 'var(--accent-gradient)',
                                            color: 'var(--btn-text-color)',
                                            textAlign: 'center',
                                            flex: 1,
                                            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                                        }}
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link secondary"
                                        style={{
                                            padding: '12px 24px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
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
                                            e.target.style.background = 'rgba(255,255,255,0.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = 'var(--border-glass)';
                                            e.target.style.background = 'transparent';
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

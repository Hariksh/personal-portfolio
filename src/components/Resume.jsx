import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaDatabase, FaTools, FaGlobe, FaTrophy } from 'react-icons/fa';

const Resume = () => {
    const printResume = () => {
        window.print();
    };

    return (
        <div className="resume-page" style={{ paddingTop: '80px', paddingBottom: '60px', background: 'var(--bg-primary)' }}>
            <section className="resume-hero" style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                textAlign: 'center',
                padding: '80px 0 120px',
                marginBottom: '-80px',
                borderBottom: '1px solid var(--border-glass)'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: '48px',
                            fontWeight: 700,
                            marginBottom: '20px',
                            fontFamily: 'var(--font-heading)'
                        }}
                    >
                        My Resume
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-secondary)' }}
                    >
                        A comprehensive overview of my education, skills, and experience in computer science and web development.
                    </motion.p>
                    <motion.button
                        onClick={printResume}
                        className="download-btn"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            display: 'inline-block',
                            background: 'transparent',
                            color: 'var(--accent-color)',
                            padding: '12px 30px',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            border: '1px solid var(--accent-color)',
                            cursor: 'pointer',
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--accent-color)';
                            e.target.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'var(--accent-color)';
                        }}
                    >
                        📄 Download / Print PDF
                    </motion.button>
                </div>
            </section>

            <section className="resume-content-wrapper">
                <div className="container">
                    <motion.div
                        className="resume-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            maxWidth: '850px',
                            margin: '0 auto',
                            background: '#fff', // Keep white for printability/readability standard
                            color: '#333',
                            borderRadius: '4px',
                            boxShadow: 'var(--shadow-medium)',
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 10,
                        }}
                    >
                        {/* Header */}
                        <div className="resume-header" style={{
                            background: '#1a1a1a',
                            color: 'white',
                            padding: '40px',
                            textAlign: 'center',
                            borderBottom: '4px solid #D4AF37'
                        }}>
                            <h2 style={{ fontSize: '36px', marginBottom: '10px', fontFamily: 'Playfair Display, serif' }}>Hariksh Mahendra Suryawanashi</h2>
                            <p style={{ fontSize: '18px', opacity: 0.9, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Computer Science Student & Aspiring Web Developer</p>
                        </div>

                        {/* Contact Information */}
                        <div className="resume-section" style={{ padding: '30px 40px', borderBottom: '1px solid #eee' }}>
                            <div className="contact-info" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                gap: '20px',
                                fontSize: '14px'
                            }}>
                                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                                    <FaEnvelope style={{ color: '#D4AF37' }} />
                                    <span>hariksh.suryawanshi@email.com</span>
                                </div>
                                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                                    <FaPhone style={{ color: '#D4AF37' }} />
                                    <span>+91 XXXXX XXXXX</span>
                                </div>
                                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                                    <FaMapMarkerAlt style={{ color: '#D4AF37' }} />
                                    <span>India</span>
                                </div>
                                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                                    <FaLinkedin style={{ color: '#D4AF37' }} />
                                    <a href="https://www.linkedin.com/in/hariksh-suryawanshi-318a65314/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>LinkedIn</a>
                                </div>
                                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                                    <FaGithub style={{ color: '#D4AF37' }} />
                                    <a href="https://github.com/Hariksh" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>GitHub</a>
                                </div>
                            </div>
                        </div>

                        {/* Professional Summary */}
                        <div className="resume-section" style={{ padding: '30px 40px', borderBottom: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '20px', color: '#1a1a1a', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
                                <FaBriefcase style={{ color: '#D4AF37' }} /> Professional Summary
                            </h3>
                            <p style={{ color: '#555', lineHeight: 1.6, fontSize: '15px' }}>
                                Motivated Computer Science student with a passion for web development and problem-solving.
                                Experienced in Python, HTML, CSS, and JavaScript with a strong foundation in algorithms and data structures.
                                Eager to apply technical skills in a dynamic environment while continuing to learn and grow as a developer.
                                Committed to writing clean, efficient code and creating user-friendly applications.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="resume-section" style={{ padding: '30px 40px', borderBottom: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '20px', color: '#1a1a1a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
                                <FaGraduationCap style={{ color: '#D4AF37' }} /> Education
                            </h3>
                            <div className="education-item" style={{ marginBottom: '20px' }}>
                                <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                                    <div>
                                        <div className="item-title" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Bachelor of Technology - Computer Science</div>
                                        <div className="item-company" style={{ fontSize: '16px', color: '#555', fontWeight: 500 }}>Newton School of Technology</div>
                                    </div>
                                    <div className="item-date" style={{ color: '#D4AF37', fontWeight: 600, fontSize: '14px' }}>2022 - Present</div>
                                </div>
                                <div className="item-description" style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                                    <p>Focus: Software Development, Algorithms, Data Structures</p>
                                </div>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div className="resume-section" style={{ padding: '30px 40px', borderBottom: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '20px', color: '#1a1a1a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
                                <FaTools style={{ color: '#D4AF37' }} /> Technical Skills
                            </h3>
                            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                                <div className="skill-group">
                                    <h4 style={{ fontSize: '14px', color: '#888', marginBottom: '10px', textTransform: 'uppercase' }}>Languages</h4>
                                    <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['Python', 'JavaScript', 'Java', 'C++'].map(skill => (
                                            <span key={skill} style={{ background: '#f5f5f5', color: '#333', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 500 }}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="skill-group">
                                    <h4 style={{ fontSize: '14px', color: '#888', marginBottom: '10px', textTransform: 'uppercase' }}>Web</h4>
                                    <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['HTML5', 'CSS3', 'React', 'Node.js'].map(skill => (
                                            <span key={skill} style={{ background: '#f5f5f5', color: '#333', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 500 }}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="skill-group">
                                    <h4 style={{ fontSize: '14px', color: '#888', marginBottom: '10px', textTransform: 'uppercase' }}>Tools</h4>
                                    <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['Git', 'VS Code', 'Linux', 'Docker'].map(skill => (
                                            <span key={skill} style={{ background: '#f5f5f5', color: '#333', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 500 }}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Projects */}
                        <div className="resume-section" style={{ padding: '30px 40px', borderBottom: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '20px', color: '#1a1a1a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
                                <FaCode style={{ color: '#D4AF37' }} /> Key Projects
                            </h3>
                            {[
                                {
                                    title: 'ShopEasy - E-commerce Platform',
                                    role: 'Full-Stack Development',
                                    date: '2024',
                                    points: [
                                        'Built complete shopping cart system with product categories',
                                        'Implemented responsive design for optimal user experience',
                                        'Created Spring Collection 2025 showcase with newsletter integration'
                                    ]
                                },
                                {
                                    title: 'NSAT - Educational Platform',
                                    role: 'Educational Technology',
                                    date: '2024',
                                    points: [
                                        'Developed content management for JEE, NEET, VITEE, UGEE preparation',
                                        'Organized study materials by subjects and implemented test series'
                                    ]
                                }
                            ].map((project, index) => (
                                <div key={index} className="experience-item" style={{ marginBottom: '25px' }}>
                                    <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                                        <div>
                                            <div className="item-title" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>{project.title}</div>
                                            <div className="item-company" style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>{project.role}</div>
                                        </div>
                                        <div className="item-date" style={{ color: '#D4AF37', fontWeight: 600, fontSize: '13px' }}>{project.date}</div>
                                    </div>
                                    <div className="item-description" style={{ color: '#555', lineHeight: 1.6, fontSize: '14px' }}>
                                        <ul style={{ margin: '5px 0', paddingLeft: '18px' }}>
                                            {project.points.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <div className="resume-section" style={{ padding: '30px 40px' }}>
                            <h3 style={{ fontSize: '20px', color: '#1a1a1a', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
                                <FaTrophy style={{ color: '#D4AF37' }} /> Achievements
                            </h3>
                            <div className="item-description" style={{ color: '#555', lineHeight: 1.6, fontSize: '14px' }}>
                                <ul style={{ margin: '0', paddingLeft: '18px' }}>
                                    <li>Active participant in coding competitions on CodeChef platform</li>
                                    <li>Completed multiple online courses in web development</li>
                                    <li>Contributing to open-source projects on GitHub</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Resume;

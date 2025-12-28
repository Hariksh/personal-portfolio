import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="education-section" style={{
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
                    Education
                </motion.h2>

                <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '0',
                        bottom: '0',
                        width: '1px',
                        background: 'var(--border-glass)'
                    }}></div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ position: 'relative', padding: '0 0 40px 60px' }}
                    >
                        <div className="timeline-marker" style={{
                            position: 'absolute',
                            left: '14px',
                            top: '5px',
                            width: '13px',
                            height: '13px',
                            background: 'var(--bg-primary)',
                            borderRadius: '50%',
                            border: '2px solid var(--accent-color)',
                            boxShadow: '0 0 10px var(--accent-glow)'
                        }}></div>

                        <div className="timeline-content" style={{ background: 'transparent', padding: '0' }}>
                            <span style={{
                                fontSize: '13px',
                                color: 'var(--accent-color)',
                                fontWeight: 600,
                                marginBottom: '8px',
                                display: 'block',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                2024 - 2028
                            </span>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '8px',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Bachelor of Technology (AI ML)
                            </h3>
                            <h4 style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 400 }}>
                                Newton School of Technology (ADYPU), Pune
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Grade: 7.95/10.0
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ position: 'relative', padding: '0 0 40px 60px' }}
                    >
                        <div className="timeline-marker" style={{
                            position: 'absolute',
                            left: '14px',
                            top: '5px',
                            width: '13px',
                            height: '13px',
                            background: 'var(--bg-primary)',
                            borderRadius: '50%',
                            border: '2px solid var(--border-glass)',
                            // boxShadow: '0 0 10px var(--accent-glow)'
                        }}></div>

                        <div className="timeline-content" style={{ background: 'transparent', padding: '0' }}>
                            <span style={{
                                fontSize: '13px',
                                color: 'var(--text-muted)',
                                fontWeight: 600,
                                marginBottom: '8px',
                                display: 'block',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                2023 - 2024
                            </span>
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '8px',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Intermediate (Class XII)
                            </h3>
                            <h4 style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 400 }}>
                                Shri Pimpaladevi Madhyamic And Uchha Madhyamic Vidyalaya, Dhule
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Grade: 82.17%
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ position: 'relative', padding: '0 0 0 60px' }}
                    >
                        <div className="timeline-marker" style={{
                            position: 'absolute',
                            left: '14px',
                            top: '5px',
                            width: '13px',
                            height: '13px',
                            background: 'var(--bg-primary)',
                            borderRadius: '50%',
                            border: '2px solid var(--border-glass)',
                        }}></div>

                        <div className="timeline-content" style={{ background: 'transparent', padding: '0' }}>
                            <span style={{
                                fontSize: '13px',
                                color: 'var(--text-muted)',
                                fontWeight: 600,
                                marginBottom: '8px',
                                display: 'block',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                2021 - 2022
                            </span>
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '8px',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Matriculation (Class X)
                            </h3>
                            <h4 style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 400 }}>
                                Jai Hind High School, Dhule
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Grade: 83.2%
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

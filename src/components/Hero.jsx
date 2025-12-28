import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Computer Science Student & Web Developer";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            <div className="hero-content" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '80px',
                maxWidth: '1200px',
                padding: '0 24px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <motion.div
                    className="profile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            right: '-20px',
                            bottom: '-20px',
                            border: '1px solid var(--accent-color)',
                            borderRadius: '50%',
                            opacity: 0.3,
                            animation: 'spin 20s linear infinite'
                        }}></div>
                        <img
                            src={profileImg}
                            alt="Hariksh Mahendra Suryawanashi"
                            style={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '2px solid var(--border-glass)',
                                boxShadow: 'var(--shadow-medium)',
                                filter: 'grayscale(20%) contrast(110%)'
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="about"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ textAlign: 'left', maxWidth: '550px' }}
                >
                    <p style={{
                        color: 'var(--accent-color)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '16px'
                    }}>
                        Hello, I am
                    </p>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '56px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1
                    }}>Hariksh Mahendra Suryawanashi</h1>

                    <h2 className="subtitle" style={{
                        fontSize: '20px',
                        fontWeight: 400,
                        marginBottom: '32px',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        minHeight: '30px'
                    }}>
                        {text}<span style={{ color: 'var(--accent-color)' }}>_</span>
                    </h2>

                    <p className="intro" style={{
                        fontSize: '16px',
                        marginBottom: '40px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.8,
                        maxWidth: '480px'
                    }}>
                        Passionate B.Tech Computer Science student at Newton School of Technology.
                        Crafting digital experiences with precision and creativity.
                    </p>

                    <div className="buttons" style={{ display: 'flex', gap: '24px' }}>
                        <a href="https://www.linkedin.com/in/hariksh-suryawanshi-318a65314/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn primary">
                            Connect
                        </a>
                        <a href="#contact" className="btn secondary">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            </div>
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 40px !important;
          }
          .about {
            text-align: center !important;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .hero h1 {
            fontSize: 40px !important;
          }
        }
      `}</style>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    translateX: '-50%',
                    color: 'var(--text-secondary)',
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                ↓
            </motion.div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
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
                    Get In Touch
                </motion.h2>

                <div className="contact-content" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '80px',
                    alignItems: 'start',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 style={{
                            fontSize: '28px',
                            marginBottom: '24px',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600
                        }}>Let's Connect</h3>
                        <p style={{ fontSize: '16px', marginBottom: '40px', opacity: 0.8, lineHeight: 1.8 }}>
                            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                        </p>
                        <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <a href="mailto:hariksh.suryawanshi@adypu.edu.in" className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>
                                <span className="icon" style={{
                                    fontSize: '20px',
                                    color: 'var(--accent-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-glass)'
                                }}><FaEnvelope /></span>
                                <span style={{ color: 'var(--text-secondary)' }}>hariksh.suryawanshi@adypu.edu.in</span>
                            </a>
                            <a href="https://www.linkedin.com/in/hariksh-suryawanshi-318a65314/" target="_blank" rel="noopener noreferrer" className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>
                                <span className="icon" style={{
                                    fontSize: '20px',
                                    color: 'var(--accent-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-glass)'
                                }}><FaLinkedin /></span>
                                <span style={{ color: 'var(--text-secondary)' }}>Connect on LinkedIn</span>
                            </a>
                            <a href="https://github.com/Hariksh" target="_blank" rel="noopener noreferrer" className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>
                                <span className="icon" style={{
                                    fontSize: '20px',
                                    color: 'var(--accent-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-glass)'
                                }}><FaGithub /></span>
                                <span style={{ color: 'var(--text-secondary)' }}>Check out my GitHub</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            background: 'transparent',
                        }}
                    >
                        <div className="form-group" style={{ marginBottom: '24px' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '2px',
                                    background: 'var(--bg-tertiary)',
                                    fontSize: '16px',
                                    fontFamily: 'inherit',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '24px' }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '2px',
                                    background: 'var(--bg-tertiary)',
                                    fontSize: '16px',
                                    fontFamily: 'inherit',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '32px' }}>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '2px',
                                    background: 'var(--bg-tertiary)',
                                    fontSize: '16px',
                                    fontFamily: 'inherit',
                                    color: 'var(--text-primary)',
                                    resize: 'vertical',
                                    minHeight: '120px',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn primary"
                            disabled={status === 'sending'}
                            style={{
                                width: '100%',
                                background: status === 'success' ? '#4CAF50' : 'var(--accent-color)',
                                color: status === 'success' ? 'white' : 'var(--btn-text-color)',
                                borderColor: status === 'success' ? '#4CAF50' : 'var(--accent-color)'
                            }}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;

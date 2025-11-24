import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaUsers } from 'react-icons/fa';
import { SiHacktoberfest } from 'react-icons/si';

const OpenSource = () => {
    const contributions = [
        {
            title: 'Shiki',
            description: 'Contributed to Shiki, a beautiful syntax highlighter based on TextMate grammars. Helped improve language support and documentation.',
            role: 'Contributor',
            icon: <FaCodeBranch />,
            link: 'https://github.com/shikijs/shiki'
        },
        {
            title: 'Hacktoberfest 2024',
            description: 'Actively participated in Hacktoberfest, contributing to multiple open-source repositories and promoting open-source culture.',
            role: 'Participant',
            icon: <SiHacktoberfest />,
            link: 'https://hacktoberfest.com/'
        }
    ];

    const organizations = [
        { name: '@nst-sdc', url: 'https://github.com/nst-sdc' },
        { name: '@shikijs', url: 'https://github.com/shikijs' },
        { name: '@pixel-museum', url: 'https://github.com/pixel-museum' }
    ];

    return (
        <section id="opensource" className="opensource-section" style={{
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
                    Open Source & Achievements
                </motion.h2>

                {/* GitHub Stats Summary */}
                <motion.div
                    className="github-stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '60px'
                    }}
                >
                    <div style={{
                        background: 'var(--bg-tertiary)',
                        padding: '30px 50px',
                        borderRadius: '2px',
                        border: '1px solid var(--border-glass)',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-light)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span style={{ fontSize: '48px', fontWeight: 700, color: 'var(--accent-color)', fontFamily: 'var(--font-heading)' }}>
                            603+
                        </span>
                        <span style={{ fontSize: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Contributions in the last year
                        </span>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                            {organizations.map((org, index) => (
                                <a
                                    key={index}
                                    href={org.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--text-muted)',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                >
                                    {org.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="contributions-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {contributions.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contribution-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-glass)',
                                padding: '40px',
                                borderRadius: '2px',
                                textDecoration: 'none',
                                display: 'block',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-glass)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                fontSize: '32px',
                                color: 'var(--accent-color)',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                {item.icon}
                                <FaGithub style={{ fontSize: '20px', opacity: 0.5 }} />
                            </div>

                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: 600,
                                marginBottom: '8px',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {item.title}
                            </h3>

                            <span style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                color: 'var(--accent-color)',
                                background: 'rgba(212, 175, 55, 0.1)',
                                padding: '4px 10px',
                                borderRadius: '100px',
                                marginBottom: '16px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {item.role}
                            </span>

                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px' }}>
                                {item.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;

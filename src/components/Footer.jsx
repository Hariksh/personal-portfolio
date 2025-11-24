import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-glass-strong)',
            backdropFilter: 'blur(10px)',
            padding: '40px 0',
            textAlign: 'center',
            marginTop: '60px',
            borderTop: '1px solid var(--border-glass)'
        }}>
            <div className="container">
                <p style={{ opacity: 0.8 }}>
                    &copy; {new Date().getFullYear()} Hariksh Mahendra Suryawanashi. All rights reserved.
                </p>
                <div className="social-links" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    {/* Add social icons here if needed, or rely on the ones in Contact section */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

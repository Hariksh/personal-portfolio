import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
                <p style={{ opacity: 0.8, marginBottom: '20px' }}>
                    &copy; {new Date().getFullYear()} Hariksh Mahendra Suryawanashi. All rights reserved.
                </p>
                <div className="social-links" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    marginTop: '20px'
                }}>
                    <a href="https://github.com/Hariksh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '20px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/hariksh-suryawanshi-318a65314/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '20px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:hariksh.suryawanshi@adypu.edu.in" style={{ color: 'var(--text-secondary)', fontSize: '20px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

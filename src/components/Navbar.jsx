import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scrolling when location changes
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu

        if (href.startsWith('/#')) {
            const hash = href.substring(2);
            if (location.pathname === '/') {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/#' + hash);
            }
        } else {
            navigate(href);
        }
    };

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Resume', href: '/resume' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: scrolled ? '15px 50px' : '20px 50px',
                background: scrolled ? 'var(--bg-glass-strong)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-glass)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-light)' : 'none',
                zIndex: 'var(--z-header)',
                transition: 'all var(--transition-normal)'
            }}
        >
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span className="dot" style={{
                    width: '12px',
                    height: '12px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px var(--accent-color)'
                }}></span>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.5px',
                        margin: 0,
                        fontFamily: 'var(--font-heading)'
                    }}>Hariksh</h1>
                </Link>
            </div>

            <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`} style={{
                    display: 'flex',
                    gap: '30px',
                    '@media (max-width: 768px)': {
                        display: isOpen ? 'flex' : 'none',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'var(--bg-glass-strong)',
                        padding: '20px',
                        borderBottom: '1px solid var(--border-glass)'
                    }
                }}>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: '16px',
                                        color: 'var(--text-primary)',
                                        fontWeight: 500,
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-primary)'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeToggle />
                <div className="mobile-menu-icon" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', fontSize: '24px', color: 'var(--text-primary)' }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          header {
            padding: 15px 20px !important;
          }
          .nav-menu ul {
            display: none !important;
          }
          .mobile-menu-icon {
            display: block !important;
          }
          .nav-menu.open ul {
            display: flex !important;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
        </header>
    );
};

export default Navbar;

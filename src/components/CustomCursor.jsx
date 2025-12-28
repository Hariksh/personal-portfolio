import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                    opacity: 'var(--cursor-opacity, 1)' /* Allow hiding via CSS */
                }}
                animate={{
                    x: mousePosition.x - 5,
                    y: mousePosition.y - 5,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />

            {/* Glow Spotlight Effect */}
            <motion.div
                className="cursor-glow"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '600px',
                    height: '600px',
                    background: 'var(--cursor-glow-gradient)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'var(--cursor-blend-mode)',
                    transform: 'translate(-50%, -50%)',
                    opacity: 'var(--cursor-opacity, 1)' /* Allow hiding via CSS */
                }}
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                }}
                transition={{ type: "tween", ease: "linear", duration: 0.15 }}
            />
        </>
    );
};

export default CustomCursor;

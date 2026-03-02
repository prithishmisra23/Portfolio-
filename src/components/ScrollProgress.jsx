import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            id="scroll-progress"
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-violet origin-left z-50 pointer-events-none"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;

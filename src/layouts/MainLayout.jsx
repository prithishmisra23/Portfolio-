import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import TopNav from '../components/TopNav';
import TerminalOverlay from '../components/TerminalOverlay';

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent/20 selection:text-accent flex flex-col">
            <TopNav />
            <TerminalOverlay />

            <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex-grow w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="py-8 border-t border-surface max-w-6xl mx-auto w-full px-6 mt-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-secondary gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>Portfolio v1.0</p>
                        <span className="hidden md:inline-block">/</span>
                        <p>Last updated — March 2026</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://github.com/prithishmisra23" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/prithishmisra23" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;

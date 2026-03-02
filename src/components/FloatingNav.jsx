import { Link } from 'react-router-dom';
import { Home, Briefcase, Code, PenTool, Globe, User } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingNav = () => {
    const links = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Projects', path: '/projects', icon: <Code size={20} /> },
        { name: 'Blog', path: '/blog', icon: <PenTool size={20} /> },
        { name: 'Ecosystem', path: '/ecosystem', icon: <Globe size={20} /> },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 p-2 rounded-full glass-card bg-primary/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className="relative group p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                    <span className="text-gray-400 group-hover:text-accent transition-colors">
                        {link.icon}
                    </span>
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 border border-white/10 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {link.name}
                    </span>
                </Link>
            ))}
        </motion.div>
    );
};

export default FloatingNav;

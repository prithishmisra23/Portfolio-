import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const TopNav = () => {
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-surface">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-xl font-space font-bold tracking-tight text-primary">
                    Prithish Misra
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="relative text-sm font-medium transition-colors hover:text-primary group"
                            >
                                <span className={isActive ? 'text-primary' : 'text-secondary'}>
                                    {link.name}
                                </span>
                                <span
                                    className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default TopNav;

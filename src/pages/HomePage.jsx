import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-[70vh] justify-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
            >
                <h1 className="text-5xl md:text-7xl font-space font-bold leading-tight tracking-tight text-primary mb-6">
                    Prithish Misra <br />
                    <span className="text-secondary">AI Systems & Startups</span>
                </h1>

                <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-4">
                    Designing systems that scale quietly.
                </p>

                <div className="flex gap-6 items-center mb-6">
                    <Link
                        to="/work"
                        className="text-primary font-medium hover:text-accent transition-colors duration-300 flex items-center gap-2 group border border-surface px-4 py-2 hover:border-accent"
                    >
                        View Work
                    </Link>
                    <Link
                        to="/contact"
                        className="text-primary font-medium hover:text-accent transition-colors duration-300 flex items-center gap-2 group border border-surface px-4 py-2 hover:border-accent"
                    >
                        Get in Touch
                    </Link>
                </div>

                <p className="text-sm text-secondary/60 font-mono mb-20">
                    Systems over noise. Depth over hype.
                </p>

                <div className="text-sm text-secondary space-y-3">
                    <h3 className="text-primary font-bold font-space uppercase tracking-widest mb-6 border-b border-surface pb-4 inline-block">Currently</h3>
                    <p className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> Building Rydin</p>
                    <p className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> Expanding ShriramJourney</p>
                    <div className="flex items-center gap-3 group relative w-fit cursor-default">
                        <span className="w-1 h-1 bg-accent rounded-full" /> Growing Code Capital &amp; Coffee
                        <span className="absolute left-full ml-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-surface text-primary p-2 border border-accent/20 z-10 pointer-events-none">
                            A platform exploring AI, capital, startups &amp; systems thinking.
                        </span>
                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-32 pt-16 border-t border-surface text-center max-w-xl mx-auto"
            >
                <p className="text-secondary mb-6 text-lg">Interested in building something meaningful?</p>
                <Link to="/contact" className="text-primary hover:text-accent transition-colors duration-300 font-space font-bold tracking-widest uppercase text-sm group flex items-center justify-center gap-2 w-max mx-auto">
                    Let's talk <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
            </motion.div>
        </div>
    );
};

export default HomePage;

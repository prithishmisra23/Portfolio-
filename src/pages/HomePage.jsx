import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex items-center min-h-[70vh]">
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
                    Building scalable systems at the intersection of intelligence and product.
                </p>

                <p className="text-sm text-secondary/60 font-mono mb-12">
                    Systems over noise. Depth over hype.
                </p>

                <div className="flex gap-6 items-center mb-20">
                    <Link
                        to="/work"
                        className="text-primary font-medium hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                        View Work
                        <span className="w-4 h-[1px] bg-primary group-hover:bg-accent transition-colors" />
                    </Link>
                    <Link
                        to="/contact"
                        className="text-secondary font-medium hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                        Get in Touch
                        <span className="w-4 h-[1px] bg-secondary group-hover:bg-primary transition-colors" />
                    </Link>
                </div>

                <div className="text-sm text-secondary space-y-2">
                    <h3 className="text-primary font-bold font-space uppercase tracking-widest mb-4">Currently</h3>
                    <p className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> Building LegalLink</p>
                    <p className="flex items-center gap-3"><span className="w-1 h-1 bg-surface rounded-full" /> Expanding Rydin</p>
                    <p className="flex items-center gap-3"><span className="w-1 h-1 bg-surface rounded-full" /> Writing about systems & startups</p>
                </div>
            </motion.div>
        </div>
    );
};

export default HomePage;

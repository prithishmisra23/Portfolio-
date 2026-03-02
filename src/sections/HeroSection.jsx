import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <NetworkBackground />

            <div className="container mx-auto px-6 z-10">
                <div className="max-w-4xl space-y-8">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 text-sm font-medium text-accent"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        Building Rydin 🚀
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-space font-bold leading-tight"
                    >
                        Engineering Intelligence. <br />
                        <span className="text-gradient">Building Systems.</span> <br />
                        Scaling Impact.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-sans"
                    >
                        AI-focused technologist building scalable startup ecosystems at the intersection of product, capital, and innovation.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-8"
                    >
                        <Link to="/projects" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <Eye className="relative w-5 h-5" />
                            <span className="relative">View Ventures</span>
                        </Link>

                        <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 glass-card font-semibold rounded-xl transition-all hover:bg-white/5 hover:border-white/20">
                            <span className="text-gray-200">Contact Me</span>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                        </a>

                        <a href="/Prithish_Misra_Resume.pdf" download className="group inline-flex items-center gap-2 px-8 py-4 glass-card font-semibold rounded-xl transition-all hover:bg-white/5 hover:border-violet/30 hover:text-violet">
                            <Download className="w-5 h-5" />
                            <span>Resume</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest font-space">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;

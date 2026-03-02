import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Sparkles, Layers, RefreshCw } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { ventures } from '../data/ventures';

const VentureCard = ({ venture, idx }) => {
    const [view, setView] = useState('product'); // 'product' | 'technical'

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`glass-card overflow-hidden my-16 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            {/* Image / Visual Side */}
            <div className={`relative h-64 lg:h-auto overflow-hidden ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 lg:bg-gradient-to-r lg:from-primary lg:via-primary/50" />
                <img
                    src={venture.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"}
                    alt={venture.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full text-xs font-semibold border border-white/10 uppercase tracking-widest text-accent">
                        {venture.role}
                    </span>
                </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 relative z-20 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-5xl font-space font-bold text-white tracking-tight">{venture.title}</h3>

                    <div className="flex items-center gap-2 bg-primary/50 rounded-lg p-1 border border-white/5">
                        <button
                            onClick={() => setView('product')}
                            className={`p-2 rounded-md transition-all ${view === 'product' ? 'bg-accent/20 text-accent' : 'text-gray-500 hover:text-gray-300'}`}
                            title="Product View"
                        >
                            <Sparkles size={18} />
                        </button>
                        <button
                            onClick={() => setView('technical')}
                            className={`p-2 rounded-md transition-all ${view === 'technical' ? 'bg-violet/20 text-violet' : 'text-gray-500 hover:text-gray-300'}`}
                            title="Technical View"
                        >
                            <Code2 size={18} />
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {view === 'product' ? (
                        <motion.div
                            key="product"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Problem / Purpose</h4>
                                <p className="text-gray-300 leading-relaxed">{venture.problem || venture.purpose}</p>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Vision</h4>
                                <p className="text-gray-300 leading-relaxed">{venture.vision}</p>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Strategy & Roadmap</h4>
                                <p className="text-gray-300 leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {venture.roadmap || venture.growthStrategy}
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="technical"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-violet/70 mb-2 font-medium flex items-center gap-2"><Layers size={14} /> Architecture</h4>
                                <p className="text-gray-300 leading-relaxed">{venture.architecture || venture.systemArchitecture}</p>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-violet/70 mb-2 font-medium flex items-center gap-2"><RefreshCw size={14} /> Engineering Challenges</h4>
                                <p className="text-gray-300 leading-relaxed">{venture.engineeringChallenges || venture.lessonsLearned}</p>
                            </div>
                            {venture.techStack && (
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-violet/70 mb-3 font-medium">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {venture.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-violet/10 border border-violet/20 rounded-md text-sm text-violet-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                    <a href={venture.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors">
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const VenturesSection = () => {
    return (
        <section className="py-24 relative" id="ventures">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Core Ventures"
                    subtitle="Companies and large-scale systems I am actively building, scaling, and operating."
                />

                <div className="flex flex-col gap-8">
                    {ventures.map((venture, idx) => (
                        <VentureCard key={venture.id} venture={venture} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VenturesSection;

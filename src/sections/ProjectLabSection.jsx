import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const ProjectLabSection = ({ limit }) => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'AI', 'Startup', 'Growth', 'Full Stack'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category.includes(filter));

    const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

    return (
        <section className="py-24 relative" id="projects">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <SectionHeading
                        title="Project Lab"
                        subtitle="Deep tech integrations, experimental pipelines, and scalable APIs."
                    />

                    <div className="flex flex-wrap gap-2 mb-16 md:mb-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                                        : 'bg-primary/50 text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayProjects.map((project, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                key={project.id}
                                className="glass-card p-8 rounded-2xl flex flex-col group relative overflow-hidden h-full"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-violet opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-xs font-mono text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold font-space text-white mt-4">{project.title}</h3>
                                    </div>

                                    <div className="flex gap-3 text-gray-400">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 flex-grow text-sm text-gray-400">
                                    <p><strong className="text-gray-200">Problem:</strong> {project.problem}</p>
                                    <p><strong className="text-gray-200">Solution:</strong> {project.solution}</p>
                                    <p className="line-clamp-2 group-hover:line-clamp-none transition-all"><strong className="text-violet-300">Architecture:</strong> {project.architecture}</p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                    <p className="text-sm"><strong className="text-accent text-xs uppercase tracking-widest">Impact:</strong> <span className="text-gray-300 block mt-1">{project.impact}</span></p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {limit && projects.length > limit && (
                    <div className="mt-16 text-center">
                        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 hover:border-accent text-white transition-all group">
                            View All Projects
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectLabSection;

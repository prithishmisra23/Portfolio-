import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, Terminal, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AiPlaygroundSection = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch latest repos dynamically
        fetch('https://api.github.com/users/prithishmisra23/repos?sort=updated&per_page=3')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setRepos(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-24 relative" id="playground">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Active Intelligence"
                    subtitle="Live coding feeds and experimental models."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* GitHub Activity */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl flex flex-col border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Github className="text-accent" />
                            <h3 className="text-xl font-bold font-space text-white">Latest Deployments</h3>
                            <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Live Sync"></div>
                        </div>

                        {loading ? (
                            <div className="flex-1 flex items-center justify-center">
                                <Activity className="animate-spin text-accent" />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {repos.map(repo => (
                                    <a
                                        key={repo.id}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-xl border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all group"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <strong className="text-accent group-hover:text-white transition-colors">{repo.name}</strong>
                                            <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                                                <Terminal size={12} /> {repo.language || 'Config'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 line-clamp-2">{repo.description || "Experimental repository."}</p>
                                        <div className="mt-3 text-xs text-gray-500 flex gap-4">
                                            <span>★ {repo.stargazers_count}</span>
                                            <span>⑂ {repo.forks_count}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* AI Assistant Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-accent/20 bg-gradient-to-br from-primary via-primary to-accent/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                <MessageSquare size={32} />
                            </div>
                            <h3 className="text-2xl font-bold font-space text-white mb-2">Founder AI Agent</h3>
                            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                                An LLM fine-tuned on my essays, codebases, and product philosophies.
                                Currently training in the background.
                            </p>

                            <div className="px-6 py-2 rounded-full border border-accent/50 text-accent text-sm font-medium animate-pulse cursor-not-allowed">
                                Initializing Weights... (Coming Soon)
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AiPlaygroundSection;

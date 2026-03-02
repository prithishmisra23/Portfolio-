import { motion } from 'framer-motion';
import { ExternalLink, Linkedin, Github, Book, Twitter, Instagram, MessageCircle, Figma, PenTool } from 'lucide-react';
import { links } from '../data/links';

const iconMap = {
    linkedin: Linkedin,
    github: Github,
    book: Book,
    twitter: Twitter,
    instagram: Instagram,
    "message-circle": MessageCircle,
    figma: Figma,
    "pen-tool": PenTool
};

const EcosystemPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen"
        >
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-gradient mb-6 leading-tight"
                >
                    The Systems I’m Building <br /> Across The Internet
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    An interconnected web of code, content, and venture dynamics.
                </motion.p>
            </div>

            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {links.map((link, idx) => {
                        const Icon = iconMap[link.icon] || ExternalLink;

                        return (
                            <motion.a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-2xl flex flex-col group border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all relative overflow-hidden h-full"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all">
                                    <ExternalLink className="w-5 h-5 text-accent" />
                                </div>

                                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold font-space text-white mb-2 group-hover:text-accent transition-colors">{link.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{link.purpose}</p>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default EcosystemPage;

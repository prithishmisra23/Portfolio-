import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

// Mocked blog posts - ideally fetched dynamically
const posts = [
    {
        slug: 'scaling-websockets-for-mobility',
        title: 'Architecting Real-Time Matching Engines via WebSockets',
        excerpt: 'How we structured Rydin\'s backend to handle concurrent location pings at scale without memory degradation.',
        date: 'March 15, 2026',
        readTime: '8 min read',
        tags: ['Architecture', 'Node.js', 'Scaling']
    },
    {
        slug: 'the-art-of-the-founder-api',
        title: 'The Founder API: Building Systems That Scale Without You',
        excerpt: 'Why replacing yourself with automated pipelines is the only way to transition from engineer to founder.',
        date: 'February 28, 2026',
        readTime: '6 min read',
        tags: ['Product', 'Philosophy', 'Automation']
    }
];

const BlogPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen"
        >
            <div className="container mx-auto px-6 mb-16 max-w-4xl text-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6"
                >
                    Signal & Noise
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg md:text-xl"
                >
                    Essays on system design, startup mechanics, and engineering psychology. Code Capital & Coffee ready.
                </motion.p>
            </div>

            <div className="container mx-auto px-6 max-w-4xl space-y-12">
                {posts.map((post, idx) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-8 rounded-2xl group border border-white/10 hover:border-accent/40 transition-colors"
                    >
                        <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-1 text-accent"><Clock size={14} /> {post.readTime}</span>
                        </div>

                        <Link to={`/blog/${post.slug}`}>
                            <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-violet transition-colors">
                                {post.title}
                            </h2>
                        </Link>

                        <p className="text-gray-400 leading-relaxed mb-6">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.div>
    );
};

export default BlogPage;

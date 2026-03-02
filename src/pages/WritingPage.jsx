import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
    {
        slug: 'scaling-websockets-for-mobility',
        title: 'Architecting Real-Time Matching Engines via WebSockets',
        excerpt: 'How we structured Rydin\'s backend to handle concurrent location pings at scale without memory degradation.',
        date: 'Mar 15, 2026',
    },
    {
        slug: 'the-art-of-the-founder-api',
        title: 'The Founder API: Building Systems That Scale Without You',
        excerpt: 'Why replacing yourself with automated pipelines is the only way to transition from engineer to founder.',
        date: 'Feb 28, 2026',
    }
];

const WritingPage = () => {
    return (
        <div className="max-w-3xl mx-auto py-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl font-space font-bold mb-16 text-primary tracking-tight">Writing</h1>

                <div className="flex flex-col border-t border-surface">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/writing/${post.slug}`}
                            className="py-10 border-b border-surface group"
                        >
                            <div className="flex flex-col gap-4">
                                <span className="text-sm text-secondary font-mono tracking-widest">{post.date}</span>
                                <h2 className="text-2xl font-space font-bold text-primary relative inline-block self-start group-hover:text-accent transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-secondary leading-relaxed max-w-2xl mt-2">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default WritingPage;

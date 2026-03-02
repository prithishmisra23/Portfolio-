import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    // Mocked details, eventually fetch from frontmatter
    const postDetails = {
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        date: 'March 2026',
        readTime: '6 min read'
    };

    useEffect(() => {
        // Attempt to load markdown file from /blog/posts/{slug}.md
        fetch(`/src/blog/posts/${slug}.md`)
            .then(res => {
                if (!res.ok) throw new Error('Post not found');
                return res.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                setContent('# Error 404\n\nThis transmission mapping could not be found or has not been authored yet.');
                setLoading(false);
            });
    }, [slug]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen pb-32"
        >
            <div className="container mx-auto px-6 max-w-3xl">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent font-medium mb-12 transition-colors">
                    <ArrowLeft size={16} /> Back to Transmission Feed
                </Link>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                    </div>
                ) : (
                    <motion.article
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="mb-12 border-b border-white/10 pb-12">
                            <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 leading-tight">
                                {postDetails.title}
                            </h1>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex gap-6 text-sm font-mono text-gray-500">
                                    <span className="flex items-center gap-2"><Calendar size={16} /> {postDetails.date}</span>
                                    <span className="flex items-center gap-2 text-accent"><Clock size={16} /> {postDetails.readTime}</span>
                                </div>

                                <div className="flex gap-3 text-gray-500">
                                    <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest mr-2"><Share2 size={14} /> Share</span>
                                    <button className="hover:text-[#1DA1F2] transition-colors"><Twitter size={18} /></button>
                                    <button className="hover:text-[#0A66C2] transition-colors"><Linkedin size={18} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-space prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-a:text-accent prose-a:no-underline hover:prose-a:text-violet transition-colors prose-pre:bg-primary prose-pre:border prose-pre:border-white/10 prose-img:rounded-xl">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-mono">EOF // End of Transmission</span>
                        </div>
                    </motion.article>
                )}
            </div>
        </motion.div>
    );
};

export default BlogPost;

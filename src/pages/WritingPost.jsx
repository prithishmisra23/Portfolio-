import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { motion } from 'framer-motion';

const WritingPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [readingMode, setReadingMode] = useState(false);

    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    useEffect(() => {
        fetch(`/src/blog/posts/${slug}.md`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(() => {
                setContent('# Error 404\n\nThe requested piece could not be located.');
                setLoading(false);
            });
    }, [slug]);

    return (
        <div className={`mx-auto py-12 md:py-24 transition-all duration-500 ease-in-out ${readingMode ? 'max-w-[750px]' : 'max-w-[700px]'}`}>
            <div className={`flex justify-between items-center mb-16 transition-opacity duration-500 ${readingMode ? 'opacity-30 hover:opacity-100' : 'opacity-100'}`}>
                <Link to="/writing" className="text-sm font-mono tracking-widest text-secondary hover:text-primary transition-colors block group">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1 mr-2">&larr;</span> Back
                </Link>
                <button
                    onClick={() => setReadingMode(!readingMode)}
                    className="text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors px-3 py-1 border border-surface hover:border-secondary"
                >
                    {readingMode ? 'Standard View' : 'Reading Mode'}
                </button>
            </div>

            {loading ? (
                <div className="h-40 animate-pulse bg-surface/50 w-full rounded" />
            ) : (
                <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <header className={`mb-16 transition-opacity duration-500 ${readingMode ? 'opacity-60 hover:opacity-100' : 'opacity-100'}`}>
                        <h1 className="text-4xl md:text-5xl font-space font-bold text-primary leading-tight tracking-tight mb-6">
                            {title}
                        </h1>
                        <div className="text-sm font-mono text-secondary tracking-widest border-b border-surface pb-8">
                            March 2026
                        </div>
                    </header>

                    <div className={`prose prose-invert max-w-none transition-all duration-500 ease-in-out
            prose-headings:font-space prose-headings:font-bold prose-headings:text-primary 
            prose-p:text-secondary 
            prose-a:text-accent prose-a:underline prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:text-primary
            prose-pre:bg-surface prose-pre:border prose-pre:border-surface prose-pre:my-8 prose-pre:rounded-none
            prose-li:text-secondary prose-ul:my-8
            prose-hr:border-surface
            ${readingMode ? 'prose-xl prose-p:leading-[2.2] prose-p:my-10 tracking-wide opacity-90' : 'prose-lg prose-p:leading-[1.8] prose-p:my-8'}
          `}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                            {content}
                        </ReactMarkdown>
                    </div>

                    <footer className={`mt-24 pt-8 border-t border-surface text-center transition-opacity duration-500 ${readingMode ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}>
                        <div className="w-1.5 h-1.5 bg-accent mx-auto rounded-full" />
                    </footer>
                </motion.article>
            )}
        </div>
    );
};

export default WritingPost;

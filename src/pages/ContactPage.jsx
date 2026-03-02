import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../data/links';

const ContactPage = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <div className="max-w-2xl mx-auto py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 text-primary tracking-tight">
                    Initialize Contact
                </h1>
                <p className="text-secondary mb-16 text-lg leading-relaxed">
                    Open for venture networking, architectural consulting, and high-leverage opportunities.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background">
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-primary font-space">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-surface text-primary py-3 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none placeholder:text-surface"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-primary font-space">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-transparent border-b border-surface text-primary py-3 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none placeholder:text-surface"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-primary font-space block">Message</label>
                        <textarea
                            required
                            rows={5}
                            className="w-full bg-transparent border-b border-surface text-primary py-3 focus:outline-none focus:border-accent transition-colors duration-300 resize-none rounded-none placeholder:text-surface"
                            placeholder="Let's build something scalable."
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status !== 'idle'}
                            className="px-8 py-4 bg-accent text-background font-medium hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Transmitted' : 'Send Message'}
                        </button>
                    </div>
                </form>

                <div className="mt-24 pt-12 border-t border-surface flex flex-col items-center text-center">
                    <div className="text-sm text-secondary font-mono mb-6">Or directly at:</div>
                    <a href="mailto:prithishmisra23@gmail.com" className="text-xl font-space text-primary hover:text-accent transition-colors duration-300 mb-12">
                        prithishmisra23@gmail.com
                    </a>

                    <div className="text-sm text-secondary font-mono mb-6">Connect across the ecosystem:</div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;

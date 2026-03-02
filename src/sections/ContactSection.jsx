import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { links } from '../data/links';

const ContactSection = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateValidation = () => {
        return formData.name.length > 2 && formData.email.includes('@') && formData.message.length > 10;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!calculateValidation()) return;

        setStatus('loading');

        // Make sure to replace these with actual EmailJS keys
        // Service ID, Template ID, Public Key
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((err) => {
                console.error('Email error:', err);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    const socialLinks = links.filter(l => ['LinkedIn', 'GitHub', 'X (Twitter)'].includes(l.name));

    return (
        <section className="py-24 relative" id="contact">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionHeading
                    title="Initialize Connection"
                    subtitle="Open for venture networking, architectural consulting, and high-leverage opportunities."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl relative border border-white/10"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-primary/50 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Endpoint</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-primary/50 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="flex-grow">
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Payload / Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full h-[150px] bg-primary/50 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-gray-600"
                                    placeholder="Let's build something scalable."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || !calculateValidation()}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                                        !calculateValidation() ? 'bg-primary border border-white/5 text-gray-600 cursor-not-allowed' :
                                            'bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
                                    }`}
                            >
                                {status === 'loading' && <Loader2 className="animate-spin w-5 h-5" />}
                                {status === 'success' && <CheckCircle className="w-5 h-5" />}
                                {status === 'idle' || status === 'error' ? (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Transmit Request
                                    </>
                                ) : status === 'success' ? 'Transmission Successful' : 'Processing...'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Connect Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-8"
                    >
                        <div className="glass-card p-8 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 font-space">Direct Line</h3>
                            <p className="text-gray-400 text-sm mb-4">Urgent technical inquiries or partnership requests bypass the queue.</p>
                            <a href="mailto:prithishmisra23@gmail.com" className="text-xl md:text-2xl text-accent font-semibold flex items-center gap-2 hover:text-white transition-colors">
                                prithishmisra23@gmail.com
                            </a>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 glass-card p-6 flex flex-col items-center justify-center gap-2 rounded-2xl hover:-translate-y-2 transition-transform hover:border-violet/50 group text-center"
                                >
                                    <span className="text-gray-400 group-hover:text-violet transition-colors">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-white block mb-1 text-sm font-space">System Status: Nominal</strong>
                                <p className="text-gray-500 text-xs">Currently open to evaluating high-impact founding engineering roles or co-founder dynamics. Based in India.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

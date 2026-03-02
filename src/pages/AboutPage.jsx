import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-5xl font-space font-bold mb-16 text-primary tracking-tight">
                    About
                </h1>

                <div className="space-y-16 text-secondary leading-[1.8] text-lg max-w-2xl">

                    <section className="relative">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4 inline-block w-full">
                            Background
                        </h2>
                        <div className="space-y-6">
                            <p>
                                B.Tech CSE @ SRMIST. IIT finalist. Focused on applied systems.
                            </p>
                        </div>
                    </section>

                    <section className="relative">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4 inline-block w-full">
                            Focus
                        </h2>
                        <div className="space-y-6">
                            <p>
                                AI systems, product architecture, scalable ventures.
                            </p>
                        </div>
                    </section>

                    <section className="relative">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4 inline-block w-full">
                            Current Work
                        </h2>
                        <div className="space-y-6">
                            <p>
                                Rydin. ShriramJourney. Code Capital &amp; Coffee.
                            </p>
                        </div>
                    </section>

                </div>

                <div className="mt-24 pt-16 border-t border-surface">
                    <p className="text-primary italic border-l border-accent pl-4 text-xl">
                        "I’m interested in building things that compound over time."
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;

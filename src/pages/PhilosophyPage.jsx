import { motion } from 'framer-motion';

const PhilosophyPage = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl md:text-5xl font-space font-bold mb-16 text-primary tracking-tight">
                    Philosophy
                </h1>

                <div className="space-y-16 text-secondary text-lg leading-relaxed">

                    <section className="relative">
                        <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">01</span>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-4 inline-block w-full">
                            On Systems
                        </h2>
                        <p>
                            I prefer building structures that reduce friction over chasing attention.
                        </p>
                    </section>

                    <section className="relative">
                        <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">02</span>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-4 inline-block w-full">
                            On Startups
                        </h2>
                        <p>
                            Most early products fail from lack of clarity, not lack of code.
                        </p>
                    </section>

                    <section className="relative">
                        <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">03</span>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-4 inline-block w-full">
                            On Growth
                        </h2>
                        <p>
                            Distribution is a system. Not a hack.
                        </p>
                    </section>

                    <section className="relative">
                        <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">04</span>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-4 inline-block w-full">
                            On Compounding
                        </h2>
                        <p>
                            The best work improves quietly over time.
                        </p>
                    </section>

                </div>

                <div className="mt-24 pt-12 border-t border-surface">
                    <h2 className="text-2xl font-space font-bold text-primary mb-4">Code Capital & Coffee</h2>
                    <p className="text-secondary mb-6 leading-relaxed">
                        A personal platform where I explore:
                    </p>
                    <ul className="list-none space-y-2 mb-8 text-secondary">
                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> AI systems</li>
                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> Capital & startup strategy</li>
                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> Product thinking</li>
                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent rounded-full" /> Long-term leverage</li>
                    </ul>

                    <a href="https://www.instagram.com/codecapitalcoffee/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-accent transition-colors duration-300 flex items-center gap-2 group w-max">
                        Visit Code Capital & Coffee <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default PhilosophyPage;

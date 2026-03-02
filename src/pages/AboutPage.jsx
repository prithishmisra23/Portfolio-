import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="max-w-3xl mx-auto py-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl font-space font-bold mb-16 text-primary tracking-tight">About</h1>

                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-1 space-y-12 text-secondary leading-relaxed text-lg">

                        <section className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4">Background</h2>
                            <p>
                                I am a founder, technologist, and digital architect. My background stems from deep systems thinking,
                                blending applied computer science with intuitive product design.
                            </p>
                            <p>
                                As a B.Tech CSE graduate (9.5 CGPA) and former intern at Google AI-ML, I have spent the last few years scaling ideas
                                from local environments into high-impact cloud architectures, successfully accelerating products across multiple competitive stages.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4">Focus</h2>
                            <p>
                                My work exists strictly at the intersection of intelligence and product. Instead of treating AI as a feature,
                                I treat it as raw infrastructure—designing hyper-optimized logistics systems, forecasting algorithms, and clean interfaces that
                                hide immense underlying complexity from the user.
                            </p>
                            <p>
                                I’m interested in long-term thinking, systems design, and building things that compound.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4">Current Work</h2>
                            <p>
                                Currently, I am Co-Founder of Rydin—building out highly concurrent routing engines for modern mobility.
                                I also operate ShriramJourney, managing its entire headless CMS and spatial mapping structure. I constantly
                                refine my operational capacity to ensure a seamless integration of product strategy, engineering speed, and scale.
                            </p>
                        </section>

                    </div>

                    <div className="w-full md:w-64 flex-shrink-0">
                        {/* Optional minimal portrait */}
                        <div className="w-full aspect-[4/5] bg-surface grayscale opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <img src="/profile.jpg" alt="Prithish Misra" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        <div className="text-xs text-secondary mt-4 font-mono">
                            Prithish Misra / 0.1
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;

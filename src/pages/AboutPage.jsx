import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Enhanced Portrait Section */}
                    <div className="w-full lg:w-1/3 flex-shrink-0 order-first lg:order-last">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full aspect-[4/5] overflow-hidden group border border-surface"
                        >
                            {/* Image Element with graceful fallback */}
                            <div className="absolute inset-0 bg-background flex flex-col items-center justify-center text-center p-6 z-0">
                                <span className="text-secondary font-mono text-sm uppercase tracking-widest mb-2">Portrait Directory</span>
                                <span className="text-xs text-surface">Place your image as /public/profile.jpg</span>
                            </div>

                            <img
                                src="/profile.jpg"
                                alt="Prithish Misra"
                                className="relative z-10 w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                                onError={(e) => {
                                    // If image fails to load, gracefully hide the img tag to reveal the aesthetic fallback behind it
                                    e.target.style.opacity = 0;
                                }}
                            />

                            {/* Minimal structural accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 m-4" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 m-4" />
                        </motion.div>

                        <div className="flex justify-between items-center mt-6 text-xs text-secondary font-mono tracking-widest border-t border-surface pt-4">
                            <span>PRITHISH MISRA</span>
                            <span>v1.0</span>
                        </div>
                    </div>

                    {/* Upgraded Typography Layout */}
                    <div className="flex-1 lg:max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-space font-bold mb-16 text-primary tracking-tight">
                            About
                        </h1>

                        <div className="space-y-16 text-secondary leading-[1.8] text-lg">

                            <section className="relative">
                                <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">01</span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4 inline-block w-full">
                                    Background
                                </h2>
                                <div className="space-y-6">
                                    <p>
                                        I am a founder, technologist, and digital architect. My background stems from deep systems thinking,
                                        blending applied computer science with intuitive product design.
                                    </p>
                                    <p>
                                        As a B.Tech CSE graduate (9.5 CGPA) and former intern at Google AI-ML, I have spent the last few years scaling ideas
                                        from local environments into high-impact cloud architectures, successfully accelerating products across multiple competitive stages.
                                    </p>
                                </div>
                            </section>

                            <section className="relative">
                                <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">02</span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4 inline-block w-full">
                                    Focus
                                </h2>
                                <div className="space-y-6">
                                    <p>
                                        My work exists strictly at the intersection of intelligence and product. Instead of treating AI as a feature,
                                        I treat it as raw infrastructure—designing hyper-optimized logistics systems, forecasting algorithms, and clean interfaces that
                                        hide immense underlying complexity from the user.
                                    </p>
                                    <p className="pl-4 border-l border-accent text-primary italic">
                                        "I’m interested in long-term thinking, systems design, and building things that compound."
                                    </p>
                                </div>
                            </section>

                            <section className="relative">
                                <span className="absolute -left-12 top-1 text-surface font-mono text-sm hidden md:block">03</span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-6 border-b border-surface pb-4 inline-block w-full">
                                    Current Work
                                </h2>
                                <div className="space-y-6">
                                    <p>
                                        Currently, I am Co-Founder of Rydin—building out highly concurrent routing engines for modern mobility.
                                        I also operate ShriramJourney, managing its entire headless CMS and spatial mapping structure. I constantly
                                        refine my operational capacity to ensure a seamless integration of product strategy, engineering speed, and scale.
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;

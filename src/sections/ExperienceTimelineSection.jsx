import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/experience';

const ExperienceTimelineSection = () => {
    return (
        <section className="py-24 relative" id="experience">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading
                    title="Operational History"
                    subtitle="Roles focused on building and scaling critical systems across ventures."
                />

                <div className="relative pl-8 md:pl-0">
                    <div className="absolute top-0 bottom-0 left-[35px] md:left-1/2 w-[2px] bg-gradient-to-b from-accent/50 via-violet/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

                    <div className="space-y-16">
                        {experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* Center Node */}
                                <div className="absolute left-[-24px] md:left-1/2 w-8 h-8 rounded-full bg-primary border-4 border-accent z-10 -ml-4 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center transform group-hover:scale-125 transition-transform">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>

                                <div className="w-full md:w-5/12 ml-4 md:ml-0 glass-card p-6 md:p-8 rounded-2xl border border-white/10 group-hover:border-accent/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-accent font-space font-bold uppercase tracking-widest text-xs">
                                            {exp.duration}
                                        </span>
                                        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-400">
                                            {exp.company}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                                    <div className="pt-4 border-t border-white/5 text-sm">
                                        <strong className="text-violet-400 uppercase tracking-widest text-xs">Impact: </strong>
                                        <span className="text-gray-300 ml-1">{exp.impact}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceTimelineSection;

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillsMatrix } from '../data/skills';

const SkillBar = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-6 group"
        >
            <div className="flex justify-between items-end mb-2">
                <span className="text-gray-200 font-medium group-hover:text-accent transition-colors">
                    {skill.name}
                </span>
                <span className="text-xs text-gray-500 font-mono">{skill.proficiency}%</span>
            </div>

            <div className="relative h-2 bg-primary/80 rounded-full overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-violet shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
            </div>

            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 overflow-hidden text-xs text-gray-400 border-l-2 border-accent/50 pl-3">
                {skill.description}
                {skill.relatedProjects?.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                        <strong className="text-gray-500">Related:</strong>
                        {skill.relatedProjects.map((p, i) => (
                            <span key={i} className="text-violet-400 bg-violet-400/10 px-1.5 py-0.5 rounded text-[10px]">{p}</span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const SkillsMatrixSection = () => {
    const [activeCategory, setActiveCategory] = useState(skillsMatrix[0].category);

    return (
        <section className="py-24 relative" id="skills">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Capabilities Matrix"
                    subtitle="A comprehensive diagnostic of functional proficiencies across the stack."
                />

                <div className="glass-card rounded-3xl p-6 lg:p-12 border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8 flex flex-col gap-2">
                            {skillsMatrix.map((matrix) => (
                                <button
                                    key={matrix.category}
                                    onClick={() => setActiveCategory(matrix.category)}
                                    className={`text-left px-6 py-4 rounded-xl font-medium transition-all ${activeCategory === matrix.category
                                            ? 'bg-accent/10 border border-accent/30 text-accent shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                                        }`}
                                >
                                    {matrix.category}
                                </button>
                            ))}
                        </div>

                        <div className="lg:col-span-3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {skillsMatrix
                                        .find(m => m.category === activeCategory)
                                        ?.skills.map((skill, idx) => (
                                            <SkillBar key={skill.name} skill={skill} index={idx} />
                                        ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SkillsMatrixSection;

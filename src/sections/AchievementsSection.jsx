import { motion } from 'framer-motion';
import { Award, Code, Target, Users, Activity } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/achievements';

const iconMap = {
    award: Award,
    code: Code,
    target: Target,
    users: Users,
    activity: Activity
};

const AchievementsSection = () => {
    return (
        <section className="py-24 relative" id="achievements">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Milestones & Validation"
                    subtitle="Recognition across national-level competitive engineering and product strategy platforms."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, idx) => {
                        const Icon = iconMap[item.icon] || Award;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-card p-8 rounded-2xl group border border-white/10 hover:border-violet/50 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-violet/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-violet/40 transition-colors" />

                                <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center text-violet mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                    <Icon size={24} />
                                </div>

                                <span className="text-[10px] font-mono text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded inline-block mb-3">
                                    {item.category}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-3 font-space">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;

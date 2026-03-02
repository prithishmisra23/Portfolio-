import { motion } from 'framer-motion';

const workItems = [
    {
        title: 'Rydin',
        role: 'Co-Founder',
        desc: 'Built by SRM students, for SRM students. Real-time geospatial ride matching, girls-only transit security, multi-modal hub pooling, and automated chat mechanics reducing local transit costs by up to 3x. Built to make student mobility structured, safe, and economically efficient.',
        link: 'https://rydin.vercel.app',
    },
    {
        title: 'ShriramJourney',
        role: 'Founder',
        desc: 'A complete digital Ramayana pilgrimage platform. Unifying 45+ sacred sites with interactive mapping, real-time 3D viewers, and AI-powered itineraries for immersive bilingual spiritual mapping. Designed to bring sacred journeys into a structured, accessible digital format.',
        link: 'https://shriramjourney.com',
    },
    {
        title: 'VayuNet',
        role: 'AI Engineer',
        desc: 'Machine learning forecasting pipeline for localized atmospheric stability and pollution tracking.',
        link: 'https://github.com/prithishmisra23/vayunet',
    },
    {
        title: 'Quizito',
        role: 'Full Stack Engineer',
        desc: 'High-concurrency gamified evaluation platform running fast real-time synchronization loops.',
        link: 'https://quizito.xyz',
    },
];

const WorkPage = () => {
    return (
        <div className="max-w-4xl mx-auto py-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl font-space font-bold mb-6 text-primary tracking-tight">Selected Work</h1>

                <p className="text-secondary mb-16 max-w-2xl leading-relaxed text-lg">
                    I focus on building structured systems — products that reduce friction and scale intelligently.
                    Below are ventures and experiments where I’ve applied that philosophy.
                </p>

                <div className="flex flex-col border-t border-surface">
                    {workItems.map((item, idx) => (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-10 border-b border-surface group block relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                                <h2 className="text-2xl font-space font-bold text-primary relative inline-block transition-colors group-hover:text-accent">
                                    {item.title}
                                    <span className="hidden md:inline-block absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        &rarr;
                                    </span>
                                </h2>
                                <span className="text-sm text-secondary font-mono mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                                    {new URL(item.link).hostname}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-secondary">
                                <div className="col-span-1 text-sm pt-1 uppercase tracking-widest font-space font-bold text-primary">
                                    {item.role}
                                </div>
                                <div className="col-span-3 leading-relaxed text-primary/80">
                                    {item.desc}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default WorkPage;

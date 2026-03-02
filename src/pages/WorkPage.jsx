import { motion } from 'framer-motion';

const coreVentures = [
    {
        title: 'RYDIN',
        role: 'Co-Founder',
        desc: 'Built to make student mobility structured, safe, and economically efficient.',
        tag: 'Student mobility platform',
        link: 'https://rydin.vercel.app',
    },
    {
        title: 'SHRIRAMJOURNEY',
        role: 'Founder',
        desc: 'Designed to bring sacred journeys into a structured, accessible digital format.',
        tag: 'Digital pilgrimage platform',
        link: 'https://shriramjourney.com',
    }
];

const selectProjects = [
    {
        title: 'VayuNet',
        desc: 'AI air quality prediction system',
        link: 'https://air-quality-forecast-app-fuhjcggmd9h6sgrhsghf98.streamlit.app/',
    },
    {
        title: 'Quizito',
        desc: 'Adaptive AI-based quiz platform',
        link: 'https://quizito-frontend.onrender.com/',
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
                    I build structured systems — products that reduce friction and scale intelligently.
                    <br />Below are ventures and applied experiments.
                </p>

                <div className="mb-16">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-8 border-b border-surface pb-4">Core Ventures</h3>
                    <div className="flex flex-col border-t border-surface">
                        {coreVentures.map((item, idx) => (
                            <a
                                key={item.title}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-10 border-b border-surface group block relative overflow-hidden"
                            >
                                <div className="flex flex-col mb-4">
                                    <h2 className="text-2xl font-space font-bold text-primary transition-colors group-hover:text-accent">
                                        {item.title}
                                    </h2>
                                    <div className="text-sm text-secondary font-mono mt-2 tracking-widest">
                                        {item.tag} <span className="mx-2">&bull;</span> {item.role}
                                    </div>
                                </div>

                                <div className="mt-4 leading-relaxed text-secondary mb-6 max-w-2xl">
                                    {item.desc}
                                </div>

                                <div className="text-sm font-space font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                                    &rarr; Visit Site
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary font-space mb-8 border-b border-surface pb-4">Select Projects</h3>
                    <div className="flex flex-col border-t border-surface">
                        {selectProjects.map((item, idx) => (
                            <a
                                key={item.title}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-6 border-b border-surface group block relative overflow-hidden flex flex-col md:flex-row justify-between md:items-center"
                            >
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-space font-bold text-primary transition-colors">
                                        {item.title}
                                    </h2>
                                    <div className="text-sm text-secondary font-mono mt-1 w-full max-w-lg truncate">
                                        {item.desc}
                                    </div>
                                </div>
                                <div className="mt-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    &rarr;
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default WorkPage;

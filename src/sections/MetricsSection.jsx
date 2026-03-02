import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const Counter = ({ from, to, label }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            let current = from;
            const step = (to - from) / 60; // 60 frames
            const timer = setInterval(() => {
                current += step;
                if (current >= to) {
                    clearInterval(timer);
                    setCount(to);
                } else {
                    setCount(Math.ceil(current));
                }
            }, 30);
            return () => clearInterval(timer);
        }
    }, [inView, from, to]);

    // Handle + suffix implicitly if to >= 5
    const suffix = (to >= 5 || to === 1000) ? '+' : '';
    const prefix = (label.includes("Finalist")) ? 'x ' : '';

    return (
        <div ref={ref} className="glass-card p-8 flex flex-col items-center justify-center text-center group cursor-pointer">
            <div className="text-4xl md:text-6xl font-space font-bold text-gradient mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {prefix}{count}{suffix}
            </div>
            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm group-hover:text-gray-200 transition-colors">
                {label}
            </div>
        </div>
    );
};

const MetricsSection = () => {
    const metrics = [
        { target: 5, label: "Hackathons" },
        { target: 2, label: "IIT Finalist" },
        { target: 1000, label: "Outreach Executed" },
        { target: 1, label: "AI Internship Completed" },
        { target: 2, label: "Ventures Launched" }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeading title="Impact by the numbers" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {metrics.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Counter from={0} to={m.target} label={m.label} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;

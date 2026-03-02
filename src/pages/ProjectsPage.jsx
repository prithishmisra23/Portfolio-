import { motion } from 'framer-motion';
import ProjectLabSection from '../sections/ProjectLabSection';
import VenturesSection from '../sections/VenturesSection';

const ProjectsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24"
        >
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6 leading-tight"
                >
                    Systems & Architecture
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    Full repository of ventures, open-source libraries, and experimental architectures built for execution at scale.
                </motion.p>
            </div>

            <VenturesSection />
            <ProjectLabSection limit={null} />
        </motion.div>
    );
};

export default ProjectsPage;

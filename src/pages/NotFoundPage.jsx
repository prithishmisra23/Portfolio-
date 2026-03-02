import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

            <motion.div
                animate={{
                    x: [0, -10, 10, -5, 5, 0],
                    y: [0, 5, -5, 10, -10, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                    repeatType: "mirror"
                }}
                className="text-[12rem] md:text-[18rem] font-bold font-space text-transparent bg-clip-text bg-gradient-to-br from-accent/20 to-violet/20 leading-none select-none blur-[2px]"
            >
                404
            </motion.div>

            <div className="absolute z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-primary border border-accent/50 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <Terminal size={40} className="text-accent" />
                </div>

                <h1 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">System Fault</h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-md mb-8">
                    The requested endpoint does not exist or has been deprecated in the current architecture.
                </p>

                <Link
                    to="/"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Return Home</span>
                </Link>
            </div>
        </motion.div>
    );
};

export default NotFoundPage;

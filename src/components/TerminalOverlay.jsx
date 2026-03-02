import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TerminalOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([
        "Founder OS v1.0",
        "Type a command.",
        "",
        "Available commands:",
        "whoami",
        "work",
        "writing",
        "contact",
        "clear",
        "exit"
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Toggle on "G" or "g" conditionally
            if (e.key.toLowerCase() === 'g' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let response = '';

            if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            }

            switch (cmd) {
                case 'whoami':
                    response = 'Prithish Misra. Building scalable systems at the intersection of intelligence and product.';
                    break;
                case 'ventures':
                case 'work':
                    response = 'Navigating to /work...';
                    setTimeout(() => { setIsOpen(false); navigate('/work'); }, 500);
                    break;
                case 'writing':
                    response = 'Navigating to /writing...';
                    setTimeout(() => { setIsOpen(false); navigate('/writing'); }, 500);
                    break;
                case 'contact':
                    response = 'Navigating to /contact...';
                    setTimeout(() => { setIsOpen(false); navigate('/contact'); }, 500);
                    break;
                case 'exit':
                    setIsOpen(false);
                    response = 'Terminating session...';
                    break;
                case 'help':
                    response = 'Available commands: whoami, work, writing, contact, clear, exit';
                    break;
                case '':
                    response = '';
                    break;
                default:
                    response = `Command not found: ${cmd}`;
            }

            setHistory(prev => [...prev, `~ % ${cmd}`, response].filter(Boolean));
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-[#000000] text-[#00ff00] font-mono text-sm p-12 max-h-screen overflow-y-auto"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="max-w-4xl mx-auto space-y-2">
                        {history.map((line, idx) => (
                            <div key={idx} className="whitespace-pre-wrap">{line}</div>
                        ))}
                        <div className="flex pt-4">
                            <span className="mr-3">~ %</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="flex-1 bg-transparent border-none outline-none text-[#00ff00]"
                                spellCheck="false"
                                autoComplete="off"
                                autoFocus
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalOverlay;

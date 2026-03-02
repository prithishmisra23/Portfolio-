import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TerminalOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([
        "Founder OS v1.0",
        "Minimal surface. Structured thinking.",
        "",
        "Available commands:",
        "whoami",
        "work",
        "philosophy",
        "contact",
        "clear",
        "exit"
    ]);
    const [input, setInput] = useState('');
    const [commandInProgress, setCommandInProgress] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
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
        if (e.key === 'Enter' && !commandInProgress) {
            e.preventDefault();
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
                    setCommandInProgress(true);
                    setTimeout(() => { setIsOpen(false); navigate('/work'); setCommandInProgress(false); }, 500);
                    break;
                case 'philosophy':
                    response = 'Navigating to /philosophy...';
                    setCommandInProgress(true);
                    setTimeout(() => { setIsOpen(false); navigate('/philosophy'); setCommandInProgress(false); }, 500);
                    break;
                case 'contact':
                    response = 'Navigating to /contact...';
                    setCommandInProgress(true);
                    setTimeout(() => { setIsOpen(false); navigate('/contact'); setCommandInProgress(false); }, 500);
                    break;
                case 'exit':
                    setIsOpen(false);
                    response = 'Terminating session...';
                    break;
                case 'help':
                    response = 'Available commands: whoami, work, philosophy, contact, clear, exit';
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
                    className="fixed inset-0 z-50 bg-[#000000] text-secondary font-mono text-sm p-12 max-h-screen overflow-y-auto outline-none border-none"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="max-w-4xl mx-auto space-y-2">
                        {history.map((line, idx) => (
                            <div key={idx} className="whitespace-pre-wrap">{line}</div>
                        ))}
                        <div className="flex pt-4 items-center">
                            <span className="mr-3 opacity-50">~ %</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                disabled={commandInProgress}
                                className="flex-1 bg-transparent border-none outline-none text-primary caret-transparent focus:outline-none"
                                spellCheck="false"
                                autoComplete="off"
                            />
                            <span className={`w-2 h-4 bg-secondary ml-1 ${commandInProgress ? 'animate-pulse' : ''}`} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalOverlay;

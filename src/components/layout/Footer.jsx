import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm relative z-10">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} TruckBite. All rights reserved.</p>
                <div className="flex justify-center gap-8 mt-6">
                    <LegalDropdown title="Privacy Policy">
                        <Link to="/privacy/consumer" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-left">Consumer App</Link>
                        <Link to="/privacy/vendor" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-left">Vendor App</Link>
                    </LegalDropdown>

                    <LegalDropdown title="Terms of Service">
                        <Link to="/terms/consumer" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-left">Consumer App</Link>
                        <Link to="/terms/vendor" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-left">Vendor App</Link>
                    </LegalDropdown>

                    <Link to="/aup/vendor" className="hover:text-white transition-colors relative top-[1px]">
                        Acceptable Use Policy (Vendor)
                    </Link>
                </div>
            </div>
        </footer>
    );
}

function LegalDropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 hover:text-white transition-colors ${isOpen ? 'text-white' : ''}`}
            >
                {title}
                <ChevronUp size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden text-sm py-1 border border-gray-100"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

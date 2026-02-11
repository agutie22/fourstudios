import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-vampire-black/90 backdrop-blur-md border-blood-red/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer group">
                        <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-gray-200 transition-colors">
                            FOUR <span className="text-blood-red drop-shadow-[0_0_8px_rgba(138,3,3,0.8)]">STUDIOS</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Our Work</a>
                            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Pricing</a>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blood-red hover:bg-red-900 text-white px-5 py-2 rounded-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(138,3,3,0.4)] hover:shadow-[0_0_25px_rgba(138,3,3,0.6)] border border-blood-red/50 font-oswald tracking-wide"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-vampire-black border-b border-blood-red/20 shadow-2xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#work" className="text-gray-300 hover:text-blood-red block px-3 py-2 rounded-md text-base font-medium transition-colors">Our Work</a>
                            <a href="#pricing" className="text-gray-300 hover:text-blood-red block px-3 py-2 rounded-md text-base font-medium transition-colors">Pricing</a>
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="w-full text-left bg-blood-red text-white px-3 py-2 rounded-sm font-medium mt-4 shadow-[0_0_15px_rgba(138,3,3,0.3)] font-oswald tracking-wide"
                            >
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

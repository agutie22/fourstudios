import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[] | string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    required?: boolean;
}

const CustomSelect = ({ options, value, onChange, label, placeholder = "Select an option", required }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const normalizedOptions = options.map(opt =>
        typeof opt === 'string' ? { value: opt, label: opt } : opt
    );

    const selectedLabel = normalizedOptions.find(opt => opt.value === value)?.label;

    return (
        <div className="relative" ref={containerRef}>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-oswald">
                {label} {required && <span className="text-blood-red">*</span>}
            </label>

            {/* Hidden Input for Form Submission compliance if needed, though we usually control state */}
            <input type="hidden" name={label.toLowerCase().replace(/\s+/g, '_')} value={value} />

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full px-4 py-3 bg-white/5 border rounded-sm text-white cursor-pointer flex items-center justify-between transition-all duration-200",
                    isOpen ? "border-blood-red ring-1 ring-blood-red/50" : "border-white/10 hover:border-white/20"
                )}
            >
                <span className={cn("text-sm transition-colors", !value && "text-gray-500")}>
                    {selectedLabel || placeholder}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="absolute z-50 w-full mt-2 bg-neutral-900 border border-white/10 rounded-sm shadow-xl max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        {normalizedOptions.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "px-4 py-3 text-sm cursor-pointer hover:bg-white/5 transition-colors flex items-center justify-between group",
                                    value === option.value ? "text-blood-red bg-blood-red/5" : "text-gray-300"
                                )}
                            >
                                <span className={cn("font-medium", value === option.value && "font-bold")}>
                                    {option.label}
                                </span>
                                {value === option.value && (
                                    <Check className="w-4 h-4 text-blood-red" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomSelect;

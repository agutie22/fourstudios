import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendProjectInquiry } from '../lib/emailService';
import CustomSelect from './CustomSelect';

interface ProjectFormProps {
    isOpen: boolean;
    onClose: () => void;
    initialPackage?: string;
}

const projectTypes = [
    'Starter Presence ($299–$499)',
    'Solo Launch ($750–$1,000)',
    'Business Growth ($1,500–$2,500)',
    'Scale & Systems ($3,000+)',
];

const budgetRanges = [
    'Under $500',
    '$500 – $1,000',
    '$1,000 – $2,500',
    '$2,500 – $5,000',
    '$5,000+',
    'Not sure yet',
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ProjectForm = ({ isOpen, onClose, initialPackage = '' }: ProjectFormProps) => {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Form State (Controlled inputs for key fields if needed, but primarily for CustomSelect)
    const [projectType, setProjectType] = useState('');
    const [budgetRange, setBudgetRange] = useState('');

    const overlayRef = useRef<HTMLDivElement>(null);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handler);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Reset status and set initial package on reopen
    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setErrorMessage('');

            // Auto-select package if one was passed
            if (initialPackage) {
                // Find the full option string that matches the passed package name (e.g. "Starter Presence")
                const matchedType = projectTypes.find(type => type.toLowerCase().includes(initialPackage.toLowerCase()));
                setProjectType(matchedType || '');
            } else {
                setProjectType('');
            }
        }
    }, [isOpen, initialPackage]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Manually append controlled values if they aren't picked up by FormData
        // (Our CustomSelect includes a hidden input, so FormData *should* pick it up, 
        // looking for name="project_type" etc. Let's verify hidden input names in CustomSelect)
        // CustomSelect names are based on label. Label "Project Type" -> "project_type"
        // Label "Budget Range" -> "budget_range"

        try {
            await sendProjectInquiry({
                from_name: formData.get('from_name') as string,
                from_email: formData.get('from_email') as string,
                business_name: formData.get('business_name') as string,
                project_type: formData.get('project_type') as string, // From hidden input
                budget_range: formData.get('budget_range') as string, // From hidden input
                message: formData.get('message') as string,
            });
            setStatus('success');
            setTimeout(() => onClose(), 2500);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={(e) => e.target === overlayRef.current && onClose()}
        >
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-white/10 rounded-sm shadow-2xl shadow-blood-red/10 custom-scrollbar">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-neutral-950/95 backdrop-blur-sm">
                    <div>
                        <h3 className="text-2xl font-bold font-oswald uppercase tracking-tight text-white">
                            Start Your <span className="text-blood-red">Project</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Tell us about your vision.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
                        aria-label="Close form"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Success State */}
                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
                        <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                        <h4 className="text-xl font-bold text-white font-oswald uppercase tracking-wide">
                            Message Sent!
                        </h4>
                        <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="p-6 space-y-5 pb-32">
                        {/* Name */}
                        <div>
                            <label htmlFor="from_name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-oswald">
                                Your Name <span className="text-blood-red">*</span>
                            </label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/50 transition-colors text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="from_email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-oswald">
                                Email Address <span className="text-blood-red">*</span>
                            </label>
                            <input
                                type="email"
                                id="from_email"
                                name="from_email"
                                required
                                placeholder="john@business.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/50 transition-colors text-sm"
                            />
                        </div>

                        {/* Business Name */}
                        <div>
                            <label htmlFor="business_name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-oswald">
                                Business Name <span className="text-blood-red">*</span>
                            </label>
                            <input
                                type="text"
                                id="business_name"
                                name="business_name"
                                required
                                placeholder="Your Business LLC"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/50 transition-colors text-sm"
                            />
                        </div>

                        {/* Custom Project Type Select */}
                        <CustomSelect
                            label="Project Type"
                            options={projectTypes}
                            value={projectType}
                            onChange={setProjectType}
                            required
                            placeholder="Select a package..."
                        />

                        {/* Custom Budget Range Select */}
                        <CustomSelect
                            label="Budget Range"
                            options={budgetRanges}
                            value={budgetRange}
                            onChange={setBudgetRange}
                            placeholder="Select (optional)..."
                        />

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-oswald">
                                Project Description <span className="text-blood-red">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder="Tell us about your project, goals, and timeline..."
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/50 transition-colors text-sm resize-none"
                            />
                        </div>

                        {/* Error */}
                        {status === 'error' && (
                            <div className="flex items-center gap-3 p-4 bg-red-950/50 border border-red-900/50 rounded-sm text-red-400 text-sm">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 px-6 bg-blood-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-900 hover:shadow-[0_0_30px_rgba(138,3,3,0.4)] border border-blood-red transition-all duration-300 font-oswald flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Submit Inquiry
                                </>
                            )}
                        </button>

                        <p className="text-center text-[10px] text-gray-600 uppercase tracking-wider">
                            We respond within 24 hours · No spam, ever.
                        </p>
                    </form>
                )}
            </div>
        </div>,
        document.body
    );
};

export default ProjectForm;


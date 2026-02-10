import { useState } from 'react';
import { Check, Clock, Shield, ChevronDown, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tiers = [
    {
        name: 'Starter Presence',
        price: '$299',
        range: '$299–$499',
        audience: 'Solo Operators',
        description: 'Perfect for barbers/trainers moving beyond Instagram.',
        features: [
            'Single-page website',
            'Mobile-first design',
            'Basic branding',
            'Booking integration',
            'Instagram link-in-bio',
        ],
        revisions: '1 round / 7 days',
        cta: 'Get Started',
        highlight: false,

        // Comparison Data
        pages: '1 Page',
        design: 'Basic Template',
        booking: 'Link Integration',
        analytics: false,
        staff: '1',
    },
    {
        name: 'Solo Launch',
        price: '$750',
        range: '$750–$1,000',
        audience: 'Professional Launch',
        description: 'For pros ready to automate bookings & reminders.',
        features: [
            '1–3 Page Website',
            'Custom Layout',
            'Automated Confirmations',
            'Payment Integration',
            '1 Employee Profile',
        ],
        revisions: '2 rounds / 14 days',
        cta: 'Launch Now',
        highlight: true,

        // Comparison Data
        pages: '1-3 Pages',
        design: 'Custom Layout',
        booking: 'Full System',
        analytics: false,
        staff: '1',
    },
    {
        name: 'Business Growth',
        price: '$1,500',
        range: '$1,500–$2,500',
        audience: 'Small Teams (2-5)',
        description: 'For shops needing roster management & intake forms.',
        features: [
            '4–6 Page Website',
            'Advanced Booking Logic',
            'Multiple Staff Profiles',
            'Client Intake Forms',
            'Migration Support',
        ],
        revisions: '3 rounds / 21 days',
        cta: 'Scale Up',
        highlight: false,

        // Comparison Data
        pages: '4-6 Pages',
        design: 'Custom Branding',
        booking: 'Advanced Logic',
        analytics: 'Basic',
        staff: '2-5',
    },
    {
        name: 'Scale & Systems',
        price: '$3,000+',
        range: 'Starts at $3,000',
        audience: 'Established Brands',
        description: 'Complex flows, role-based access & custom integrations.',
        features: [
            '6–10 Page Website',
            'Role-based Access',
            'Complex Booking Rules',
            'Analytics Dashboard',
            'Growth Architecture',
        ],
        revisions: '4 rounds / 30 days',
        cta: 'Contact Us',
        highlight: false,

        // Comparison Data
        pages: '6-10 Pages',
        design: 'Bespoke',
        booking: 'Complex Rules',
        analytics: 'Dashboard',
        staff: 'Unlimited',
    },
];

const supportPacks = [
    { name: 'Starter Support', price: '$150', hours: '2 hours', features: ['Updates & Changes', 'Valid for 12 months'] },
    { name: 'Growth Support', price: '$300', hours: '5 hours', features: ['Automation Tweaks', 'Priority Support'] },
    { name: 'Scale Support', price: '$600', hours: '12 hours', features: ['Employee Onboarding', 'Complex Flows'] },
];

const Pricing = () => {
    const [showCompare, setShowCompare] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-transparent relative overflow-hidden text-white backdrop-blur-sm">
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/40 via-transparent to-vampire-black/80 z-0 pointer-events-none" />

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blood-red/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-blood-red tracking-[0.2em] uppercase mb-3 font-oswald">Investment</h2>
                    <h3 className="text-4xl md:text-6xl font-bold font-oswald uppercase tracking-tighter mb-6">
                        Simple, Transparent <span className="text-white">Pricing</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Built <span className="text-blood-red font-bold font-oswald">FOUR</span> keeps. You own the code. You own the platform.
                    </p>
                </div>

                {/* Section 1: Setup Packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative group flex flex-col p-8 transition-all duration-300 rounded-sm border backdrop-blur-sm ${tier.highlight ? 'bg-neutral-900 border-blood-red/60 shadow-[0_0_40px_rgba(138,3,3,0.15)] scale-105 z-10' : 'bg-neutral-900/50 border-white/10 hover:border-blood-red/40 hover:-translate-y-1'}`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blood-red text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest font-oswald rounded-sm shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 text-center border-b border-white/5 pb-8">
                                <span className="text-xs font-bold text-blood-red uppercase tracking-widest font-oswald block mb-2">{tier.audience}</span>
                                <h4 className="text-2xl font-bold font-oswald uppercase tracking-wide text-white mb-2">{tier.name}</h4>
                                <p className="text-3xl font-bold text-gray-200 font-oswald tracking-tight">{tier.price}</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Starting Range: {tier.range}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-blood-red mt-1 shrink-0" />
                                        <span className="text-gray-400 text-sm font-light">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <div className="flex items-center justify-center gap-2 mb-6 text-[10px] text-gray-500 uppercase tracking-wider border p-2 border-white/5 rounded-sm bg-white/5">
                                    <Clock className="w-3 h-3" />
                                    {tier.revisions}
                                </div>

                                <button className={`w-full py-4 px-6 font-bold uppercase tracking-widest text-sm transition-all duration-300 border rounded-sm font-oswald ${tier.highlight ? 'bg-blood-red border-blood-red text-white hover:bg-red-900 hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]' : 'bg-transparent border-white/20 text-white hover:border-blood-red hover:bg-blood-red/10'}`}>
                                    {tier.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Toggle */}
                <div className="text-center mb-16">
                    <button
                        onClick={() => setShowCompare(!showCompare)}
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-blood-red/50 px-8 py-3 rounded-full transition-all duration-300 font-oswald uppercase tracking-widest text-sm font-bold backdrop-blur-sm"
                    >
                        {showCompare ? 'Hide Comparison' : 'Compare Packages'}
                        <div className={`transition-transform duration-300 ${showCompare ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </button>
                </div>

                {/* Comparison Table */}
                <AnimatePresence>
                    {showCompare && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden mb-32 max-w-7xl mx-auto"
                        >
                            <div className="overflow-x-auto pb-4 custom-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr>
                                            <th className="p-6 text-sm font-bold text-gray-500 uppercase tracking-wider font-oswald sticky left-0 bg-vampire-black z-20 border-b border-white/10">Feature</th>
                                            {tiers.map((tier, i) => (
                                                <th key={i} className={`p-6 text-sm font-bold uppercase tracking-wider font-oswald border-b border-white/10 ${tier.highlight ? 'text-blood-red bg-blood-red/5 border-t-2 border-t-blood-red' : 'text-white bg-vampire-black'}`}>
                                                    {tier.name}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-gray-400 text-sm">
                                        {[
                                            { label: 'Pages Included', key: 'pages' },
                                            { label: 'Staff Profiles', key: 'staff' },
                                            { label: 'Booking System', key: 'booking' },
                                            { label: 'Design Level', key: 'design' },
                                            { label: 'Analytics', key: 'analytics' },
                                        ].map((row, rowIdx) => (
                                            <tr key={rowIdx} className="hover:bg-white/5 transition-colors group">
                                                <td className="p-6 font-bold text-white sticky left-0 bg-vampire-black group-hover:bg-[#0a0a0a] transition-colors z-20 border-r border-white/5 shadow-[2px_0_5px_rgba(0,0,0,0.5)]">
                                                    {row.label}
                                                </td>
                                                {tiers.map((tier, i) => {
                                                    const val = tier[row.key as keyof typeof tier];
                                                    let content;

                                                    // Boolean handling
                                                    if (typeof val === 'boolean') {
                                                        content = val ? <Check className="w-5 h-5 text-blood-red mx-auto" /> : <Minus className="w-5 h-5 text-gray-800 mx-auto" />;
                                                    } else {
                                                        const strVal = String(val);
                                                        const lower = strVal.toLowerCase();

                                                        // HIGHLIGHT LOGIC
                                                        // Premium / High Value
                                                        if (['bespoke', 'dashboard', 'unlimited', 'complex', '6-10', '4-6', 'full system'].some(k => lower.includes(k))) {
                                                            content = <span className="text-blood-red font-bold font-oswald uppercase tracking-wide text-xs md:text-sm">{strVal}</span>;
                                                        }
                                                        // Basic / Low Value
                                                        else if (['basic', '1 page', 'link integration', '1'].some(k => lower === k || lower.startsWith(k))) {
                                                            content = <span className="text-gray-600 font-normal text-xs">{strVal}</span>;
                                                        }
                                                        // Standard
                                                        else {
                                                            content = <span className={`font-medium ${tier.highlight ? 'text-white' : 'text-gray-400'}`}>{strVal}</span>;
                                                        }
                                                    }

                                                    return (
                                                        <td key={i} className={`p-6 text-center ${tier.highlight ? 'bg-blood-red/5' : ''}`}>
                                                            {content}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                        {/* Revisions Row */}
                                        <tr className="hover:bg-white/5 transition-colors group">
                                            <td className="p-6 font-bold text-white sticky left-0 bg-vampire-black group-hover:bg-[#0a0a0a] transition-colors z-20 border-r border-white/5 shadow-[2px_0_5px_rgba(0,0,0,0.5)]">
                                                Revisions
                                            </td>
                                            {tiers.map((tier, i) => (
                                                <td key={i} className={`p-6 text-center text-xs ${tier.highlight ? 'bg-blood-red/5 text-white' : 'text-gray-500'}`}>
                                                    {tier.revisions}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Section 2: Support Credit Packs */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-20 border-t border-white/5 pt-20">
                    <div>
                        <h3 className="text-3xl font-bold font-oswald uppercase tracking-tight mb-4 text-white">
                            Post-Launch <span className="text-blood-red">Support</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                            We separate the build from the maintenance. Once your site is launched, use prepaid credits
                            for updates, tweaks, or staff changes. <span className="text-white font-medium">Credits never expire.</span>
                        </p>

                        <div className="bg-neutral-900/50 border border-white/10 p-6 rounded-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <Shield className="w-6 h-6 text-blood-red shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white uppercase font-oswald tracking-wide text-lg">Your Insurance Policy</h4>
                                    <p className="text-gray-400 text-sm mt-1">
                                        No monthly retainers. You only pay when you need us. Credits are tracked in 15-minute increments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {supportPacks.map((pack, idx) => (
                            <div key={idx} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-blood-red/40 transition-colors rounded-sm group">
                                <div>
                                    <h4 className="font-bold text-white font-oswald uppercase tracking-wide text-lg group-hover:text-blood-red transition-colors">{pack.name}</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                                        <span>{pack.hours}</span>
                                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                        <span>${parseInt(pack.price.replace('$', '')) / parseInt(pack.hours)}/hr value</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-2xl font-bold text-white font-oswald tracking-tight">{pack.price}</span>
                                    <button className="text-[10px] uppercase tracking-widest text-blood-red font-bold hover:text-white transition-colors mt-2">Add Pack</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Pricing;

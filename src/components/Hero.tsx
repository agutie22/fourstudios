import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">

            {/* Gradient Overlay for Readability - Reduced Opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/40 via-transparent to-vampire-black/80 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">

                {/* Top Tagline */}
                <div className="mb-12 animate-fade-in-up delay-100 mix-blend-screen">
                    <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-blood-red font-oswald border-b border-blood-red/30 pb-2 shadow-[0_0_15px_rgba(138,3,3,0.5)]">
                        Est. 2025 • High Performance Digital
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-8xl font-bold font-oswald uppercase tracking-wide text-white leading-tight mb-8 animate-fade-in-up delay-200">
                    Digital Assets.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 animate-pulse-slow">Full Ownership.</span>
                </h1>

                {/* Subcopy */}
                <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-16 tracking-wide leading-relaxed animate-fade-in-up delay-300 drop-shadow-md">
                    We build the systems that build your business. <br className="hidden md:block" />
                    No leasing. No retainers. Just pure equity.
                </p>

                {/* Minimal Actions */}
                <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in-up delay-400">
                    <button className="text-white hover:text-blood-red transition-colors duration-300 font-oswald uppercase tracking-[0.2em] text-sm border-b border-white/20 hover:border-blood-red pb-1 hover:shadow-[0_0_10px_rgba(138,3,3,0.5)]">
                        Start Project
                    </button>
                    <span className="text-gray-700 hidden md:inline">|</span>
                    <button className="text-gray-500 hover:text-white transition-colors duration-300 font-oswald uppercase tracking-[0.2em] text-sm pb-1">
                        View Work
                    </button>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-50 z-10">
                <ChevronDown className="w-6 h-6 text-white" />
            </div>
        </div>
    );
};

export default Hero;

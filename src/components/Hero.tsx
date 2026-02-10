import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">

            {/* Gradient Overlay for Readability - Reduced Opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/40 via-transparent to-vampire-black/80 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">

                {/* Main Headline — Minimal & Bold */}
                <h1 className="font-oswald uppercase tracking-wider leading-none mb-6 animate-fade-in-up delay-200 select-none">
                    <span className="text-6xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-blood-red via-red-600 to-red-900 drop-shadow-[0_0_40px_rgba(138,3,3,0.6)] animate-pulse-slow">
                        FOUR
                    </span>
                    <span className="text-5xl md:text-8xl font-bold text-white tracking-[0.15em] ml-2 md:ml-4">
                        YOU.
                    </span>
                </h1>

                {/* Single-Line Tagline */}
                <p className="text-sm md:text-base text-gray-500 font-light tracking-[0.3em] uppercase animate-fade-in-up delay-300">
                    We build what you own.
                </p>

                {/* Single CTA */}
                <div className="mt-16 animate-fade-in-up delay-400">
                    <button className="text-white/60 hover:text-blood-red transition-all duration-500 font-oswald uppercase tracking-[0.3em] text-xs border-b border-white/10 hover:border-blood-red/50 pb-2 hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]">
                        Get Started
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

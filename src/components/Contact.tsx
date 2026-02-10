import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden backdrop-blur-sm">

            {/* Radial Fade for Text Readability */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vampire-black/80 via-vampire-black to-vampire-black pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 font-oswald uppercase tracking-tighter leading-none animate-pulse-slow">
                    Ready to <span className="text-blood-red shadow-[0_0_20px_rgba(138,3,3,0.4)]">Upgrade?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                    Stop relying on rented land. Own your platform, own your client list, and own your future.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto px-8 py-4 bg-blood-red text-white font-bold rounded-sm hover:bg-red-900 border border-blood-red hover:shadow-[0_0_30px_rgba(138,3,3,0.5)] transition-all duration-300 flex items-center justify-center gap-3 font-oswald uppercase tracking-widest group">
                        <MessageSquare className="w-5 h-5 group-hover:animate-bounce" />
                        Start Your Project
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-sm hover:border-blood-red hover:bg-blood-red/5 transition-all duration-300 flex items-center justify-center gap-3 font-oswald uppercase tracking-widest group">
                        <Mail className="w-5 h-5 group-hover:animate-ping" />
                        Contact Sales
                    </button>
                </div>

                <p className="mt-8 text-sm text-red-900/60 font-medium font-oswald uppercase tracking-wider">
                    Limited spots available for this month.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-24 border-t border-white/5 pt-12 bg-black/80 backdrop-blur-sm relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm font-mono opacity-60">
                        © {new Date().getFullYear()} Four Studios. <span className="mx-2">|</span> Operated by 4me LLC.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-600 hover:text-blood-red transition-colors text-sm uppercase tracking-wider font-oswald">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-blood-red transition-colors text-sm uppercase tracking-wider font-oswald">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

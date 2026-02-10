import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Blade & Fade",
        category: "Barber Shop",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
        result: "+40% Bookings",
    },
    {
        title: "Iron Temple",
        category: "Fitness Studio",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        result: "Zero Admin Custom App",
    },
    {
        title: "Luxe & Co.",
        category: "Salon",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
        result: "Full Brand Rehaul",
    },
];

const Portfolio = () => {
    return (
        <section id="work" className="py-24 bg-transparent relative border-y border-white/5 backdrop-blur-sm">
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/40 via-transparent to-vampire-black/80 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-blood-red tracking-[0.2em] uppercase mb-3 font-oswald">Our Work</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white font-oswald uppercase tracking-tight">Results <span className="text-gray-600">Speak</span></h3>
                    </div>
                    <button className="text-white hover:text-blood-red transition-colors font-oswald uppercase tracking-widest text-sm flex items-center gap-2 group">
                        View Full Portfolio <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-blood-red text-xs font-bold uppercase tracking-widest font-oswald mb-2 block">{project.category}</span>
                                <h4 className="text-3xl font-bold text-white font-oswald uppercase tracking-tighter mb-2">{project.title}</h4>
                                <div className="inline-block px-3 py-1 border border-white/20 rounded-sm text-xs text-gray-300 uppercase tracking-wide">
                                    {project.result}
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-blood-red/50 transition-colors duration-300 pointer-events-none rounded-sm" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;

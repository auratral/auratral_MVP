import React from 'react';

const teamMembers = [
    {
        name: "Christopher Jeremy A W",
        role: "Founder, CEO",
        description: "The Big Brain",
        image: "christopher.png"
    },
    {
        name: "Likith Srinivas",
        role: "Founder, COO",
        description: "The Powerhouse",
        image: "likith.png"
    },
    {
        name: "Sivakannan Subramani",
        role: "Expert, Mentor",
        description: "The Driving Force",
        image: "SK.png"
    },
    {
        name: "Veda Kumar R",
        role: "Head of Design",
        description: "The Graffiti Studio",
        image: "veda.png"
    }
];

const Team = () => {
    return (
        <section className="py-24 relative overflow-hidden border-y border-glass-border">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary tracking-tight">
                        Meet the <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
                        The visionary minds powering the future of AI healthcare.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass-panel group overflow-hidden flex flex-col items-center p-8 text-center glass-panel-interactive">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-700/50 group-hover:border-blue-500/50 transition-colors shadow-xl">
                                <img
                                    src={`${import.meta.env.BASE_URL}${member.image}`}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                            <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-sm text-slate-400 italic font-medium">"{member.description}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

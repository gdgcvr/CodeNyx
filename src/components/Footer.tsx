import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-accent-secondary/10 pt-[100px] pb-[60px] bg-bg-base relative overflow-hidden">

            {/* Extremely subtle light at the very bottom */}
            <div className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-glow-hero opacity-30 blur-[150px] -z-10 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[60px] mb-[100px]">

                    {/* Left: Logo & Description */}
                    <div className="flex flex-col gap-[32px] max-w-[420px]">
                        <div className="flex items-center gap-[4px]">
                            <span className="font-display font-black text-[36px] text-accent-primary tracking-[-0.04em]">CodeNyx</span>
                            <span className="font-display font-black text-[40px] text-accent-secondary">.</span>
                        </div>
                        <p className="font-body text-[16px] text-accent-primary/40 leading-[1.8]">
                            A flagship architectural engineering sprint mapped out by GDG CVR On Campus at CVR College of Engineering.
                        </p>
                    </div>

                    {/* Right: Links Block */}
                    <div className="grid grid-cols-2 gap-x-[80px] gap-y-[24px]">
                        {['Highlights', 'About', 'Timeline', 'Register', 'FAQs', 'Status'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="font-mono text-[13px] font-bold uppercase tracking-[2px] text-accent-primary/50 hover:text-accent-primary transition-colors duration-300"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-[40px] border-t border-accent-secondary/10 gap-[24px]">
                    <p className="font-mono text-[11px] text-accent-primary/20 tracking-[2px] uppercase">
                        &copy; 2026 CodeNyx // V.1.0
                    </p>
                    <div className="flex items-center gap-[12px]">
                        <p className="font-mono text-[11px] text-accent-primary/20 tracking-[2px] uppercase">
                            Constructed By
                        </p>
                        <p className="font-mono text-[11px] text-accent-primary/60 font-bold tracking-[2px] uppercase bg-white/5 px-2 py-1 rounded-sm">
                            GDG CVR On Campus
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

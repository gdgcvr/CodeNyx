import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section id="register" className="section-padding bg-bg-base relative overflow-hidden">

            {/* Visual Anchor: Massive expanding portal lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] max-w-[2000px] max-h-[2000px] pointer-events-none -z-10 flex items-center justify-center opacity-40 mix-blend-screen">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute w-[30%] h-[30%] rounded-full border border-accent-secondary/30"
                />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
                    className="absolute w-[60%] h-[60%] rounded-full border border-accent-secondary/15"
                />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2.1, ease: "easeOut", delay: 0.2 }}
                    className="absolute w-[90%] h-[90%] rounded-full border border-accent-secondary/5"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] rounded-full bg-accent-secondary/10 blur-[100px]" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="card-minimal flex flex-col items-center justify-center text-center py-[140px] px-6 relative overflow-hidden bg-black shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-accent-primary/10"
                >
                    {/* Subtle Directional Light */}
                    <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.25] mix-blend-screen bg-glow-hero blur-[100px]" />

                    <div className="relative z-10 w-full flex flex-col items-center max-w-[700px]">
                        {/* Live counter placeholder */}
                        <div className="inline-flex items-center gap-[12px] bg-accent-secondary/10 border border-accent-secondary/20 rounded-full px-[16px] py-[8px] mb-[48px]">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-secondary animate-pulse" />
                            <span className="font-mono text-[12px] text-accent-primary font-bold tracking-[2px]">
                                SYSTEM: ACCEPTING ENTRIES
                            </span>
                        </div>

                        <h2 className="font-display font-black text-[clamp(48px,8vw,100px)] tracking-[-0.04em] mb-[40px] leading-[0.95] text-accent-primary">
                            Initialize Prototype.
                        </h2>

                        <p className="font-body text-[20px] text-accent-primary/50 leading-[1.8] mb-[64px]">
                            The screening portal is fully operational via un-secured connections. Form your cohort and commence registration protocols.
                        </p>

                        <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center items-center gap-[16px] mb-[64px]">
                            <button className="btn-primary w-full sm:w-auto h-[64px] px-[48px] text-[18px]">
                                Commence Registration
                            </button>
                        </div>

                        <p className="font-mono text-[13px] text-accent-primary/30 tracking-[3px] uppercase">
                            Deadline: March 14, 2026 // 23:59 IST
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;

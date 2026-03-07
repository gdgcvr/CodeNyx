import React from 'react';
import { motion } from 'framer-motion';

const Prizes = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <section id="rewards" className="section-padding bg-[#0A0A0B] border-y border-white/[0.03] relative overflow-hidden">

            {/* Background warm glow specifically for the grand prize */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-gold/10 to-transparent opacity-50 blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-[140px] max-w-[800px] text-center mx-auto"
                >
                    <p className="font-mono text-[13px] text-accent-gold font-bold uppercase tracking-[4px] mb-[32px]">
                        The Rewards
                    </p>
                    <h2 className="font-display font-black text-[clamp(44px,7vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.05]">
                        Exceptional Compensation.
                    </h2>
                </motion.div>

                {/* Hierarchical Grid layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-start"
                >
                    {/* Winner - Elevated (Centered but placed first in code for semantic, let's use md:order to place it center visually if needed, but flex/grid works fine ) */}

                    <motion.div variants={itemVariants} className="md:col-start-2 card-minimal min-h-[500px] flex flex-col justify-between py-[48px] px-[40px] relative border-accent-gold/20 shadow-[0_0_80px_rgba(212,175,55,0.06)] overflow-visible z-20 scale-100 md:scale-105 group">
                        {/* Visual Gold Crown/Star shape */}
                        <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center backdrop-blur-md">
                            <div className="w-[12px] h-[12px] rounded-full bg-accent-gold shadow-[0_0_20px_#D4AF37]" />
                        </div>

                        <div className="text-center mt-[16px]">
                            <span className="font-mono text-[14px] text-accent-gold font-bold tracking-[3px] uppercase">
                                Grand Prize
                            </span>
                            <h3 className="font-display font-black text-[48px] text-white tracking-[-0.03em] mt-[32px] mb-[24px]">
                                Winner
                            </h3>
                            <p className="font-body text-[18px] text-accent-primary/60 leading-[1.75]">
                                The absolute best integration of engineering, creativity, and execution.
                            </p>
                        </div>

                        <div className="mt-[64px] border-t border-accent-gold/10 pt-[32px] text-center">
                            <span className="font-mono text-[16px] text-accent-gold opacity-80 uppercase tracking-widest blur-[1px] group-hover:blur-none">
                                Evaluation Pending
                            </span>
                        </div>
                    </motion.div>

                    {/* Runner Up */}
                    <motion.div variants={itemVariants} className="md:col-start-1 md:row-start-1 card-minimal min-h-[440px] flex flex-col justify-between py-[40px] px-[32px] opacity-90 hover:opacity-100 mt-[20px] md:mt-[30px]">
                        <div className="text-left">
                            <span className="font-mono text-[12px] text-accent-secondary font-bold tracking-[2px] uppercase">
                                2nd Tier
                            </span>
                            <h3 className="font-display font-black text-[32px] text-accent-primary tracking-[-0.02em] mt-[24px] mb-[16px]">
                                Runner Up
                            </h3>
                            <p className="font-body text-[16px] text-accent-primary/50 leading-[1.75]">
                                Recognition for outstanding innovation and highly polished technical development.
                            </p>
                        </div>

                        <div className="mt-[48px] border-t border-white/[0.04] pt-[24px]">
                            <span className="font-mono text-[13px] text-accent-primary/30 blur-[0.5px]">
                                TBA
                            </span>
                        </div>
                    </motion.div>

                    {/* Special Awards */}
                    <motion.div variants={itemVariants} className="md:col-start-3 md:row-start-1 card-minimal min-h-[440px] flex flex-col justify-between py-[40px] px-[32px] opacity-90 hover:opacity-100 mt-[20px] md:mt-[30px]">
                        <div className="text-left">
                            <span className="font-mono text-[12px] text-accent-primary/50 font-bold tracking-[2px] uppercase">
                                Categories
                            </span>
                            <h3 className="font-display font-black text-[32px] text-accent-primary tracking-[-0.02em] mt-[24px] mb-[16px]">
                                Track Prizes
                            </h3>
                            <p className="font-body text-[16px] text-accent-primary/50 leading-[1.75]">
                                Specific awards allocated for exceptional architectural design and focused UX.
                            </p>
                        </div>

                        <div className="mt-[48px] border-t border-white/[0.04] pt-[24px]">
                            <span className="font-mono text-[13px] text-accent-primary/30 blur-[0.5px]">
                                TBA
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Prizes;

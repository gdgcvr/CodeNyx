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

    const prizes = [
        {
            ps: "Problem Statement 01",
            title: "Winner",
            desc: "Awarded to the team that delivers the most impactful and technically sound solution for Problem Statement 01."
        },
        {
            ps: "Problem Statement 02",
            title: "Winner",
            desc: "Recognizing the team with the most innovative and well-executed solution for Problem Statement 02."
        },
        {
            ps: "Problem Statement 03",
            title: "Winner",
            desc: "Presented to the team that builds the best overall implementation for Problem Statement 03."
        }
    ];

    return (
        <section id="rewards" className="section-padding bg-[#0A0A0B] border-y border-white/[0.03] relative overflow-hidden">

            {/* Subtle glow */}
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
                        Winners for Each Problem Statement
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
                >

                    {prizes.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="card-minimal min-h-[460px] flex flex-col justify-between py-[48px] px-[36px] border-accent-gold/20 hover:border-accent-gold/40 transition-all"
                        >
                            <div>

                                <span className="font-mono text-[13px] text-accent-secondary font-bold tracking-[2px] uppercase">
                                    {item.ps}
                                </span>

                                <h3 className="font-display font-black text-[36px] text-accent-primary tracking-[-0.02em] mt-[24px] mb-[16px]">
                                    {item.title}
                                </h3>

                                <p className="font-body text-[16px] text-accent-primary/50 leading-[1.75]">
                                    {item.desc}
                                </p>

                            </div>

                            <div className="mt-[48px] border-t border-white/[0.04] pt-[24px]">
                                <span className="font-mono text-[13px] text-accent-primary/30">
                                    Prize Details: TBA
                                </span>
                            </div>

                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
};

export default Prizes;
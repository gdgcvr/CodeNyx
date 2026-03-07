import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ["PRE-EVENT", "DAY ONE", "DAY TWO"];

const timelineData: Record<string, { time: string, title: string, subtitle?: string, duration?: string }[]> = {
    "PRE-EVENT": [
        { time: "MARCH 9", title: "Registrations Open", subtitle: "Portal unlocks. Assemble your cohort." },
        { time: "MARCH 15", title: "DSA Screening Round", subtitle: "Algorithmic filtering phase.", duration: "1.5H" },
        { time: "MARCH 16", title: "Shortlisting / PPT Portal", subtitle: "Eligible teams present abstract wireframes." },
        { time: "MARCH 21", title: "Payment Deadline", subtitle: "Operational fee processing." },
        { time: "MARCH 24", title: "Final Cohort Selected", subtitle: "Clearance codes dispatched." },
    ],
    "DAY ONE": [
        { time: "10:00 AM", title: "Opening Ceremony", subtitle: "Strategic briefing and venue rules." },
        { time: "10:00 AM", title: "Problem Discussion", duration: "3.0H", subtitle: "Architecture planning and logic mapping." },
        { time: "1:00 PM", title: "Lunch Break", duration: "1.0H" },
        { time: "2:00 PM", title: "Phase I: Core Logic Implementation", duration: "3.5H", subtitle: "Backend infrastructure and primary logic mapping." },
        { time: "6:00 PM", title: "Phase II: Scalability Testing", duration: "2.5H", subtitle: "Stress testing and mentor evaluations." },
        { time: "8:30 PM", title: "Dinner", duration: "1.5H" },
        { time: "10:00 PM", title: "Overnight Intensive Coding", duration: "3.0H", subtitle: "Uninterrupted dev cycles. Mentors on standby." },
    ],
    "DAY TWO": [
        { time: "4:00 AM", title: "Dawn Sprint", duration: "4.0H", subtitle: "Final feature integration. Pushing commits." },
        { time: "8:00 AM", title: "Breakfast", duration: "1.5H" },
        { time: "9:30 AM", title: "Phase III: UI/UX & Polish", duration: "1.5H", subtitle: "Frontend rendering and presentation tuning." },
        { time: "11:00 AM", title: "Evaluation Matrix", duration: "2.0H", subtitle: "Judges review physical prototypes on floor." },
        { time: "2:00 PM", title: "Award Dissemination + Closing", duration: "2.0H", subtitle: "Final verdicts. Grand prize allocation." },
    ]
};

const Timeline = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="timeline" className="section-padding bg-bg-base relative">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-[100px]"
                >
                    <div>
                        <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[24px]">
                            Master Schedule
                        </p>
                        <h2 className="font-display font-black text-[clamp(44px,7vw,80px)] text-accent-primary tracking-[-0.04em] leading-[1.0] max-w-[500px]">
                            The Itinerary.
                        </h2>
                    </div>

                    {/* Clean, pill-less tab switcher integrated into the layout */}
                    <div className="flex gap-8 border-b border-white/10 pb-4 w-full md:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className="relative focus:outline-none group pb-[20px] -mb-[21px]"
                            >
                                <span className={`font-mono text-[14px] font-bold tracking-[2px] transition-colors duration-300 ${activeTab === tab ? 'text-accent-primary' : 'text-accent-primary/40 group-hover:text-accent-primary/80'}`}>
                                    {tab}
                                </span>
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="tabUnderline"
                                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-accent-secondary"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Pure Typographical Grid Layout */}
                <div className="relative border-t border-white/[0.04]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {timelineData[activeTab].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group flex flex-col md:flex-row items-start py-[40px] md:py-[56px] border-b border-white/[0.04] hover:bg-white/[0.015] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
                                >

                                    {/* Left Column: Stark Time */}
                                    <div className="w-full md:w-[25%] mb-4 md:mb-0 shrink-0">
                                        <span className="font-mono text-[16px] xl:text-[18px] font-bold text-accent-secondary tracking-[2px] inline-block mb-2">
                                            {item.time}
                                        </span>
                                        {item.duration && (
                                            <span className="block font-mono text-[12px] text-accent-primary/30 uppercase tracking-[3px]">
                                                RUN: {item.duration}
                                            </span>
                                        )}
                                    </div>

                                    {/* Middle Column: Massive Title */}
                                    <div className="w-full md:w-[45%] mb-4 md:mb-0 shrink-0 pr-8">
                                        <h3 className="font-display font-black text-[28px] md:text-[36px] lg:text-[44px] text-white opacity-80 group-hover:opacity-100 tracking-[-0.03em] leading-[1.1] transition-opacity duration-300">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Right Column: Subtitle / Description */}
                                    <div className="w-full md:w-[30%] flex items-start md:justify-end">
                                        {item.subtitle && (
                                            <p className="font-body text-[16px] lg:text-[18px] text-accent-primary/40 leading-[1.6] md:text-right w-full">
                                                {item.subtitle}
                                            </p>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["PRE-EVENT", "DAY ONE", "DAY TWO"];

const timelineData: Record<
  string,
  {
    time: string;
    title: string;
    subtitle?: string;
    duration?: string;
    dateNote?: string;
  }[]
> = {
  "PRE-EVENT": [
    {
      time: "MARCH 10 - 20 (7 PM IST)",
      title: "Registrations Open",
      subtitle: "Portal unlocks. Apply now.",
    },
    {
      time: "MARCH 20 (8 PM - 10 PM IST)",
      title: "DSA Screening Round",
      subtitle:
        "Algorithmic filtering phase. (Coding rounds differ for CVR and BVRIT. Exact dates will be informed in their college)",
      duration: "2H",
      dateNote: "CVR: 12TH",
    },
    {
      time: "MARCH 21 - 26",
      title: "Idea Presentation",
      subtitle: "Eligible Members present abstract wireframes.",
    },
    {
      time: "MARCH 22 - 27",
      title: "Payment Deadline",
      subtitle: "Operational fee processing.",
    },
    {
      time: "MARCH 30 - 31",
      title: "Final Hackathon",
      subtitle: "The ultimate 36-hour offline building sprint.",
    },
  ],
  "DAY ONE": [
    {
      time: "09:30 AM - 11:00 AM",
      title: "Opening Ceremony",
      duration: "1.5H",
      subtitle: "Welcome address and inaugural proceedings.",
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "NGO Introduction",
      duration: "1H",
      subtitle: "Problem Statements 1, 2 & 3 will be explained by the NGO representatives.",
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Ideation & Team Planning",
      duration: "1H",
      subtitle: "Teams discuss problem statements. Labs will be allocated during this period.",
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Lunch Break",
      duration: "1H",
      subtitle: "Lunch served to all participants.",
    },
    {
      time: "2:00 PM - 5:30 PM",
      title: "Development Session I",
      duration: "3.5H",
      subtitle: "Core project development begins.",
    },
    {
      time: "5:30 PM - 6:30 PM",
      title: "Refreshment Break",
      duration: "1H",
      subtitle: "Short break with snacks and networking.",
    },
    {
      time: "6:30 PM - 8:30 PM",
      title: "Development Session II + Mentor Evaluation",
      duration: "2H",
      subtitle: "Teams continue implementation alongside mentor consultations.",
    },
    {
      time: "8:30 PM - 10:00 PM",
      title: "Dinner Break",
      duration: "1.5H",
      subtitle: "Dinner provided to all participants.",
    },
    {
      time: "10:00 PM - 12:00 AM",
      title: "Overnight Coding Session",
      duration: "2H",
      subtitle: "Extended development session into the night.",
    },
    {
      time: "12:00 AM - 02:00 AM",
      title: "Community Activities",
      duration: "2H",
      subtitle: "Optional networking and icebreaker activities.",
    },
  ],

  "DAY TWO": [
    {
      time: "02:00 AM - 07:30 AM",
      title: "Continued Development",
      duration: "5.5H",
      subtitle: "Teams finalize their projects through the early morning.",
    },
    {
      time: "07:30 AM - 08:30 AM",
      title: "Breakfast Break",
      duration: "1H",
      subtitle: "Breakfast served to all participants.",
    },
    {
      time: "08:30 AM - 12:30 PM",
      title: "Final Development Window + Evaluation",
      duration: "4H",
      subtitle: "Last window for coding and finishing touches. Jury may evaluate at any point during this period.",
    },
    {
      time: "12:30 PM - 1:15 PM",
      title: "Lunch Break",
      duration: "45M",
      subtitle: "Lunch provided to all participants.",
    },
    {
      time: "1:15 PM - 2:30 PM",
      title: "PPT Presentations",
      duration: "1.25H",
      subtitle: "Eligible teams present their solutions to the jury.",
    },
    {
      time: "2:30 PM - 3:30 PM",
      title: "Final Jury Evaluation",
      duration: "1H",
      subtitle: "Jury deliberates and concludes winners based on all scores obtained throughout the hackathon.",
    },
    {
      time: "4:00 PM - 5:30 PM",
      title: "Prize Distribution & Closing Ceremony",
      duration: "1.5H",
      subtitle: "Awards, certificates, and prizes will be distributed.",
    },
  ],
};

const Timeline = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section
      id="timeline"
      className="section-padding bg-bg-base relative"
      aria-labelledby="timeline-title"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-[100px]"
        >
          <div>
            <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[24px]">
              Master Schedule
            </p>
            <h2
              id="timeline-title"
              className="font-display font-black text-[clamp(44px,7vw,80px)] text-accent-primary tracking-[-0.04em] leading-[1.0] max-w-[500px]"
            >
              The Itinerary.
            </h2>
          </div>

          {/* Clean, pill-less tab switcher integrated into the layout */}
          <div
            className="flex gap-8 border-b border-white/10 pb-4 w-full md:w-auto"
            role="tablist"
            aria-label="Event Timeline Tabs"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab.replace(/\s+/g, "-").toLowerCase()}`}
                id={`tab-${tab.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className="relative focus:outline-none group pb-[20px] -mb-[21px]"
              >
                <span
                  className={`font-mono text-[14px] font-bold tracking-[2px] transition-colors duration-300 ${activeTab === tab ? "text-accent-primary" : "text-accent-primary/40 group-hover:text-accent-primary/80"}`}
                >
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
              id={`panel-${activeTab.replace(/\s+/g, "-").toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {timelineData[activeTab].map((item, idx) => (
                <article
                  key={idx}
                  className="group flex flex-col md:flex-row items-start py-[40px] md:py-[56px] border-b border-white/[0.04] hover:bg-white/[0.015] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
                >
                  {/* Left Column: Stark Time */}
                  <div className="w-full md:w-[25%] mb-4 md:mb-0 shrink-0">
                    <span className="font-mono text-[16px] xl:text-[18px] font-bold text-accent-secondary tracking-[2px] inline-block mb-2">
                      {item.time}
                    </span>
                    {item.dateNote && (
                      <span className="block font-mono text-[12px] text-red-500/90 font-bold tracking-[1px] mb-2">
                        ( {item.dateNote} )
                      </span>
                    )}
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
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

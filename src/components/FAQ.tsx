import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What exactly is CodeNyx?",
        answer: "CodeNyx is a flagship 36-hour offline hackathon architected by GDG CVR On Campus. It begins with a rigorous DSA screening to distill the applicant pool, followed by an intensive operational phase where elite teams construct robust physical and digital prototypes."
    },
    {
        question: "Who is authorized to enter?",
        answer: "Enrollment is unrestricted for active university undergraduates who possess the technical proficiency to clear the preliminary algorithmic screening. You must form a functional cohort of 3-4 developers prior to entry."
    },
    {
        question: "What is the financial requirement?",
        answer: "The initial DSA screening protocol is entirely free of charge. Cohorts that successfully clear the primary filter will be instructed to provide a nominal operational fee to secure their physical deployment zone."
    },
    {
        question: "Are individual deployments permitted?",
        answer: "Negative. The hackathon is strictly a collaborative exercise mimicking real-world engineering environments. Cohort assembly is mandatory before initializing registration."
    }
];

const FAQItem = ({ faq, isOpen, toggleOpen, index }: { faq: any, isOpen: boolean, toggleOpen: () => void, index: number }) => {
    return (
        <div className="relative border-b border-accent-secondary/10 py-[40px] group overflow-hidden">

            {/* Structural Accent Line */}
            <div
                className={`absolute top-0 left-[-4px] w-[3px] h-[100%] bg-accent-secondary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            />

            <button
                className="w-full flex items-center justify-between text-left focus:outline-none pl-[24px]"
                onClick={toggleOpen}
            >
                <span className={`font-body text-[20px] font-medium transition-colors duration-300 pr-8 tracking-tight ${isOpen ? 'text-accent-primary' : 'text-accent-primary/60 group-hover:text-accent-primary/90'}`}>
                    {faq.question}
                </span>
                <ChevronDown
                    className={`w-[24px] h-[24px] shrink-0 transition-transform duration-500 ease-[0.16,1,0.3,1] ${isOpen ? 'rotate-180 text-accent-secondary' : 'text-accent-primary/20 group-hover:text-accent-primary/50'}`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-[24px]"
                    >
                        <p className="font-body text-[18px] text-[rgba(255,255,255,0.5)] leading-[1.8] pt-[32px] max-w-[85%]">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Massive subtle background index number */}
            <span className="absolute right-[80px] top-[50%] -translate-y-1/2 font-display text-[160px] font-black text-white/[0.015] pointer-events-none select-none">
                0{index + 1}
            </span>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="section-padding bg-bg-base relative pt-[160px] pb-[160px]">
            <div className="max-w-[1000px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-[100px] lg:mb-[140px]"
                >
                    <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[32px]">
                        Intelligence
                    </p>
                    <h2 className="font-display font-black text-[clamp(44px,7vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.05]">
                        Frequently Asked Queries.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="flex flex-col border-t border-accent-secondary/10 relative"
                >
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            index={idx}
                            faq={faq}
                            isOpen={openIndex === idx}
                            toggleOpen={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

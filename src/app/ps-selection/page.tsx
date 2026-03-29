"use client";

import React from "react";
import { motion } from "framer-motion";

const PsSelectionPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#0E0E0E] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center shadow-2xl"
      >
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="w-20 h-20 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-accent-secondary/20 shadow-[0_0_30px_rgba(var(--accent-secondary),0.2)] rotate-3"
        >
          <svg className="w-10 h-10 text-accent-secondary -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display font-black text-[clamp(28px,5vw,40px)] text-white mb-4 tracking-[-0.03em] leading-tight"
        >
          Problem Statement Selection
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-body text-white/50 text-[16px] md:text-[18px] mb-10 leading-[1.7] max-w-xl mx-auto"
        >
          You are being redirected to the official form. 
          <br className="hidden md:block"/> 
          <span className="text-white/90 font-medium px-4 py-2 mt-4 inline-block bg-white/5 border border-white/10 rounded-lg">
            <span className="text-accent-secondary font-bold mr-2">Important:</span> 
            You need to prioritize 3 Problem Statements with 3 priority orders.
          </span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://forms.gle/AeBHPGKqKNXEiCpP6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-body font-bold text-black bg-white rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white to-gray-200"></span>
            <span className="relative flex items-center gap-2 uppercase tracking-[1px] text-[14px]">
              Proceed to Form
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          <a
             href="/"
             className="px-8 py-4 font-body font-bold text-[14px] uppercase tracking-[1px] text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all w-full sm:w-auto"
          >
            Cancel & Return
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default PsSelectionPage;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Hash, Type, AlignLeft, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import { submitQuery } from "./actions";
import Link from "next/link";

export default function RaiseQueryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitQuery(formData);

    setIsSubmitting(false);

    if (result.error) {
      setStatus({ type: "error", message: result.error });
    } else if (result.success) {
      setStatus({ type: "success", message: "Your query has been submitted successfully! The technical team will get back to you soon." });
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <div className="min-h-screen pt-[120px] pb-[80px] px-6 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-accent-primary/60 hover:text-accent-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[13px] uppercase tracking-widest">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[48px] md:text-[64px] font-black tracking-tighter leading-[1.1] mb-6">
            RAISE A <span className="text-white">QUERY</span>
            <span className="text-accent-secondary">.</span>
          </h1>
          <p className="font-body text-[16px] text-accent-primary/60 max-w-[500px] mb-12 leading-relaxed">
            Have a technical issue or a general question? Submit your query below and our team will assist you as soon as possible.
          </p>

          <div className="card-minimal bg-ui-surface/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Participant Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent-primary/40">
                    <User size={12} /> Participant Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    maxLength={50}
                    placeholder="Enter your name"
                    className="w-full bg-black/40 border border-ui-border rounded-md px-4 py-3 font-body text-[15px] text-accent-primary focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-accent-primary/20"
                  />
                </div>

                {/* Team ID */}
                <div className="space-y-2">
                  <label htmlFor="teamId" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent-primary/40">
                    <Hash size={12} /> Team ID (1-50)
                  </label>
                  <input
                    required
                    type="number"
                    id="teamId"
                    name="teamId"
                    min={1}
                    max={50}
                    placeholder="e.g. 24"
                    className="w-full bg-black/40 border border-ui-border rounded-md px-4 py-3 font-body text-[15px] text-accent-primary focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-accent-primary/20"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <label htmlFor="title" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent-primary/40">
                  <Type size={12} /> Query Title
                </label>
                <input
                  required
                  type="text"
                  id="title"
                  name="title"
                  maxLength={50}
                  placeholder="Summarize your issue"
                  className="w-full bg-black/40 border border-ui-border rounded-md px-4 py-3 font-body text-[15px] text-accent-primary focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-accent-primary/20"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent-primary/40">
                  <AlignLeft size={12} /> Full Description
                </label>
                <textarea
                  required
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Provide more details about your query..."
                  className="w-full bg-black/40 border border-ui-border rounded-md px-4 py-3 font-body text-[15px] text-accent-primary focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-accent-primary/20 resize-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {status && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-md ${
                      status.type === "success" 
                        ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                        : "bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary"
                    }`}
                  >
                    {status.type === "success" ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
                    <p className="text-[14px] leading-relaxed">{status.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full btn-primary relative group disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden py-4"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                    />
                  ) : (
                    <>
                      Submit Query
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white" 
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { problems } from "@/data/problems";
import { MoveRight, Zap, Target, BookOpen, BarChart3, Users2 } from "lucide-react";

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-bg-base pt-[120px] pb-[180px]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <h1 className="font-display text-[56px] lg:text-[84px] font-black leading-[0.9] tracking-tighter mb-8 uppercase italic">
            Problem <span className="text-accent-secondary">Statements</span>
          </h1>
          <p className="font-body text-[18px] text-accent-primary/60 leading-relaxed max-w-2xl">
            Choose a challenge that resonates with you. Build solutions that bridge execution gaps, improve learning equity, or support mental wellbeing.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="flex flex-col gap-32">
          {problems.map((problem, index) => (
            <div key={problem.id} className="group relative">
              {/* Problem Number & Track */}
              <div className="flex flex-wrap items-baseline gap-6 mb-12">
                <span className="font-mono text-[14px] text-accent-secondary font-bold tracking-[4px] uppercase">
                  Problem {index + 1}
                </span>
                <span className="font-display text-[14px] text-accent-primary/40 uppercase tracking-[2px]">
                  {problem.track}
                </span>
              </div>

              <div className="grid lg:grid-cols-[1fr,400px] gap-16 lg:gap-24">
                {/* Left Column: Problem Details */}
                <div className="space-y-16">
                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="font-display text-[42px] lg:text-[64px] font-black leading-tight uppercase mb-4">
                      {problem.title}
                    </h2>
                    <p className="font-display text-[22px] lg:text-[28px] text-accent-secondary/80 font-medium italic">
                      {problem.subtitle}
                    </p>
                  </div>

                  {/* Challenge Question */}
                  <div className="card-minimal p-8 lg:p-12 border-l-4 border-l-accent-secondary bg-glow-card">
                    <div className="flex gap-6">
                      <Zap className="text-accent-secondary shrink-0 mt-1" size={32} />
                      <div>
                        <h3 className="font-mono text-[12px] text-accent-primary/50 uppercase tracking-[3px] mb-4">The Challenge</h3>
                        <p className="font-display text-[24px] lg:text-[32px] font-bold leading-snug text-accent-primary">
                          "{problem.challengeQuestion}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Context & Problems Section */}
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <BookOpen className="text-accent-secondary" size={20} />
                        <h3 className="font-mono text-[14px] text-accent-primary uppercase tracking-[2px]">Context</h3>
                      </div>
                      <p className="font-body text-[16px] text-accent-primary/70 leading-relaxed italic border-l border-white/10 pl-6">
                        {problem.context}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Target className="text-accent-secondary" size={20} />
                        <h3 className="font-mono text-[14px] text-accent-primary uppercase tracking-[2px]">Core Issues</h3>
                      </div>
                      <ul className="space-y-4">
                        {problem.problems.map((p, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="font-mono text-[12px] text-accent-secondary mt-1">0{i+1}</span>
                            <div>
                              <p className="font-bold text-accent-primary mb-1 uppercase tracking-tight">{p.title}</p>
                              <p className="text-[14px] text-accent-primary/60">{p.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column: Stats & Outcomes */}
                <div className="space-y-12">
                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-3 mb-2">
                       <BarChart3 className="text-accent-secondary" size={20} />
                       <h3 className="font-mono text-[14px] text-accent-primary uppercase tracking-[2px]">Impact Metrics</h3>
                    </div>
                    {problem.stats.map((stat, i) => (
                      <div key={i} className="card-minimal !p-6 border-white/[0.04] bg-ui-surface">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-display text-[32px] font-black text-accent-primary italic">{stat.value}</span>
                          <span className="font-mono text-[10px] text-accent-secondary uppercase tracking-[2px]">STAT 0{i+1}</span>
                        </div>
                        <p className="text-[13px] text-accent-primary/50 leading-tight uppercase font-medium tracking-wide">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Expected Outcomes */}
                  <div className="card-minimal bg-accent-secondary/5 border-accent-secondary/10 !p-8">
                     <div className="flex items-center gap-3 mb-8">
                        <Users2 className="text-accent-secondary" size={20} />
                        <h3 className="font-mono text-[14px] text-accent-primary uppercase tracking-[2px]">Expected Outcomes</h3>
                     </div>
                     <ul className="space-y-6">
                       {problem.expectedOutcomes.map((outcome, i) => (
                         <li key={i} className="flex gap-4 group/item">
                           <div className="h-1.5 w-1.5 rounded-full bg-accent-secondary mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                           <p className="text-[15px] text-accent-primary/80 leading-relaxed font-medium">
                             {outcome}
                           </p>
                         </li>
                       ))}
                     </ul>
                  </div>
                </div>
              </div>

              {/* Transition Divider */}
              {index !== problems.length - 1 && (
                <div className="h-px w-full bg-white/[0.04] mt-32 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-bg-base">
                    <MoveRight className="text-accent-secondary/20" size={32} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

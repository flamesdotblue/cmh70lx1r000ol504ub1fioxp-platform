import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-cyan-300" />
            Industry-leading rewards. AI-matched studies.
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Share your expertise. Get rewarded at the highest rates.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Join our multi-audience survey panel for Consumers, B2B decision-makers, and Healthcare professionals. We use AI to match you with studies that value your unique perspective.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#register" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-neutral-900 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              <Rocket size={18} />
              Join the Panel
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-white/70">
              <Shield size={16} className="text-cyan-300" />
              Verified profiles. Private & secure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

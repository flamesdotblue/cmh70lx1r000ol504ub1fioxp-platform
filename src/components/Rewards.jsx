import React from 'react';
import { Gift, Star } from 'lucide-react';

export default function Rewards() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20" id="rewards">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-3 py-1 text-xs text-yellow-200">
              <Star size={14} /> Highest in industry
            </div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Rewards that respect your time</h2>
            <p className="mt-2 text-white/80">
              Earn more for high-impact insights. Instant e-gift cards or bank transfer options where available. Bonus tiers for niche expertise and longitudinal studies.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <Gift className="mx-auto text-cyan-300" size={28} />
            <p className="mt-3 text-sm text-white/70">Typical ranges</p>
            <div className="mt-1 text-2xl font-semibold">$5–$25 surveys</div>
            <div className="text-sm text-white/70">$50–$300 interviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}

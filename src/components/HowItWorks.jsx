import React from 'react';
import { Users, Brain, CheckCircle, Shield } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Register your profile',
    desc: 'Tell us who you are: Consumer, B2B, or Healthcare. Add role, industry, and interests to unlock relevant studies.'
  },
  {
    icon: Brain,
    title: 'AI-powered matching',
    desc: 'Our AI analyzes your profile, verifies signals, and pairs you with high-fit qualitative and quantitative studies.'
  },
  {
    icon: CheckCircle,
    title: 'Share insights & earn',
    desc: 'Complete surveys, interviews, or diary tasks. Transparent timelines and instant reward tracking.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20" id="how-it-works">
      <div className="mb-10 flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-cyan-500" />
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 inline-flex rounded-xl bg-cyan-500/15 p-3 text-cyan-300">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
        <Shield size={16} className="text-cyan-300" />
        We never sell personal data. Participation is consent-based and revocable anytime.
      </div>
    </section>
  );
}

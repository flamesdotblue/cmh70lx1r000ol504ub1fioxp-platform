import React from 'react';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import HowItWorks from './components/HowItWorks';
import Rewards from './components/Rewards';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="relative z-10">
        <HowItWorks />
        <Rewards />
        <RegistrationForm />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} InsightBeam Panel. All rights reserved.
      </footer>
    </div>
  );
}

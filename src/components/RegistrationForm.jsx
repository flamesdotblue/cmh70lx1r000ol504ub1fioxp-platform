import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    userType: 'Consumer',
    role: '',
    industry: '',
    interests: ''
  });
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!agree) return alert('Please agree to the privacy policy.');
    if (!form.name || !form.email) return alert('Please fill in your name and email.');

    try {
      setStatus('submitting');
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      setForm({ name: '', email: '', userType: 'Consumer', role: '', industry: '', interests: '' });
      setAgree(false);
    } catch (e) {
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20" id="register">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Join the InsightBeam Panel</h2>
        <p className="mt-2 text-sm text-white/70">Open to Consumers, B2B decision-makers, and Healthcare professionals.</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80" htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-2 outline-none ring-cyan-400/0 focus:ring-2"
              placeholder="Alex Johnson"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-2 outline-none ring-cyan-400/0 focus:ring-2"
              placeholder="alex@example.com"
              type="email"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80" htmlFor="userType">User type</label>
            <select
              id="userType"
              name="userType"
              value={form.userType}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-2 outline-none ring-cyan-400/0 focus:ring-2"
            >
              <option>Consumer</option>
              <option>B2B</option>
              <option>Healthcare</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80" htmlFor="role">Role / title</label>
            <input
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-2 outline-none ring-cyan-400/0 focus:ring-2"
              placeholder={form.userType === 'Consumer' ? 'e.g., Student, Parent' : form.userType === 'B2B' ? 'e.g., Product Manager' : 'e.g., RN, Oncologist'}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80" htmlFor="industry">Industry / domain</label>
            <input
              id="industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-2 outline-none ring-cyan-400/0 focus:ring-2"
              placeholder={form.userType === 'Consumer' ? 'e.g., Gaming, Travel' : form.userType === 'B2B' ? 'e.g., SaaS, Manufacturing' : 'e.g., Cardiology, Pharmacy'}
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/80" htmlFor="interests">Research interests</label>
          <textarea
            id="interests"
            name="interests"
            value={form.interests}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-2 outline-none ring-cyan-400/0 focus:ring-2"
            placeholder="Topics you care about, products you use, patient populations, budget authority, etc."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-neutral-900/60 text-cyan-500 focus:ring-cyan-400"
          />
          <label htmlFor="agree" className="text-sm text-white/70">
            I agree to the privacy policy and to be contacted about relevant studies.
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-neutral-900 transition hover:bg-cyan-400 disabled:opacity-60"
          >
            {status === 'submitting' ? 'Submitting…' : 'Create my panel profile'}
          </button>
          {status === 'success' && (
            <div className="inline-flex items-center gap-2 text-sm text-emerald-300">
              <CheckCircle size={16} /> Registration received. We\'ll email your first opportunities soon!
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

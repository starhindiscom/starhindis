'use client';

import Link from 'next/link';
import { Star, Play, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_rgba(168,85,247,0.12)_0%,_transparent_55%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(245,158,11,0.08)_0%,_transparent_50%)] -z-10" />

      <div className="container-section relative pt-20 pb-24 md:pt-32 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-600 border border-brand-100 mb-6 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span></span>
          🚀 Now Live: 23 Channels · 15+ Languages
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl text-gray-900 tracking-tight leading-tight mb-6 animate-slide-up">
          Where Every Indian Becomes <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-gold-500 to-pink-600">
            a Digital Star.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-slide-up text-balance" style={{ animationDelay: '100ms' }}>
          India's largest multilingual digital media &amp; monetization ecosystem. Academy, Creator Network,
          Brand Portal, Sponsorships &amp; Revenue Systems — sab ek jagah. Crores earn karo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <Link
            href="/plans"
            className="px-8 py-4 rounded-full bg-brand-600 text-white text-lg font-semibold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-1 hover:scale-[1.02] flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/channels"
            className="px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-900 text-lg font-semibold shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-1"
          >
            Explore 23 Channels
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start justify-center text-left">
          <Stat value="23+" label="Channels" />
          <Stat value="16+" label="Languages" />
          <Stat value="15+" label="Course Categories" />
          <Stat value="∞" label="Earning Potential" />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-60 grayscale animate-slide-up" style={{ animationDelay: '300ms' }}>
          {SOCIAL_BADGES.map((s) => (
            <span key={s.label} className="text-sm">
              {s.icon} {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOCIAL_BADGES = [
  { label: 'Instagram', icon: '📸' },
  { label: 'Facebook', icon: '👍' },
  { label: 'YouTube', icon: '▶️' },
  { label: 'WhatsApp', icon: '💬' },
  { label: 'LinkedIn', icon: '💼' },
  { label: 'Threads', icon: '🧵' },
];

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="animate-count-up">
      <div className="text-3xl md:text-4xl font-bold text-brand-600 font-display">{value}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {action && <div className="mt-8 flex justify-center">{action}</div>}
    </div>
  );
}

export function FeatureChip({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
      {icon} {label}
    </span>
  );
}

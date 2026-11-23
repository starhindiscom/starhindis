'use client';

import Link from 'next/link';
import { Star as StarIcon, Play, ArrowRight, TrendingUp, Users } from 'lucide-react';
import { StarLogo, Wordmark } from '@/components/Logo';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_rgba(168,85,247,0.12)_0%,_transparent_55%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(245,158,11,0.08)_0%,_transparent_50%)] -z-10" />

      <div className="container-section relative pt-20 pb-24 md:pt-32 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-600 border border-brand-100 mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span></span>
          🚀 Now Live: 23 Channels · 16 Languages
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-purple-900 flex items-center justify-center shadow-xl shadow-brand-500/40 animate-pulse-slow">
            <StarLogo size={40} />
          </div>
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
          <Stat value="23+" label="Channels" icon="★" />
          <Stat value="16+" label="Languages" icon="🌍" />
          <Stat value="4" label="Courses" icon="📚" />
          <Stat value="∞" label="Earning Potential" icon="💰" />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-4 opacity-50 grayscale animate-slide-up" style={{ animationDelay: '300ms' }}>
          {SOCIAL_BADGES.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-lg">{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOCIAL_BADGES = [
  { label: 'Instagram', icon: '📸', href: 'https://www.instagram.com/StarHindis' },
  { label: 'Facebook', icon: '👍', href: 'https://www.facebook.com/StarHindis' },
  { label: 'YouTube', icon: '▶️', href: 'https://www.youtube.com/@StarHindis' },
  { label: 'WhatsApp', icon: '💬', href: 'https://whatsapp.com/channel/0029VbB4Rv1It5rwuKwvst1o' },
  { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/company/starhindis/' },
  { label: 'Threads', icon: '🧵', href: 'https://www.threads.net/@StarHindis' },
];

export function Stat({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="animate-count-up flex flex-col items-start">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-brand-600">{icon}</span>
        <div className="text-3xl md:text-4xl font-bold text-brand-600 font-display">{value}</div>
      </div>
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

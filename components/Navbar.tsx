'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Star, Instagram, Facebook, Youtube, MessageCircle, Linkedin } from 'lucide-react';
import { NAV_LINKS, SOCIALS } from '@/lib/seo';
import { cn } from '@/lib/utils';

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  'message-circle': MessageCircle,
  linkedin: Linkedin,
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-md">
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-2xl text-brand-600 tracking-tight"
          >
            <Star className="w-7 h-7 text-gold-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
            <span className="hidden sm:block">Star Hindis</span>
            <span className="block sm:hidden text-xs">Star Hindis</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/creator" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-4">
              Join as Creator
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/plans"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:scale-[1.02]"
            >
              Get Started
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 text-gray-600 hover:text-brand-600"
              aria-label="Open menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/90 backdrop-blur">
          <div className="container-section py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-base font-medium transition-colors hover:bg-gray-50 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <p className="px-4 py-2 text-sm text-gray-500 uppercase tracking-wider font-semibold">Connect</p>
              <div className="flex gap-3 px-4 pb-6">
                {SOCIALS.slice(0, 4).map((s) => {
                  const Comp = SOCIAL_ICONS[s.icon] || Star;
                  return (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">
                      <Comp className="w-5 h-5" />
                      <span className="ml-1 hidden sm:inline text-sm">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

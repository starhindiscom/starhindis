'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Star as StarIcon, Instagram, Facebook, Youtube, MessageCircle, Linkedin, ExternalLink, ChevronRight } from 'lucide-react';
import { StarLogo, Wordmark } from '@/components/Logo';
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
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <StarLogo size={28} className="drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
            <div className="hidden md:flex flex-col items-start leading-tight">
              <Wordmark language="en" className="text-xl text-brand-600" />
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Digital Media Ecosystem</span>
            </div>
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
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Get Started <ChevronRight className="w-4 h-4" />
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
              <div className="flex gap-4 px-4 pb-6">
                {SOCIALS.map((s) => {
                  const Comp = SOCIAL_ICONS[s.icon];
                  return (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors flex items-center gap-2">
                      {Comp ? <Comp className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      <span className="hidden sm:inline text-sm">{s.label}</span>
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

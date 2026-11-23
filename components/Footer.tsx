'use client';

import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Linkedin,
  Smartphone,
} from 'lucide-react';

const SOCIAL_ICONS: Record<string, React.ElementType | null> = {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Linkedin,
  Smartphone,
} as const;

const SOCIALS = [
  { name: 'Instagram', handle: 'MakkaMadinaAqsa', url: 'https://www.instagram.com/MakkaMadinaAqsa' },
  { name: 'Facebook', handle: 'MakkaMadinaAqsa', url: 'https://www.facebook.com/MakkaMadinaAqsa' },
  { name: 'YouTube', handle: '@StarHindis', url: 'https://www.youtube.com/@StarHindis' },
  { name: 'WhatsApp', handle: 'Star Hindis Channel', url: 'https://whatsapp.com/channel/0029VbB4Rv1It5rwuKwvst1o' },
  { name: 'LinkedIn', handle: 'Star Hindis', url: 'https://www.linkedin.com/company/starhindis/' },
  { name: 'Threads', handle: 'MakkaMadinaAqsa', url: 'https://www.threads.net/@MakkaMadinaAqsa' },
] as const;

export function Footer() {
  return (
    <div className="border-t border-gray-800 bg-gray-900 text-gray-300">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                ★
              </span>
              <span className="font-display font-bold text-xl text-brand-600 tracking-tight">Star Hindis</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              India's largest multilingual digital media & monetization ecosystem — 29 channels · 22 languages · Academy · Creator Network · Brand Portal · Sponsorships.
            </p>
            <div className="flex gap-4">
              <a href="mailto:starhindis.com@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.ishaaq.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                🔗
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link href="/channels" className="hover:text-brand-400 transition-colors">Channels</Link></li>
              <li><Link href="/academy" className="hover:text-brand-400 transition-colors">Academy</Link></li>
              <li><Link href="/creator" className="hover:text-brand-400 transition-colors">Join as Creator</Link></li>
              <li><Link href="/brands" className="hover:text-brand-400 transition-colors">Brand Portal</Link></li>
              <li><Link href="/plans" className="hover:text-brand-400 transition-colors">Plans</Link></li>
              <li><Link href="/founder" className="hover:text-brand-400 transition-colors">Founder</Link></li>
              <li><Link href="/sacred" className="hover:text-brand-400 transition-colors">Sacred Channel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-brand-400 transition-colors">Disclaimer</Link></li>
              <li><a href="https://www.starhindis.com/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Sacred</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/sacred" className="hover:text-brand-400 transition-colors">Makka Madina Aqsa</Link></li>
              <li><a href="https://www.facebook.com/MakkaMadinaAqsa" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Facebook: MakkaMadinaAqsa</a></li>
              <li><a href="https://www.instagram.com/MakkaMadinaAqsa" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Instagram: MakkaMadinaAqsa</a></li>
              <li><a href="https://www.threads.net/@MakkaMadinaAqsa" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Threads: MakkaMadinaAqsa</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500">
              <span>© {new Date().getFullYear()} Star Hindis</span>
              <span className="text-gray-600">·</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex gap-4 text-sm">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.name];
                return (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors group">
                    {Icon ? (
                      <Icon className="w-4 h-4 group-hover:text-brand-400 transition-colors" />
                    ) : (
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-brand-400 group-hover:text-brand-400 transition-colors">
                        🧵
                      </span>
                    )}
                    <span className="group-hover:text-brand-400 transition-colors">{s.handle}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

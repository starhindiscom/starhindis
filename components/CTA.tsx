'use client';

import { ArrowRight, Star as StarIcon, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CTA({ heading, subheading, buttonText, buttonHref }: { heading: string; subheading?: string; buttonText: string; buttonHref: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-purple-900 p-8 md:p-12 text-white shadow-2xl shadow-brand-600/40">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur mb-6 border border-white/20">
          <StarIcon className="w-3.5 h-3.5 text-gold-400" />
          Limited spots — enroll this week
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4">{heading}</h2>
        {subheading && <p className="text-brand-100 text-lg md:text-xl max-w-xl mx-auto mb-10">{subheading}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonHref}
            className="px-10 py-4 rounded-full bg-white text-brand-700 text-lg font-bold shadow-2xl shadow-black/30 transition-all hover:bg-brand-50 hover:-translate-y-1 hover:scale-[1.02]"
          >
            {buttonText} <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-12">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-2xl text-gray-900">Trusted by creators across India</h3>
            <p className="text-gray-600">15,000+ creators learning, growing and earning together.</p>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-500" />
              <span>4.8 / 5 average rating</span>
            </div>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4 text-brand-600" />
              <span>23 channels, 16 languages</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 grayscale">
          {['YouTube Growth Masterclass', 'Voiceover Pro', 'Digital Marketing Hindi', 'Video Editing Pro'].map((name) => (
            <div key={name} className="h-10 flex items-center justify-center text-sm font-semibold text-gray-600 bg-white px-4 rounded-lg shadow-sm border border-gray-100">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

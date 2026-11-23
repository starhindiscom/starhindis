'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Play, Globe, Star as StarIcon, MapPin } from 'lucide-react';
import { CHANNELS } from '@/lib/data';
import { cn } from '@/lib/utils';

type LanguageRegion = {
  language: string;
  name: string;
  x: number;
  y: number;
  color: string;
  channel: (typeof CHANNELS)[number];
};

// Language → world map region coordinates (viewBox 0 0 1000 500)
const REGIONS: LanguageRegion[] = [
  {
    language: 'हिन्दी (Hindi)',
    name: 'India',
    x: 625,
    y: 305,
    color: '#a855f7',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisHindi')!,
  },
  {
    language: 'اردو (Urdu)',
    name: 'Pakistan',
    x: 595,
    y: 280,
    color: '#c084fc',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisUrdu')!,
  },
  {
    language: 'বাংলা (Bengali)',
    name: 'Bangladesh / West Bengal',
    x: 685,
    y: 320,
    color: '#d8b4fe',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisBengali')!,
  },
  {
    language: 'தமிழ் (Tamil)',
    name: 'Tamil Nadu / Sri Lanka',
    x: 650,
    y: 350,
    color: '#8b5cf6',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisTamil')!,
  },
  {
    language: 'తెలుగు (Telugu)',
    name: 'Andhra Pradesh / Telangana',
    x: 640,
    y: 310,
    color: '#7c3aed',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisTelugu')!,
  },
  {
    language: 'ಕನ್ನಡ (Kannada)',
    name: 'Karnataka',
    x: 630,
    y: 330,
    color: '#6d28d9',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisKannada')!,
  },
  {
    language: 'മലയാളം (Malayalam)',
    name: 'Kerala',
    x: 620,
    y: 355,
    color: '#5b21b6',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisMalayalam')!,
  },
  {
    language: 'मराठी (Marathi)',
    name: 'Maharashtra',
    x: 615,
    y: 320,
    color: '#4c1d95',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisMarathi')!,
  },
  {
    language: 'ગુજરાતી (Gujarati)',
    name: 'Gujarat',
    x: 605,
    y: 305,
    color: '#f59e0b',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisGujarati')!,
  },
  {
    language: 'ਪੰਜਾਬੀ (Punjabi)',
    name: 'Punjab',
    x: 600,
    y: 290,
    color: '#d97706',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisPunjabi')!,
  },
  {
    language: 'ଓଡ଼ିଆ (Odia)',
    name: 'Odisha',
    x: 665,
    y: 325,
    color: '#b45309',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisOdia')!,
  },
  {
    language: 'অসমীয়া (Assamese)',
    name: 'Assam',
    x: 695,
    y: 310,
    color: '#92400e',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisAssamese')!,
  },
  {
    language: 'العربية (Arabic)',
    name: 'Middle East / North Africa',
    x: 570,
    y: 210,
    color: '#ef4444',
    channel: CHANNELS.find((c) => c.handle === 'StarHindiArabi')!,
  },
  {
    language: 'فارسی (Persian)',
    name: 'Iran / Afghanistan',
    x: 585,
    y: 240,
    color: '#f87171',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisPersian')!,
  },
  {
    language: 'Français (French)',
    name: 'France',
    x: 415,
    y: 275,
    color: '#10b981',
    channel: CHANNELS.find((c) => c.handle === 'StarHindiFrench')!,
  },
  {
    language: 'Deutsch (German)',
    name: 'Germany',
    x: 480,
    y: 260,
    color: '#059669',
    channel: CHANNELS.find((c) => c.handle === 'StarHindiGerman')!,
  },
  {
    language: 'Español (Spanish)',
    name: 'Spain / Latin America',
    x: 370,
    y: 330,
    color: '#047857',
    channel: CHANNELS.find((c) => c.handle === 'StarHindiSpanish')!,
  },
  {
    language: 'Português (Portuguese)',
    name: 'Portugal / Brazil',
    x: 350,
    y: 340,
    color: '#065f46',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisPortuguese')!,
  },
  {
    language: '中文 (Mandarin)',
    name: 'China',
    x: 760,
    y: 280,
    color: '#3b82f6',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisChinese')!,
  },
  {
    language: 'Türkçe (Turkish)',
    name: 'Turkey',
    x: 580,
    y: 230,
    color: '#2563eb',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisTurkish')!,
  },
  {
    language: 'संस्कृत (Sanskrit)',
    name: 'India (Sacred)',
    x: 625,
    y: 270,
    color: '#1e40af',
    channel: CHANNELS.find((c) => c.handle === 'StarHindisSanskrit')!,
  },
];

const WORLD_MAP_PATHS = `
<path d="M110,260 L180,255 L200,240 L170,220 L150,200 L130,210 L110,225 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M280,290 L350,285 L360,270 L340,250 L320,240 L300,250 L290,265 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M370,320 L440,315 L450,300 L430,285 L410,275 L390,285 L375,295 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M460,260 L520,255 L530,245 L510,230 L490,235 L470,245 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M560,200 L640,195 L650,185 L630,170 L610,175 L590,185 L570,195 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M640,290 L720,285 L730,270 L710,255 L690,260 L670,270 L650,280 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M60,400 L120,395 L130,380 L110,360 L90,365 L70,375 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M700,250 L760,245 L770,230 L750,215 L730,220 L710,235 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M250,380 L310,375 L320,360 L300,345 L280,350 L260,360 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M380,380 L450,375 L460,360 L440,345 L420,350 L400,360 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M740,380 L800,375 L810,360 L790,345 L770,350 L750,360 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<path d="M850,380 L920,375 L930,360 L910,345 L890,350 L870,360 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
`;

export function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 border-y border-gray-100 bg-white">
      <div className="container-section">
        <div className="section-head">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-4 uppercase tracking-wider">
            <Globe className="w-3 h-3 fill-current" />
            World Map
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Star Hindis Around the World
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click any region to open that language's channel and watch its playlist.
          </p>
        </div>

        <div className="relative max-w-[900px] mx-auto h-[480px]">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="mapGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* World continent outlines */}
            <g>{WORLD_MAP_PATHS}</g>

            {/* Language region markers */}
            {REGIONS.map((region) => {
              const isHovered = hovered === region.language;
              return (
                <Link
                  key={region.language}
                  href={`/channels/${region.channel.id}`}
                  className="block"
                  onMouseEnter={() => setHovered(region.language)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <g className="transition-all cursor-pointer">
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r={isHovered ? 12 : 8}
                      fill={region.color}
                      stroke="white"
                      strokeWidth={3}
                      filter={isHovered ? 'url(#mapGlow)' : 'none'}
                    />
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r={3}
                      fill="white"
                      opacity={isHovered ? 1 : 0.6}
                    />
                  </g>
                  <title>{region.language} — {region.channel.name}</title>
                </Link>
              );
            })}
          </svg>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6 text-xs text-gray-500 pointer-events-none">
            {REGIONS.map((r) => (
              <span
                key={r.language}
                className="absolute"
                style={{ left: `${r.x / 10}%`, bottom: `${500 - r.y - 8}px` }}
              >
                {r.language.split(' ')[0]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            All Language Channels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {REGIONS.map((region) => (
              <Link
                key={region.language}
                href={`/channels/${region.channel.id}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-white hover:bg-brand-50 hover:border-brand-200 transition-all group hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: region.color }}>
                  {region.channel.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-brand-600 transition-colors">
                    {region.channel.name}
                  </h4>
                  <p className="text-xs text-gray-500">{region.language}</p>
                </div>
                <Play className="w-4 h-4 text-brand-600 group-hover:text-brand-700 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldMap;

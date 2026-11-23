'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Play, Star as StarIcon } from 'lucide-react';
import { CHANNELS } from '@/lib/data';
import { cn } from '@/lib/utils';

type ChannelCategory = (typeof CHANNELS)[number]['category'];
type FilterId = 'all' | 'main' | 'languages' | 'sacred' | 'special';

export function ChannelGrid({ initialCategory = 'all' }: { initialCategory?: FilterId } = {}) {
  const [category, setCategory] = useState<FilterId>(initialCategory);
  const filtered =
    category === 'all'
      ? CHANNELS
      : category === 'main'
        ? CHANNELS.filter((c) => c.category === 'Main')
        : category === 'languages'
          ? CHANNELS.filter((c) => c.category === 'Languages')
          : category === 'sacred'
            ? CHANNELS.filter((c) => c.category === 'Sacred')
            : CHANNELS.filter((c) => c.category !== 'Main' && c.category !== 'Languages');

  const cats = [
    { id: 'all', label: 'All (29)' },
    { id: 'main', label: 'Main' },
    { id: 'special', label: 'Special (6)' },
    { id: 'languages', label: 'Languages (22)' },
    { id: 'sacred', label: 'Sacred' },
  ] as const;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium transition-all border',
              category === c.id
                ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-500/40'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300',
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm mt-4">
        {filtered.length} channels · {new Set(filtered.map((c) => c.language)).size} languages
      </div>
    </div>
  );
}

function ChannelCard({ channel }: { channel: (typeof CHANNELS)[number] }) {
  const colorClass = channel.color === 'brand' ? 'border-brand-200 bg-brand-50 text-brand-700' : 'border-gold-200 bg-gold-50 text-gold-700';

  return (
    <Link
      href={`/channels/${channel.id}`}
      className="group block rounded-2xl border border-gray-100 bg-white p-5 hover:border-brand-300/50 hover:shadow-xl hover:shadow-brand-100/60 transition-all hover:-translate-y-1.5"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-md ${colorClass}`}>
          {channel.icon}
        </div>
        <div>
          {(channel as { sacred?: boolean }).sacred && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1">
              Sacred
            </span>
          )}
          <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">{channel.name}</h3>
          <p className="text-xs text-gray-500">{channel.language}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{channel.tagline}</p>
      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Channel Page</span>
        <div className="flex items-center gap-2 text-brand-600 font-semibold">
          <Play className="w-3.5 h-3.5" /> Watch Playlist
        </div>
      </div>
    </Link>
  );
}

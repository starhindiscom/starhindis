import Link from 'next/link';
import { baseMetadata } from '@/lib/seo';
import { CHANNELS } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Star as StarIcon, Play, Users, Clock, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata = async ({ params }: { params: { slug: string } }) => {
  const channel = CHANNELS.find((c) => c.id === params.slug);
  if (!channel) return notFound();

  return baseMetadata(
    `${channel.name} | Star Hindis`,
    `${channel.tagline} — ${channel.language}. Watch the ${channel.name} playlist and join the creator network.`
  );
};

export default function ChannelPage({ params }: { params: { slug: string } }) {
  const channel = CHANNELS.find((c) => c.id === params.slug);
  if (!channel) return notFound();

  const youtubeChannelUrl = `https://www.youtube.com/@${channel.handle}`;
  const youtubePlaylistUrl = `https://www.youtube.com/@${channel.handle}/featured`;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/@${channel.handle}?autoplay=1&mute=1&rel=0`;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container-section">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-brand-600" />
              <span className="font-display font-bold text-lg text-brand-600 tracking-tight">Star Hindis</span>
            </Link>
            <Link
              href="/channels"
              className="text-sm font-medium text-gray-600 hover:text-brand-600"
            >
              ← Back to Channels
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Channel Hero */}
        <section className="relative bg-gradient-to-br from-brand-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(168,85,247,0.08)_0%,_transparent_50%)] -z-10" />
          <div className="container-section relative">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-2xl shadow-brand-500/30 mb-4" style={{ background: channel.color === 'brand' ? 'linear-gradient(135deg, #a855f7, #ec4899)' : 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                  {channel.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {(channel as { sacred?: boolean }).sacred && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                      Sacred Channel
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider">
                    {channel.language}
                  </span>
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight mb-3">
                  {channel.name}
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">{channel.tagline}</p>
                <p className="text-sm text-gray-500 mt-2">{channel.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 text-white text-sm font-semibold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" /> Open on YouTube
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Playlist */}
        <section className="py-20 bg-white">
          <div className="container-section">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                  Watch {channel.name}
                </h2>
                <p className="text-gray-600">
                  The official playlist for {channel.name}. New videos added regularly.
                </p>
              </div>
              <Link
                href="/creator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
              >
                Join as Creator <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-900 overflow-hidden shadow-2xl aspect-video relative">
              <iframe
                src={youtubeEmbedUrl}
                title={`${channel.name} YouTube Playlist`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center">
              Can't see the video?{' '}
              <a href={youtubePlaylistUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium underline underline-offset-4">
                Watch on YouTube →
              </a>
            </p>
          </div>
        </section>

        {/* Related Channels */}
        <section className="py-20 border-y border-gray-100 bg-gray-50">
          <div className="container-section">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-8 text-center">
              Related Channels
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {CHANNELS.filter((c) => c.id !== channel.id && c.category === channel.category).slice(0, 8).map((related) => (
                <Link
                  key={related.id}
                  href={`/channels/${related.id}`}
                  className="group block rounded-xl border border-gray-100 bg-white p-4 hover:border-brand-300/50 hover:shadow-xl hover:shadow-brand-100/60 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-md" style={{
                      background: related.color === 'brand' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                      color: related.color === 'brand' ? '#a855f7' : '#d97706',
                    }}>
                      {related.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-xs text-gray-500">{related.language}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-gray-900 text-gray-300 py-12">
        <div className="container-section">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span>© {new Date().getFullYear()} Star Hindis</span>
              <span className="text-gray-600">·</span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.ishaaq.in/" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
                Founder: Mohammad Ishaq
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

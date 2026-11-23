import { Navbar, Footer } from '@/components';
import { Hero, SectionHeader, ChannelGrid, CourseGrid, CTA, SocialProof } from '@/components';
import { baseMetadata } from '@/lib/seo';
import { CHANNELS } from '@/lib/data';

export const metadata = baseMetadata(
  'Star Hindis — Complete Digital Media Ecosystem',
  "India's largest multilingual digital media & monetization ecosystem — 23 channels · 15+ languages · Academy · Creator Network · Brand Portal · Sponsorships · Revenue Systems.",
);

export default function HomePage() {
  const mainChannels = CHANNELS.filter((c) => c.category === 'Main' || c.category === 'Founder');
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <section className="py-20 border-y border-gray-100">
          <div className="container-section">
            <SectionHeader
              title="All 23 Channels — One Platform"
              subtitle="Har language, har category — ek platform. Filter karo aur directly YouTube par jaao."
            />
            <ChannelGrid initialCategory="all" />
            <div className="mt-12 flex justify-center">
              <a href="/channels" className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
                View full directory <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-section">
            <SectionHeader
              title="Star Hindis Academy"
              subtitle="India's first multilingual digital creator academy. Apni language mein seekho, globally earn karo."
            />
            <CourseGrid />
            <div className="mt-12 flex justify-center">
              <a href="/academy" className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
                Explore all courses <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="Creator Network"
              subtitle="Join hundreds of creators building their digital star across 23 channels and 16 languages."
            />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-2xl mb-4">✍️</div>
                <h3 className="font-bold text-gray-900 mb-2">Join as Creator</h3>
                <p className="text-sm text-gray-600 mb-4">Create content in your language and grow across the Star Hindis network.</p>
                <a href="/creator" className="text-brand-600 font-semibold text-sm hover:underline">Apply now →</a>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center font-bold text-2xl mb-4">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">Brand Deals</h3>
                <p className="text-sm text-gray-600 mb-4">Connect with sponsors through the Brand Portal and monetize your content.</p>
                <a href="/brands" className="text-brand-600 font-semibold text-sm hover:underline">Brand Portal →</a>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-2xl mb-4">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Revenue System</h3>
                <p className="text-sm text-gray-600 mb-4">Sponsorships, memberships and monetization — sab ek jagah.</p>
                <a href="/plans" className="text-brand-600 font-semibold text-sm hover:underline">View Plans →</a>
              </div>
            </div>
          </div>
        </section>

        <CTA
          heading="Ready to become a digital star?"
          subheading="Join free, pick your channel, and start building your audience in your own language."
          buttonText="Join Free Today"
          buttonHref="/creator"
        />

        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

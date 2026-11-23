import { Navbar, Footer } from '@/components';
import { SectionHeader, ChannelGrid } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Channels Directory', 'Explore all 23 Star Hindis channels across 16 languages. Filter by category and open any channel directly on YouTube.');

export default function ChannelsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="All 23 Star Hindis Channels"
              subtitle="Har language, har category — ek platform. Filter karo aur directly YouTube par jaao."
            />
            <ChannelGrid initialCategory="all" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar, Footer } from '@/components';
import { SectionHeader, CTA } from '@/components';
import { BrandPartnershipForm } from '@/components/forms';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Brand Portal', 'Partner with Star Hindis creators. Sponsorship marketplace, campaign management and brand-safe multilingual creator network.');

export default function BrandsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="Brand Portal"
              subtitle="Partner with 15,000+ creators across 23 channels and 16 Indian languages. Sponsorships, campaigns and brand-safe monetization."
            />
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-4">📢</div>
                <h3 className="font-bold text-gray-900 mb-2">Sponsorship Marketplace</h3>
                <p className="text-sm text-gray-600">Book creator endorsements, product placements and integrated campaigns across channels.</p>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center font-bold mb-4">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">Campaign Management</h3>
                <p className="text-sm text-gray-600">Full-funnel campaign execution with creator discovery, briefing and delivery tracking.</p>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">ROI & Analytics</h3>
                <p className="text-sm text-gray-600">Reach, engagement and conversion dashboards for every sponsorship slot.</p>
              </div>
            </div>
            <div className="p-10 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Premium Sacred Slots</h3>
              <p className="text-sm text-gray-600 mb-4">Hajj/Umrah agencies, Halal brands and Islamic finance companies — premium sponsorship slots available on the Makka Madina Aqsa sacred channel.</p>
              <a href="/sacred" className="text-brand-600 font-semibold hover:underline">View Sacred Channel →</a>
            </div>
            <BrandPartnershipForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

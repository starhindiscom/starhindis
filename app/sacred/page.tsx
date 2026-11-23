import { Navbar, Footer } from '@/components';
import { SectionHeader, CTA } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Makka Madina Aqsa — Sacred Channel', 'Sacred Makka Madina Aqsa — a spiritual sanctuary in the digital world for the global Islamic community. Premium sponsorship slots available.');

export default function SacredPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="Makka Madina Aqsa"
              subtitle="Welcome to Sacred Makka Madina Aqsa — Live from the Heart of Islam. A spiritual sanctuary in the digital world."
            />
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="p-8 rounded-2xl border border-gray-100 bg-amber-50 text-center">
                  <div className="text-4xl mb-3">🕋</div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Dil ko sukoon, ankhon ko noor</h3>
                  <p className="text-sm text-gray-600">
                    A dedicated platform for the global Islamic community — spiritual content, reminders and peace from the heart of Makka, Madina and Al-Aqsa.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gold-600">▶</span>
                    <div>
                      <div className="font-bold text-gray-900">YouTube Channel</div>
                      <a href="https://www.youtube.com/@MakkaMadinaAqsa" target="_blank" rel="noopener noreferrer" className="text-brand-600 text-sm hover:underline">@MakkaMadinaAqsa</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold-600">👍</span>
                    <div>
                      <div className="font-bold text-gray-900">Facebook Page</div>
                      <a href="https://www.facebook.com/MakkaMadinaAqsa" target="_blank" rel="noopener noreferrer" className="text-brand-600 text-sm hover:underline">MakkaMadinaAqsa</a>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Sponsorship Opportunity</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Premium sponsorship slots available for Hajj/Umrah agencies, Halal brands and Islamic finance companies.
                  </p>
                  <a href="/brands" className="text-brand-600 font-semibold text-sm hover:underline">Inquire about sponsorship →</a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <span className="text-6xl opacity-30">🕋</span>
                </div>
                <p className="mt-4 text-sm text-gray-500 text-center">Sacred channel live feed placeholder</p>
              </div>
            </div>
            <CTA
              heading="Partner with the Sacred Channel"
              subheading="Hajj/Umrah agencies, Halal brands and Islamic finance companies — premium sponsorship slots available."
              buttonText="Contact Brand Portal"
              buttonHref="/brands"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

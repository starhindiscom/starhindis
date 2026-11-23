import { Navbar, Footer } from '@/components';
import { SectionHeader, CTA } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Join as Creator', 'Join the Star Hindis Creator Network. Create content in your language, grow across 23 channels, and monetize with sponsorships.');

export default function CreatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="Join the Creator Network"
              subtitle="Become a Star Hindis creator. Publish in your language, reach millions, and earn through the Creator Network."
            />
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">1. Apply</h3>
                <p className="text-sm text-gray-600 mb-4">Fill the creator form with your channel details and preferred language.</p>
                <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                  <li>Active YouTube/social channel</li>
                  <li>Content in any of 16 supported languages</li>
                  <li>Commitment to post weekly</li>
                </ul>
                <a href="mailto:starhindis.com@gmail.com?subject=Creator Application - Star Hindis&body=I want to apply as a creator for Star Hindis. Please send me the application form." className="text-brand-600 font-semibold text-sm hover:underline">Apply now →</a>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">2. Grow</h3>
                <p className="text-sm text-gray-600 mb-4">Get access to Academy courses, creator branding kit and cross-promotion across the Star Hindis network.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                  <li>Free Academy courses</li>
                  <li>Channel listing in directory</li>
                  <li>Monthly growth webinars</li>
                </ul>
                <a href="/academy" className="text-brand-600 font-semibold text-sm hover:underline">Explore Academy →</a>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">3. Earn</h3>
                <p className="text-sm text-gray-600 mb-4">Unlock sponsorships through the Brand Portal, memberships and the revenue system — sab ek jagah.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                  <li>Brand deals & sponsorships</li>
                  <li>Creator membership tier</li>
                  <li>Revenue share</li>
                </ul>
                <a href="/brands" className="text-brand-600 font-semibold text-sm hover:underline">Brand Portal →</a>
              </div>
            </div>
            <CTA
              heading="Ready to become a digital star?"
              subheading="Join free today and start building your audience in your own language."
              buttonText="Join Free — Apply as Creator"
              buttonHref="mailto:starhindis.com@gmail.com?subject=Join Free - Creator Application&body=I want to join the Star Hindis Creator Network for free. Please send me the application form and next steps."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

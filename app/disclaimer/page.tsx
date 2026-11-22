import { Navbar, Footer } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Disclaimer', 'Star Hindis disclaimer — earnings potential, educational content and third-party platform notices.');

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section max-w-3xl">
            <h1 className="font-display font-bold text-3xl text-gray-900 mb-8">Disclaimer</h1>
            <p className="text-sm text-gray-500 mb-6">Effective: November 2026</p>
            <div className="prose prose-gray max-w-none space-y-6">
              <p><strong>Earnings potential:</strong> Figures such as "₹28–90L/month potential" on the Site are illustrative and not guaranteed. Actual results depend on your effort, niche, audience and third-party platform policies.</p>
              <p><strong>Educational content:</strong> Academy courses provide training and information only. They do not constitute financial, legal or professional advice.</p>
              <p><strong>Third-party platforms:</strong> Star Hindis is not affiliated with YouTube, Meta, WhatsApp or LinkedIn. Channel handles and platform names are used for identification purposes only.</p>
              <p><strong>No guarantee:</strong> We do not guarantee subscriber counts, revenue or sponsorship placements. All creator network and brand portal features are subject to eligibility and availability.</p>
              <p>If you have questions, contact us through the Brand Portal or visit <a href="https://www.ishaaq.in/" className="text-brand-600 hover:underline">ishaaq.in</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

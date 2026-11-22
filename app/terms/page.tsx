import { Navbar, Footer } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Terms of Service', 'Star Hindis terms of service — please read before using the Site and creator/network services.');

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section max-w-3xl">
            <h1 className="font-display font-bold text-3xl text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-6">Effective: November 2026</p>
            <div className="prose prose-gray max-w-none space-y-6">
              <p>Welcome to Star Hindis. By accessing https://www.starhindis.com you agree to these terms. If you do not agree, please do not use the Site.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Use of the Site</h2>
              <p>You may use the Site for lawful purposes only. You must not misuse the Site or attempt to interfere with its operation.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Creator Network</h2>
              <p>Creator applications are reviewed at our discretion. Acceptance into the Creator Network does not guarantee earnings or sponsorships.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">External Platforms</h2>
              <p>The Site links to third-party platforms (YouTube, Instagram, etc.). Your use of those platforms is governed by their own terms.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Limitation of Liability</h2>
              <p>The Site and services are provided "as is" without warranties. We are not liable for indirect or consequential damages arising from use of the Site.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Changes</h2>
              <p>We may update these terms at any time. Continued use constitutes acceptance.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar, Footer } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Privacy Policy', 'Star Hindis privacy policy — how we collect, use and protect your information.');

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section max-w-3xl">
            <h1 className="font-display font-bold text-3xl text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-6">Last updated: November 2026</p>
            <div className="prose prose-gray max-w-none space-y-6">
              <p>Star Hindis ("we", "our", "us") operates https://www.starhindis.com (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of personal data.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Information We Collect</h2>
              <p>We may collect information you provide directly (name, email, channel handle) when you join as a creator or contact the Brand Portal. We also collect non-personal usage data (pages visited, referrer, device type) to improve the Site.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Use of Information</h2>
              <p>We use your information to operate the Site, provide creator/network services, contact you about opportunities, and improve your experience. We do not sell personal data.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Third-Party Links</h2>
              <p>The Site links to YouTube, Instagram, Facebook, WhatsApp, LinkedIn and Threads. Those platforms have their own privacy policies; we are not responsible for their practices.</p>
              <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">Contact</h2>
              <p>Questions? Email us via the Brand Portal or visit <a href="https://www.ishaaq.in/" className="text-brand-600 hover:underline">ishaaq.in</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

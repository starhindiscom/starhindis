import { Navbar, Footer } from '@/components';
import { SectionHeader } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Founder — Mohammad Ishaq', 'Meet Mohammad Ishaq, the visionary founder behind Star Hindis — India’s largest multilingual digital media ecosystem.');

export default function FounderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="The Visionary Behind Star Hindis"
              subtitle="Mohammad Ishaq founded Star Hindis to make every Indian a digital star — in their own language."
            />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-brand-200 bg-white p-2 shadow-xl relative overflow-hidden">
                  <img
                    src="/founder.jpg"
                    alt="Mohammad Ishaq"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Founder</span>
                    <h3 className="font-bold mt-1">Mohammad Ishaq</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl text-gray-900">Mohammad Ishaq</h2>
                <p className="text-lg text-gray-600">
                  The visionary behind Star Hindis — India's largest multilingual digital media &amp; monetization ecosystem spanning 29 channels and 22 languages.
                </p>
                <p className="text-lg text-gray-600">
                  His mission: <em className="text-brand-600 font-semibold">"Jahan Har Hindustani Digital Star Banta Hai."</em> — Where every Indian becomes a digital star.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3">Connect</h4>
                  <div className="space-y-2">
                    <a href="https://www.youtube.com/@starishaaq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-600 font-semibold hover:underline">
                      ▶ YouTube: @starishaaq
                    </a>
                    <a href="https://www.instagram.com/starishaaq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-600 font-semibold hover:underline">
                      📸 Instagram: @starishaaq
                    </a>
                    <a href="https://www.facebook.com/starishaaq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-600 font-semibold hover:underline">
                      👍 Facebook: @starishaaq
                    </a>
                    <a href="https://www.threads.net/@starishaaq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-600 font-semibold hover:underline">
                      🧵 Threads: @starishaaq
                    </a>
                    <a href="https://www.linkedin.com/in/starishaaq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-600 font-semibold hover:underline">
                      💼 LinkedIn: @starishaaq
                    </a>
                    <a href="mailto:starhindis.com@gmail.com" className="flex items-center gap-3 text-brand-600 font-semibold hover:underline">
                      ✉️ Email: starhindis.com@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

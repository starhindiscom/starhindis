import { Navbar, Footer } from '@/components';
import { SectionHeader, CourseGrid, CTA } from '@/components';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Star Hindis Academy', 'India’s first multilingual digital creator academy. Learn in your language, earn globally. Courses in YouTube growth, voiceover, digital marketing and video editing.');

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="Star Hindis Academy"
              subtitle="Premium courses & training. India's first multilingual digital creator academy. Apni language mein seekho, globally earn karo."
            />
            <div className="flex justify-between items-center mb-12">
              <span className="px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">15+ Languages · 5 Courses · Certificates</span>
            </div>
            <CourseGrid />
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">All courses include video lessons, downloadable resources, a completion certificate and access to the creator community.</p>
              <a href="/creator" className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700 text-lg">
                Start learning <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
        <CTA
          heading="Enroll in the Academy today"
          subheading="Learn YouTube growth, voiceover, digital marketing and video editing — in Hindi, Urdu and 14 more Indian languages."
          buttonText="Explore Courses"
          buttonHref="/academy"
        />
      </main>
      <Footer />
    </div>
  );
}

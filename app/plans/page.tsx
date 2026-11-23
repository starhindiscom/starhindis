import { Navbar, Footer } from '@/components';
import { SectionHeader } from '@/components';
import { PLANS } from '@/lib/data';
import { baseMetadata } from '@/lib/seo';
import { formatINR, cn } from '@/lib/utils';

export const metadata = baseMetadata('Plans & Pricing', 'Choose your Star Hindis plan — Starter (free), Creator (₹499/month) or Network (₹1,999/month) for brands and agencies.');

export default function PlansPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container-section">
            <SectionHeader
              title="Choose Your Plan"
              subtitle="Join free or upgrade to unlock certificates, branding, sponsorships and the revenue system."
            />
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    'p-8 rounded-3xl border shadow-sm transition-all hover:shadow-xl hover:-translate-y-1',
                    plan.featured
                      ? 'border-brand-600 bg-brand-50 relative ring-1 ring-brand-600/20'
                      : 'border-gray-100 bg-white',
                  )}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/40">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 text-lg">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.tagline}</p>
                  </div>
                  <div className="mb-6">
                    <span className={cn('text-3xl font-bold font-display', plan.featured ? 'text-brand-600' : 'text-gray-900')}>
                      {plan.priceLabel === 'Free' ? 'Free' : plan.priceLabel}
                    </span>
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-gray-600">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-brand-600">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:starhindis.com@gmail.com?subject=Plan Signup - ${plan.name}&body=I want to sign up for the ${plan.name} plan (${plan.priceLabel}${plan.period}). Please send me the payment link and onboarding details.`}
                    className={cn(
                      'w-full py-4 rounded-xl text-sm font-semibold transition-all text-center border',
                      plan.featured
                        ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/40'
                        : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50',
                    )}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-sm text-gray-500">
              All paid plans include a 7-day free trial. Cancel anytime. Prices include GST.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

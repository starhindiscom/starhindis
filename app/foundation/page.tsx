import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { SectionHeader, CTA } from '@/components';
import {
  Star as StarIcon,
  Play,
  Users,
  Clock,
  Rocket,
  Shield,
  HandHeart,
  Target,
  Mail,
  Smartphone,
  MapPin,
  Briefcase,
  GraduationCap,
  Laptop,
  Network,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata(
  'Star Hindis Foundation — Founding Member Campaign',
  'Help establish Star Hindis Foundation — a public-interest organisation for education, digital empowerment and community development. Become a founding member.',
);

const FOUNDATION_TARGET = 275000;

const BREAKDOWN = [
  { label: 'Digital / Computer Infrastructure', amount: 150000, pct: 54.5 },
  { label: 'Air Conditioning', amount: 50000, pct: 18.2 },
  { label: 'Furniture', amount: 30000, pct: 10.9 },
  { label: 'Office Setup (first-month)', amount: 25000, pct: 9.1 },
  { label: 'Registration & Legal Setup', amount: 10000, pct: 3.6 },
  { label: 'Other Initial Expenses', amount: 10000, pct: 3.6 },
];

const CONTRIBUTION_LEVELS = [
  {
    name: 'Founding Member',
    amount: '₹5,000',
    subtitle: 'Suggested founding contribution',
  },
  {
    name: 'Founding Supporter',
    amount: '₹10,000',
    subtitle: 'Double the founding contribution',
  },
  {
    name: 'Founding Patron',
    amount: '₹25,000',
    subtitle: 'Leadership-level support',
  },
  {
    name: 'Founding Institutional Supporter',
    amount: '₹50,000+',
    subtitle: 'Organisation-level partnership',
  },
] as const;

const EXPECTATIONS = [
  {
    icon: Clock,
    title: 'Time',
    desc: 'Participate in Foundation activities.',
  },
  {
    icon: Laptop,
    title: 'Knowledge',
    desc: 'Share your professional skills.',
  },
  {
    icon: Network,
    title: 'Network',
    desc: 'Help connect genuine institutions and communities.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Maintain transparency and ethical conduct.',
  },
  {
    icon: HandHeart,
    title: 'Commitment',
    desc: 'Help us build something that lasts.',
  },
] as const;

const WHO_SHOULD_APPLY = [
  'Educators',
  'Technology Professionals',
  'Entrepreneurs',
  'Retired Professionals',
  'Community Leaders',
  'Media & Communication Professionals',
  'Social Workers',
  'Young Professionals',
] as const;

const SELECTION_STEPS = [
  { step: '01', title: 'Apply', desc: 'Online application submit karein.' },
  { step: '02', title: 'Review', desc: 'Background, experience aur motivation review.' },
  { step: '03', title: 'Conversation', desc: 'Short interview.' },
  { step: '04', title: 'Selection', desc: 'Suitable candidates selected.' },
  { step: '05', title: 'Induction', desc: 'Founding Member declaration + contribution + onboarding.' },
] as const;

const FAQS = [
  {
    q: 'Is ₹5,000 an investment?',
    a: 'No. It is a proposed founding contribution, not a purchase of shares or ownership.',
  },
  {
    q: 'Will I receive profit?',
    a: 'No.',
  },
  {
    q: 'Does contributing guarantee Founder status?',
    a: 'No. Applications are subject to the Foundation\'s eligibility and governance process.',
  },
  {
    q: 'Can I contribute more than ₹5,000?',
    a: 'Yes.',
  },
  {
    q: 'Can I contribute skills instead of money?',
    a: 'You may apply as a volunteer/supporter, subject to the Foundation\'s policies. Volunteer time does not automatically substitute for any legally required contribution.',
  },
  {
    q: 'Where will the money go?',
    a: 'Into approved Foundation establishment and programme expenses.',
  },
] as const;

export default function FoundationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-600 border border-brand-100 mb-8 uppercase tracking-wider">
                Star Hindis Foundation
              </div>
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-purple-900 flex items-center justify-center shadow-xl shadow-brand-500/40">
                  <StarIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
                Help Build a Digital India<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-gold-500 to-pink-600">
                  That Reaches Everyone
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                Education • Digital Empowerment • Community Development
              </p>
              <p className="text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                We are inviting our first founding members to help establish Star Hindis Foundation and build its first public-interest programmes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#apply"
                  className="px-10 py-4 rounded-xl bg-brand-600 text-white text-lg font-bold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
                >
                  Become a Founding Member <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link
                  href="#mission"
                  className="px-10 py-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-bold transition-all hover:bg-gray-50 hover:-translate-y-0.5"
                >
                  Explore Our Mission
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* We Are Building the Foundation */}
        <section id="mission" className="py-24 border-y border-gray-100 bg-white">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                We Are Building the Foundation — Together
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our initial establishment target is transparently broken down below. Every rupee goes toward approved establishment needs — not into anyone\u2019s pocket.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xl">
                    ₹
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Initial Establishment Target</h3>
                    <p className="text-sm text-gray-500">Transparent breakdown — ₹2,75,000 total</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">Target</span>
                    <span className="text-lg font-bold text-brand-600">₹2,75,000</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-600 to-purple-700" style={{ width: '100%' }} />
                  </div>
                </div>

                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-3 text-gray-500 font-medium uppercase tracking-wider text-xs">Purpose</th>
                      <th className="pb-3 text-gray-500 font-medium uppercase tracking-wider text-xs text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {BREAKDOWN.map((item) => (
                      <tr key={item.label} className="group">
                        <td className="py-3 text-gray-700">
                          {item.label}
                        </td>
                        <td className="py-3 text-right text-gray-900 font-medium group-hover:text-brand-600 transition-colors">
                          ₹{item.amount.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-8 pt-6 border-t border-gray-50 rounded-xl bg-gray-50 p-6">
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    Every contribution will be recorded and used for the Foundation\u2019s approved activities and establishment needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Contribution */}
        <section className="py-24 border-y border-gray-100 bg-gray-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Become One of the First Founding Members
              </h2>
              <div className="rounded-3xl border-2 border-brand-200 bg-white p-8 md:p-12 shadow-lg text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-50/50 to-transparent -z-10" />
                <div className="flex flex-col items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-200">
                    ₹5,000
                  </span>
                  <h3 className="font-bold text-3xl text-gray-900">Suggested Founding Contribution</h3>
                </div>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                  Your contribution is not an investment in shares or ownership. It is a contribution toward establishing and operating a public-interest foundation.
                </p>
                <Link
                  href="#apply"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-600 text-white font-bold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
                >
                  Apply to Become a Founding Member <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-6 text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
                Applications are subject to the Foundation\u2019s eligibility and governance process. Submission does not automatically confer Founder status.
              </p>
            </div>
          </div>
        </section>

        {/* Contribution Levels */}
        <section className="py-24 border-y border-gray-100 bg-white">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">Contribution Levels</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose a level that suits your capacity. Every level carries the same non-ownership principle.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {CONTRIBUTION_LEVELS.map((level) => (
                <div
                  key={level.name}
                  className="rounded-2xl border border-gray-100 bg-white p-8 hover:border-brand-300/50 hover:shadow-xl hover:shadow-brand-100/60 transition-all group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-gold-500 fill-gold-500" />
                    <span className="font-bold text-gray-900">{level.name}</span>
                  </div>
                  <div className="text-3xl font-bold font-display text-brand-600 mb-2">{level.amount}</div>
                  <p className="text-sm text-gray-600 mb-6">{level.subtitle}</p>
                  <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg italic leading-relaxed">
                    Contribution does not provide ownership, shares or profit entitlement.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Expect From a Founder */}
        <section className="py-24 border-y border-gray-100 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                What We Expect From a Founder
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A founder is not just someone who gives money. We ask for your time, knowledge and integrity too.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {EXPECTATIONS.map((exp) => (
                <div
                  key={exp.title}
                  className="rounded-2xl border border-gray-100 bg-white p-8 text-center hover:border-brand-300/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{exp.title}</h4>
                  <p className="text-sm text-gray-600">{exp.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-sm text-gray-600 italic leading-relaxed max-w-2xl mx-auto">
                We value contribution of time, knowledge and service as much as financial contribution.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-24 border-y border-gray-100 bg-white">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Who Should Apply?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience matters — whether you\u2019re starting out or have decades of it.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {WHO_SHOULD_APPLY.map((role) => (
                <div
                  key={role}
                  className="rounded-xl border border-gray-100 bg-white p-6 text-center hover:border-brand-300/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors">
                    <StarIcon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-24 border-y border-gray-100 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Selection Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A transparent five-step process to build trust in who joins the Foundation.
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-200" />
              {SELECTION_STEPS.map((step, i) => (
                <div
                  key={step.step}
                  className="relative mb-16 pl-16 md:mb-0 md:pl-0"
                >
                  <div className="absolute -top-3 left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-brand-400/40 z-10">
                    {step.step}
                  </div>
                  <div className="absolute -top-3 left-8 md:left-1/2 -translate-x-1/2 w-px h-[calc(100%+6px)] bg-gray-200 hidden md:block" />
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-colors">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where Your Contribution Goes */}
        <section className="py-24 border-y border-gray-100 bg-white">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Where Your Contribution Goes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The ₹2,75,000 initial establishment target broken down by percentage.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {BREAKDOWN.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-100 bg-white p-6 hover:border-brand-300/50 transition-all"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold font-display text-brand-600">{item.pct}%</span>
                    <span className="text-sm text-gray-500 font-medium">of target</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-600 to-purple-700"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    ₹{item.amount.toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-24 border-y border-gray-100 bg-gray-50">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-6">
                  Our Commitment to Transparency
                </h2>
                <ul className="space-y-4 text-gray-600 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>Foundation bank account for organisational funds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>Proper receipts for contributions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>Documented expenditure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>Periodic financial reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>Governing-body oversight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>Conflict-of-interest disclosure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span>No personal ownership of Foundation assets</span>
                  </li>
                </ul>
                <p className="mt-8 text-sm text-gray-500 italic leading-relaxed">
                  We will publish appropriate financial and programme updates as the Foundation grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-y border-gray-100 bg-white">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">FAQ</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Common questions about becoming a founding member.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-white overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded="false"
                  >
                    <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-50">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-brand-600 via-brand-700 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
          <div className="container-section relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Don\u2019t Just Support the Idea. Help Build It.
              </h2>
              <p className="text-brand-100 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Become one of the people who helped lay the first foundation of Star Hindis Foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#apply"
                  className="px-10 py-4 rounded-xl bg-white text-brand-700 font-bold shadow-2xl shadow-black/30 transition-all hover:bg-brand-50 hover:-translate-y-0.5"
                >
                  Apply as Founding Member
                </Link>
                <a
                  href="#"
                  className="px-10 py-4 rounded-xl border border-white/30 bg-white/10 text-white font-bold transition-all hover:bg-white/20"
                >
                  Download Foundation Vision
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-24 border-y border-gray-100 bg-white">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Founding Member Application
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Submit your application below. All fields marked with an asterisk (*) are required.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <form
                action="https://formspree.io/f/foundation-founding-member"
                method="POST"
                className="rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm space-y-8"
              >
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-900 text-lg border-b-2 border-brand-200 pb-2 pb-2">
                    Personal Information *
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        name="full_name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Mobile
                      </label>
                      <input
                        name="mobile"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        City
                      </label>
                      <input
                        name="city"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your city"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        State
                      </label>
                      <input
                        name="state"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your state"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Address (optional)
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your complete address"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Profile */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-900 text-lg border-b-2 border-brand-200 pb-2">
                    Professional Profile *
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Occupation
                      </label>
                      <input
                        name="occupation"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your current occupation"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Education
                      </label>
                      <input
                        name="education"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Highest qualification"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Years of Experience
                      </label>
                      <input
                        name="experience"
                        type="number"
                        min="0"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Professional Skills
                      </label>
                      <input
                        name="skills"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. teaching, software development, community organising"
                      />
                    </div>
                  </div>
                </div>

                {/* Foundation Contribution */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-900 text-lg border-b-2 border-brand-200 pb-2">
                    Foundation Contribution *
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['₹5,000', '₹10,000', '₹25,000', '₹50,000+'].map((amount) => (
                      <div
                        key={amount}
                        className={`cursor-pointer rounded-xl border-2 px-6 py-4 flex flex-col items-center gap-2 transition-all hover:border-brand-300 hover:bg-brand-50 ${amount === '₹5,000' ? 'border-brand-600 bg-brand-50' : 'border-gray-200'}`}
                      >
                        <input
                          type="radio"
                          name="contribution_amount"
                          value={amount}
                          required
                          className="hidden"
                          defaultChecked={amount === '₹5,000'}
                        />
                        <span className="text-xl font-bold font-display text-gray-900">{amount}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {amount === '₹5,000' ? 'Suggested founding contribution' : ''}
                        </span>
                      </div>
                    ))}
                    <div className="col-span-2 border-2 border-gray-200 rounded-xl px-6 py-4 flex flex-col items-center gap-2 hover:border-brand-300 hover:bg-brand-50 transition-all">
                      <input
                        type="radio"
                        name="contribution_amount"
                        value="other"
                        required
                        className="hidden"
                      />
                      <span className="text-xl font-bold font-display text-gray-900">Other</span>
                      <input
                        name="contribution_other"
                        type="text"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter amount (₹)"
                      />
                    </div>
                  </div>
                </div>

                {/* Contribution Beyond Money */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-900 text-lg border-b-2 border-brand-200 pb-2">
                    Your Contribution Beyond Money *
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Time', 'Professional expertise', 'Community network', 'Technology', 'Education', 'Content/media', 'Fundraising', 'Other'].map((item) => (
                      <label key={item} className="cursor-pointer rounded-xl border border-gray-200 px-4 py-3 flex items-center gap-3 transition-all hover:border-brand-300 hover:bg-brand-50">
                        <input type="checkbox" name="contribution_type" value={item} className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Commitment */}
                <div className="space-y-6">
                  <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Your Commitment *
                  </label>
                  <textarea
                    name="commitment"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can you contribute to Star Hindis Foundation during the next 12 months?"
                  ></textarea>
                </div>

                {/* Declarations */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  {[
                    'I understand that my contribution does not provide ownership or profit rights.',
                    'I agree to the Foundation\u2019s governing documents and code of conduct.',
                    'I understand that submission of this application does not automatically make me a Founding Member.',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="declaration"
                        required
                        className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500 mt-0.5"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-600 text-white font-bold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5 text-lg"
                >
                  Submit Founding Member Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

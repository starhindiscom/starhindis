'use client';

import { BaseForm } from '@/components/forms/BaseForm';

// Brand partnership form — goes to /brands page
export function BrandPartnershipForm() {
  const extraFields = (
    <>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Company / Brand Name
        </label>
        <input
          name="company"
          type="text"
          required
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          placeholder="Your company name"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            Campaign Type
          </label>
          <select
            name="campaign_type"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          >
            <option>Sponsorship Marketplace</option>
            <option>Campaign Management</option>
            <option>ROI & Analytics</option>
            <option>Premium Sacred Slots</option>
            <option>Brand Portal Access</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            Monthly Budget
          </label>
          <select
            name="budget"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          >
            <option>₹10,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>₹1,00,000 - ₹5,00,000</option>
            <option>₹5,00,000+</option>
            <option>Not decided yet</option>
          </select>
        </div>
      </div>
    </>
  );

  return (
    <section className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
      <BaseForm
        action="https://formspree.io/f/brand-partnership"
        title="Start a Brand Campaign"
        subtitle="Partner with 29 channels across 22 languages. Sponsorships, campaign management, ROI & analytics — sab ek jagah."
        buttonText="Send Brand Inquiry"
        extraFields={extraFields}
      />
    </section>
  );
}

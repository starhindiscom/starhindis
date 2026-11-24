'use client';

import { BaseForm } from '@/components/forms/BaseForm';

// Founder contact form — goes to /founder page
export function FounderContactForm() {
  const extraFields = (
    <>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Subject
        </label>
        <input
          name="subject"
          type="text"
          required
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          placeholder="What is this about?"
        />
      </div>
    </>
  );

  return (
    <section className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
      <BaseForm
        action="https://formspree.io/f/founder-contact"
        title="Contact the Founder"
        subtitle="Have a question for Mohammad Ishaq? Send a message directly."
        buttonText="Send Message to Founder"
        extraFields={extraFields}
      />
    </section>
  );
}

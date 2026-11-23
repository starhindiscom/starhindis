'use client';

import { BaseForm } from '@/components/forms/BaseForm';

// Creator application form — goes to /creator page
export function CreatorApplicationForm() {
  const extraFields = (
    <>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          YouTube / Social Channel URL
        </label>
        <input
          name="channel_url"
          type="url"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          placeholder="https://youtube.com/@yourchannel"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            Language
          </label>
          <select
            name="language"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          >
            <option>Hindi</option>
            <option>Urdu</option>
            <option>English</option>
            <option>Telugu</option>
            <option>Tamil</option>
            <option>Kannada</option>
            <option>Malayalam</option>
            <option>Marathi</option>
            <option>Gujarati</option>
            <option>Punjabi</option>
            <option>Bengali</option>
            <option>Odia</option>
            <option>Assamese</option>
            <option>Arabic</option>
            <option>French</option>
            <option>German</option>
            <option>Spanish</option>
            <option>Portuguese</option>
            <option>Turkish</option>
            <option>Mandarin</option>
            <option>Sanskrit</option>
            <option>Persian</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            Creator Tier
          </label>
          <select
            name="tier"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          >
            <option>Starter (Free)</option>
            <option>Creator (₹499/month)</option>
            <option>Network (₹1,999/month)</option>
          </select>
        </div>
      </div>
    </>
  );

  return (
    <section className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
      <BaseForm
        action="https://formspree.io/f/creator-application"
        title="Apply as a Creator"
        subtitle="Join the Star Hindis Creator Network — publish in your language, reach millions, earn through sponsorships."
        buttonText="Submit Creator Application"
        extraFields={extraFields}
      />
    </section>
  );
}

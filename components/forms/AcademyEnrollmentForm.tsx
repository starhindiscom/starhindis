'use client';

import { BaseForm } from '@/components/forms/BaseForm';

// Academy enrollment form — goes to /academy page
export function AcademyEnrollmentForm() {
  const extraFields = (
    <>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Course Interested In
        </label>
        <select
          name="course"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
        >
          <option>YouTube Growth Masterclass</option>
          <option>Voiceover Artist Professional Course</option>
          <option>Digital Marketing in Hindi</option>
          <option>Video Editing & Content Creation Pro</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Preferred Language
        </label>
        <select
          name="preferred_language"
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
        </select>
      </div>
    </>
  );

  return (
    <section className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
      <BaseForm
        action="https://formspree.io/f/academy-enrollment"
        title="Enroll in Academy"
        subtitle="Learn YouTube growth, voiceover, digital marketing and video editing — in your language."
        buttonText="Submit Enrollment"
        extraFields={extraFields}
      />
    </section>
  );
}

'use client';

import { BaseForm } from '@/components/forms/BaseForm';

// Plan signup form — goes to /plans page (one per plan)
export function PlanSignupForm({ planName }: { planName: string }) {
  const extraFields = (
    <>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Channel / Company Name
        </label>
        <input
          name="channel_company"
          type="text"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          placeholder="Your channel or company name"
        />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Plan Selected
        </label>
        <input
          name="plan_selected"
          type="text"
          readOnly
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900"
          value={planName}
        />
      </div>
    </>
  );

  return (
    <BaseForm
      action="https://formspree.io/f/plan-signup"
      title={`Sign Up — ${planName} Plan`}
      subtitle="Join the Star Hindis Creator Network today."
      buttonText={`Get ${planName} Plan`}
      extraFields={extraFields}
    />
  );
}

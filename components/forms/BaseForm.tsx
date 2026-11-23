'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface BaseFormProps {
  action: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  extraFields?: React.ReactNode;
  onSuccess?: () => void;
}

export function BaseForm({
  action,
  title,
  subtitle,
  buttonText = 'Submit',
  extraFields,
  onSuccess,
}: BaseFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        onSuccess?.();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            placeholder="Your full name"
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            placeholder="you@example.com"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Phone Number
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          placeholder="+91 XXXXX XXXXX"
          onChange={handleChange}
        />
      </div>

      {extraFields && <div className="space-y-4">{extraFields}</div>}

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          placeholder="Tell us about yourself..."
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-4 rounded-xl text-sm font-semibold transition-all shadow-lg ${
          status === 'submitting'
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-500/40 hover:-translate-y-0.5'
        }`}
      >
        {status === 'submitting' ? 'Sending...' : buttonText}
      </button>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-800 text-sm">
          ✅ Thank you! Your message has been sent to starhindis.com@gmail.com. We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-800 text-sm">
          ⚠️ Something went wrong. Please try again or email us directly at starhindis.com@gmail.com
        </div>
      )}
    </form>
  );
}

import Link from 'next/link';
import { StarLogo, Wordmark } from '@/components/Logo';
import { baseMetadata } from '@/lib/seo';

export const metadata = baseMetadata('Page Not Found', 'The page you are looking for does not exist.');

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4 md:px-8">
        <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-8">
          <StarLogo size={48} />
        </div>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
          Page not found. The star you're looking for may have moved to a new channel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold shadow-xl shadow-brand-500/40 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <Link
            href="/channels"
            className="px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-900 font-semibold shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-0.5"
          >
            Browse Channels
          </Link>
        </div>
      </div>
    </div>
  );
}

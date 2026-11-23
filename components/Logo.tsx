'use client';

import { WORDMARKS } from '@/lib/wordmarks';
import { cn } from '@/lib/utils';

export function StarLogo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z"
        fill="url(#logoGradient)"
        filter="url(#logoGlow)"
      />
      <circle cx="12" cy="12" r="2" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

export function Wordmark({ language = 'en', className = '' }: { language?: string; className?: string }) {
  const text = (WORDMARKS as Record<string, string>)[language] || (WORDMARKS as Record<string, string>).en;
  return <span className={cn('font-display font-bold tracking-tight', className)}>{text}</span>;
}

import { Metadata } from 'next';

export const SITE = {
  name: 'Star Hindis',
  tagline: 'Where Every Indian Becomes a Digital Star.',
  taglineHi: 'जहां हर हिंदुस्तानी डिजिटल स्टार बंटा है।',
  description:
    "India's largest multilingual digital media & monetization ecosystem — 29 channels · 22 languages · Academy · Creator Network · Brand Portal · Sponsorships · Revenue Systems — sab ek jagah.",
  url: 'https://www.starhindis.com',
  ogImage: '/og-image.jpg',
  founder: {
    name: 'Mohammad Ishaq',
    handle: '@StarIshaaq',
    bio: 'The visionary behind Star Hindis.',
  },
  channelsCount: 29,
  languagesCount: 22,
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/channels', label: '23 Channels' },
  { href: '/academy', label: 'Academy' },
  { href: '/creator', label: 'Join as Creator' },
  { href: '/brands', label: 'Brand Portal' },
  { href: '/plans', label: 'Plans' },
  { href: '/founder', label: 'Founder' },
  { href: '/sacred', label: 'Sacred Channel' },
] as const;

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/StarHindis', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/StarHindis', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@StarHindis', icon: 'youtube' },
  { label: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbB4Rv1It5rwuKwvst1o', icon: 'message-circle' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/starhindis/', icon: 'linkedin' },
  { label: 'Threads', href: 'https://www.threads.net/@StarHindis', icon: 'threads' },
  { label: 'Linktree', href: 'https://linktr.ee/starhindis', icon: 'link' },
] as const;

export function baseMetadata(title?: string, desc?: string): Metadata {
  return {
    title: title ? `${title} | Star Hindis` : SITE.name,
    description: desc || SITE.description,
    metadataBase: new URL(SITE.url),
    openGraph: {
      title: title ? `${title} | Star Hindis` : SITE.name,
      description: desc || SITE.description,
      type: 'website',
      url: SITE.url,
      siteName: SITE.name,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
      locale: 'en_IN',
      alternateLocale: ['hi_IN', 'ur_PK'],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | Star Hindis` : SITE.name,
      description: desc || SITE.description,
      images: [SITE.ogImage],
    },
    robots: 'index, follow',
    authors: [{ name: SITE.founder.name }],
  };
}

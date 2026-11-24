import type { Metadata, Viewport } from 'next';
import { Rajdhani, Playfair_Display, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['400', '600', '700'],
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
});
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-devanagari',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Star Hindis — Complete Digital Media Ecosystem',
  description:
    "India's largest multilingual digital media & monetization ecosystem — 23 channels · 15+ languages · Academy · Creator Network · Brand Portal · Sponsorships · Revenue Systems.",
  openGraph: {
    siteName: 'Star Hindis',
    locale: 'en_IN',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9333ea',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head />
      <body className={`${rajdhani.variable} ${playfair.variable} ${notoDevanagari.variable} font-sans`}>
        {children}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-PXTF7C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7649377685423392"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

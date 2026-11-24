'use client';

import { useEffect, useState } from 'react';

interface AdSlotProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'leaderboard' | 'skyscraper';
  style?: React.CSSProperties;
}

const AD_SIZES: Record<string, string> = {
  auto: 'auto',
  rectangle: '300x250',
  leaderboard: '728x90',
  skyscraper: '160x600',
};

export function AdSlot({ adSlot, adFormat = 'auto', style }: AdSlotProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait for AdSense script to load
    const checkAds = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        setLoaded(true);
        clearInterval(checkAds);
        (window as any).adsbygoogle.push?.({});
      }
    }, 500);

    return () => clearInterval(checkAds);
  }, []);

  if (!loaded) {
    return <div className="h-32 w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">Ad loading...</div>;
  }

  return (
    <div
      style={{
        ...style,
        minHeight: adFormat === 'auto' ? '280px' : undefined,
        display: 'block',
      }}
      className="rounded-xl overflow-hidden"
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...(adFormat !== 'auto' && { width: AD_SIZES[adFormat].split('x')[0] + 'px', height: AD_SIZES[adFormat].split('x')[1] + 'px' }),
        }}
        data-ad-client="ca-pub-7649377685423392"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

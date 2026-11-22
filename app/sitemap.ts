import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.starhindis.com';
  const routes = [
    '',
    '/channels',
    '/academy',
    '/creator',
    '/brands',
    '/plans',
    '/founder',
    '/sacred',
    '/privacy',
    '/terms',
    '/disclaimer',
  ] as const;

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

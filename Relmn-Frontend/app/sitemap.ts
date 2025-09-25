import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relmn.com'
  const now = new Date()

  const routes = [
    '/',
    '/white-paper',
    '/login',
    '/signup',
    '/verify-otp',
    '/forgot-password',
    '/terms-of-service',
    '/privacy-policy',
    '/sla',
  ]

  return routes.map((route): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1.0 : 0.7,
  }))
}

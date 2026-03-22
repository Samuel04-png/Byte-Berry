import type { MetadataRoute } from 'next'
import { projects, siteConfig } from '@/data/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/work', '/services', '/products', '/contact'].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...projectRoutes]
}

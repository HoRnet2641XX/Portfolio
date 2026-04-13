import { site } from '@/data/site';
import { about } from '@/data/profile';
import type { PortfolioItem } from '@/data/portfolio';

/** Person schema for the homepage */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: about.name,
    alternateName: about.nameJa,
    jobTitle: about.role,
    url: site.url,
    email: `mailto:${site.socials.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: about.location,
    },
    sameAs: [site.socials.github, site.socials.twitter].filter(Boolean),
  };
}

/** WebSite schema */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'ja',
  };
}

/** BreadcrumbList for project detail pages */
export function breadcrumbJsonLd(item: PortfolioItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: site.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '作品一覧',
        item: `${site.url}/#works`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: item.title,
        item: `${site.url}/works/${item.id}/`,
      },
    ],
  };
}

/** CreativeWork schema for individual projects */
export function projectJsonLd(item: PortfolioItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: item.title,
    description: item.description,
    image: item.image,
    dateCreated: item.year,
    author: {
      '@type': 'Person',
      name: about.name,
    },
    keywords: item.tags.join(', '),
    url: `${site.url}/works/${item.id}/`,
  };
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';
import { site } from '@/data/site';
import { breadcrumbJsonLd, projectJsonLd } from '@/lib/jsonLd';
import { ProjectDetail } from '@/components/ProjectDetail';

export function generateStaticParams() {
  return portfolioData.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const item = portfolioData.find((p) => p.id === params.id);
  if (!item) return { title: 'Not Found' };

  const url = `${site.url}/works/${item.id}/`;

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      url,
      type: 'article',
      images: item.image ? [{ url: item.image, width: 1200, height: 630, alt: item.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function WorkPage({ params }: { params: { id: string } }) {
  const item = portfolioData.find((p) => p.id === params.id);
  if (!item) notFound();

  // prev / next navigation
  const currentIndex = portfolioData.findIndex((p) => p.id === params.id);
  const prev = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
  const next =
    currentIndex < portfolioData.length - 1
      ? portfolioData[currentIndex + 1]
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(item)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(item)) }}
      />
      <ProjectDetail item={item} prev={prev} next={next} />
    </>
  );
}

import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { ProjectDetail } from '@/components/ProjectDetail';

export function generateStaticParams() {
  return portfolioData.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const item = portfolioData.find((p) => p.id === params.id);
  if (!item) return { title: 'Not Found' };

  return {
    title: `${item.title} — ポートフォリオ`,
    description: item.description,
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

  return <ProjectDetail item={item} prev={prev} next={next} />;
}

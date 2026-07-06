import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/data/projects';
import { ProjectContent } from '@/components/projects/ProjectContent';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/features/CommandPalette';
import { CustomCursor } from '@/components/features/CustomCursor';

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Arin Parashar`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Arin Parashar`,
      description: project.tagline,
      url: `https://arinparashar.dev/projects/${project.slug}`,
      siteName: 'Arin Parashar',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <CommandPalette />
      <main className="relative z-10">
        <ProjectContent slug={project.slug} />
      </main>
      <Footer />
    </>
  );
}

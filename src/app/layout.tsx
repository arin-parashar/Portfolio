import type { Metadata } from 'next';
import { Geist_Mono, Press_Start_2P, VT323 } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const vt323 = VT323({
  variable: '--font-vt323',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Arin Parashar — Software Engineer & AI Engineer',
  description: 'Portfolio of Arin Parashar — Software Engineer specializing in AI, Computer Vision, Edge AI, Machine Learning, and Data Engineering. Building real-world intelligent systems.',
  keywords: ['Arin Parashar', 'Software Engineer', 'AI Engineer', 'Machine Learning', 'Computer Vision', 'Edge AI', 'Portfolio'],
  authors: [{ name: 'Arin Parashar' }],
  openGraph: {
    title: 'Arin Parashar — Software Engineer & AI Engineer',
    description: 'Building real-world intelligent systems. Specializing in AI, Computer Vision, Edge AI, and Data Engineering.',
    url: 'https://arinparashar.dev',
    siteName: 'Arin Parashar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arin Parashar — Software Engineer & AI Engineer',
    description: 'Building real-world intelligent systems.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${pressStart2P.variable} ${vt323.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

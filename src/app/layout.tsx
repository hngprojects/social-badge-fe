import type { Metadata } from 'next';
import './globals.css';
import { DM_Sans, Fraunces } from 'next/font/google';
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Social Badge — Digital Badge Builder',
    template: '%s | Social Badge',
  },
  description:
    'Create customisable digital badge templates that participants can personalise and share on social media.',
  openGraph: {
    title: 'Social Badge',
    description: 'Turn participants into active promoters with shareable digital badges.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${fraunces.variable} bg-page text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}

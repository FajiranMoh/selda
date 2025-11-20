import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'selda',
  description: 'A Next.js 15 + Tailwind + shadcn UI landing page built by Selda AI'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
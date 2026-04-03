import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next.js 16 rebuild of Remix Contacts V2',
  title: 'Next Contacts',
};

export default function RootLayout({ sidebar, content }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full flex-col sm:flex-row">
          {sidebar}
          <div className="h-2/3 w-full flex-1 px-16 py-8 sm:h-auto">{content}</div>
        </div>
      </body>
    </html>
  );
}

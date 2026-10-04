import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Bagalkote Yatra | Official Heritage & Tourism Portal',
  description: 'Explore the cradle of temple architecture in Bagalkote, Karnataka. Badami Cave Temples, UNESCO World Heritage site Pattadakal, Aihole, Kudalasangama, and Almatti Dam.',
  keywords: [
    'Bagalkote Yatra',
    'Bagalkote Tourism',
    'Badami Cave Temples',
    'Pattadakal UNESCO',
    'Aihole temples',
    'Kudalasangama',
    'Almatti Dam',
    'Banashankari temple',
    'Karnataka Tourism',
    'Chalukya architecture',
  ],
  authors: [{ name: 'Bagalkote District Tourism Administration' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#120f0d',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('bagalkote_theme') || 'dark';
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#faf6f0] dark:bg-[#0d0a08] text-[#261f1b] dark:text-[#f5ede6] antialiased selection:bg-sandstone-500 selection:text-white transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

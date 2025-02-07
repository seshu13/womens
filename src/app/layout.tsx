import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Trebound - Women\'s Day Special',
  description: 'Celebrate Women\'s Day with unique team building activities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-inter antialiased">
        <TheHeader />
        <div className="pt-20">
          {children}
        </div>
        <TheFooter />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#FF4C39',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#FF4C39',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
} 
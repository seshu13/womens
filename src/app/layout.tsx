import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import { Toaster } from 'react-hot-toast';
import { ProposalProvider } from '@/context/ProposalContext';
import Script from 'next/script';

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
  title: 'Trebound - Corporate Team Building & Events | Transform Your Team',
  description: 'Elevate your team with Trebound\'s transformative corporate events and team-building experiences. From leadership summits to wellness retreats, create lasting impact.',
  keywords: 'corporate events, team building, leadership summit, wellness retreat, annual day, cultural festival, corporate training',
  openGraph: {
    title: 'Trebound - Transform Your Team with Engaging Corporate Events',
    description: 'Create unforgettable team experiences with our expertly crafted corporate events and team-building activities.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        width: 1200,
        height: 630,
        alt: 'Trebound Corporate Team Building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trebound - Corporate Team Building & Events',
    description: 'Transform your team with our engaging corporate events and team-building experiences.',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} font-sans`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
      </head>
      <body className="font-inter antialiased">
        <ProposalProvider>
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
        </ProposalProvider>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
} 
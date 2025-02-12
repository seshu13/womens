import { Metadata } from 'next';

const metadata: Metadata = {
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
};

export default metadata; 
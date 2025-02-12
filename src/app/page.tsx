'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import Script from 'next/script';

const images = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
  womensDay: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2940&auto=format&fit=crop",
  features: [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop"
  ],
  events: {
    annualDay: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2940&auto=format&fit=crop",
    leadership: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    wellness: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
    cultural: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2940&auto=format&fit=crop"
  }
};

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trebound",
    "description": "Corporate team building and events company specializing in transformative experiences",
    "url": "https://trebound.com",
    "offers": [
      {
        "@type": "Offer",
        "name": "Annual Day Extravaganza",
        "description": "Transform your annual day into an unforgettable celebration of achievements, culture, and team spirit.",
        "category": "Team Celebration"
      },
      {
        "@type": "Offer",
        "name": "Leadership Summit",
        "description": "An immersive experience combining strategic workshops, thought leadership sessions, and team-building activities.",
        "category": "Professional Development"
      },
      {
        "@type": "Offer",
        "name": "Wellness Retreat",
        "description": "Holistic corporate wellness programs featuring mindfulness sessions, fitness activities, and stress management workshops.",
        "category": "Team Wellness"
      },
      {
        "@type": "Offer",
        "name": "Cultural Festival",
        "description": "Celebrate diversity and inclusion through interactive cultural experiences, global cuisine, and collaborative activities.",
        "category": "Cultural Experience"
      }
    ]
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#F9F9F9] font-inter" role="main">
      {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Hero">
          <div className="absolute inset-0">
                <Image
              src={images.hero}
              alt="Professional team collaborating in a modern office environment"
                  fill
              className="object-cover opacity-10"
                  priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#053257]/5 via-white to-[#FFB473]/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="font-dm-sans text-5xl lg:text-6xl font-bold text-[#053257] mb-6">
                  Transformative Corporate
                  <span className="text-[#FF4C39] block mt-2">Team Experiences</span>
                </h1>
                <p className="text-xl text-[#053257]/80 max-w-2xl mx-auto">
                  Elevate your team&apos;s potential with our expertly crafted corporate events and team-building experiences.
                </p>
            </div>
          </div>
        </div>
      </section>

        {/* Featured Event Section */}
        <section className="py-20 bg-white" aria-label="Featured Event">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4C39]/10 text-[#FF4C39] text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4C39] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4C39]"></span>
                  </span>
                  Featured Event
                </span>
            </div>

              {/* Women's Day Event Card */}
              <div className="bg-gradient-to-br from-[#053257] to-[#053257]/90 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm">
                        <span>🎨</span>
                        <span className="text-sm font-medium">Women&apos;s Day Special</span>
                    </div>
                      <h2 className="font-dm-sans text-4xl lg:text-5xl font-bold text-white">
                        Swing, Sip & 
                        <span className="block text-[#FFB473] mt-2">Strengthen Bonds</span>
                      </h2>
                      <p className="text-white/80 text-lg">
                        Join us for an extraordinary Women&apos;s Day celebration designed to inspire, connect, and empower your team through creative activities and meaningful experiences.
                      </p>
                      <div>
                        <Link 
                          href="/womens-day-2025"
                          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FF4C39] text-white font-medium hover:bg-[#FF4C39]/90 transition-all duration-300"
                        >
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                        </Link>
            </div>
                    </div>
                  </div>
                  <div className="relative lg:h-full h-64">
                    <Image
                      src={images.womensDay}
                      alt="Women's Day Celebration - Professional women collaborating"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#053257] via-transparent to-transparent lg:block hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Example Events Section */}
        <section className="py-20 bg-[#F9F9F9]" aria-label="Signature Experiences">
        <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h2 className="font-dm-sans text-4xl font-bold text-[#053257] mb-6">
                  Signature Experiences
              </h2>
                <p className="text-[#053257]/80 text-lg max-w-2xl mx-auto">
                  Discover our range of transformative corporate events designed to inspire, connect, and elevate your team
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8" role="list">
                {[
                  {
                    title: "Annual Day Extravaganza",
                    description: "Transform your annual day into an unforgettable celebration of achievements, culture, and team spirit. Features awards ceremonies, team performances, and interactive entertainment.",
                    tag: "Team Celebration"
                  },
                  {
                    title: "Leadership Summit",
                    description: "An immersive experience combining strategic workshops, thought leadership sessions, and team-building activities designed to nurture tomorrow's leaders.",
                    tag: "Professional Development"
                  },
                  {
                    title: "Wellness Retreat",
                    description: "Holistic corporate wellness programs featuring mindfulness sessions, fitness activities, and stress management workshops for a healthier, more productive team.",
                    tag: "Team Wellness"
                  },
                  {
                    title: "Cultural Festival",
                    description: "Celebrate diversity and inclusion through interactive cultural experiences, global cuisine, and collaborative activities that bring teams closer together.",
                    tag: "Cultural Experience"
                  }
                ].map((event, index) => (
                  <article 
                    key={index} 
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
                    role="listitem"
                  >
                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF4C39]/10 text-[#FF4C39] text-sm font-medium" role="tag">
                        {event.tag}
                      </span>
                  </div>
                    <h3 className="font-dm-sans text-2xl font-bold text-[#053257] mb-3 group-hover:text-[#FF4C39] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-[#053257]/70 mb-6">
                      {event.description}
                    </p>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-sm text-[#053257]/60 hover:text-[#FF4C39] transition-colors flex items-center gap-2 group-hover:text-[#FF4C39]"
                      aria-label={`Request proposal for ${event.title}`}
                    >
                      Request Proposal
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#F9F9F9]" aria-label="Why Choose Trebound">
        <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-dm-sans text-4xl font-bold text-[#053257] mb-6">
                Why Choose Trebound?
              </h2>
                <p className="text-[#053257]/80 text-lg max-w-2xl mx-auto">
                  We create memorable experiences that transform teams and drive lasting impact
              </p>
            </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Expert-Led Experiences',
                    description: 'Curated and facilitated by industry professionals who understand corporate dynamics',
                    icon: '🎯',
                    image: images.features[0]
                  },
                  {
                    title: 'Customized Solutions',
                    description: 'Tailored experiences that align with your team&apos;s objectives and company culture',
                    icon: '✨',
                    image: images.features[1]
                  },
                  {
                    title: 'Measurable Impact',
                    description: 'Focus on outcomes that strengthen team bonds and drive organizational success',
                    icon: '📈',
                    image: images.features[2]
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{feature.icon}</span>
                        <h3 className="text-xl font-bold text-[#053257] group-hover:text-[#FF4C39] transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-[#053257]/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-white" aria-label="Get Started">
          <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-dm-sans text-3xl lg:text-4xl font-bold text-[#053257] mb-6">
                Ready to Create an Unforgettable Team Experience?
          </h2>
              <p className="text-[#053257]/80 text-lg mb-8">
                Let&apos;s design the perfect event that aligns with your team&apos;s goals and aspirations
              </p>
                <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FF4C39] text-white font-medium hover:bg-[#FF4C39]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
                >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
          </div>
        </div>
      </section>
      </main>
      <ContactModal 
        isOpen={isContactModalOpen}
        closeModal={() => setIsContactModalOpen(false)}
      />
    </>
  );
} 
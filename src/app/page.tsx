'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useProposal } from '@/hooks/useProposal';
import FloatingActionButton from '@/components/FloatingActionButton';
import ProposalModal from '@/components/ProposalModal';
import { TeamIcon, WellnessIcon, CreativityIcon, LeadershipIcon, CompanyIcon, ActivityIcon } from '@/components/icons';
import { useState } from 'react';

interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

type ActivityCategory = 'indoor' | 'outdoor' | 'virtual' | 'workshops';

const activities: Record<ActivityCategory, Activity[]> = {
  indoor: [
    {
      id: 'art-workshop',
      title: 'Art Workshop',
      description: 'Relax, unwind, and paint your ideas to life! This guided art session helps de-stress, inspire creativity, and build teamwork in a fun, informal setting. No experience needed—just bring your imagination!',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80'
    },
    {
      id: 'lipstick-making',
      title: 'Lipstick Making Workshop',
      description: 'Create your own signature lipstick shade in this hands-on beauty workshop. Perfect for teams looking to mix fun with creativity!',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80',
      badge: 'Coming Soon'
    },
    {
      id: 'wellness',
      title: 'Wellness & Mindfulness',
      description: 'Take a break from work stress with mindful, art-based activities designed to refresh your mind and enhance well-being. Perfect for corporate teams seeking balance!',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80'
    }
  ],
  outdoor: [
    {
      id: 'golf-training',
      title: 'Golf Training',
      description: 'Master the art of precision and patience with this beginner-friendly golf session. A great way to bond with colleagues, build strategy skills, and enjoy a refreshing outdoor experience.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80'
    },
    {
      id: 'bike-riding',
      title: 'Bike Riding Classes',
      description: 'Whether you\'re a first-time rider or looking to refine your motorcycle skills, our women-centric biking classes provide a safe and supportive environment to build confidence on two wheels.',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
    },
    {
      id: 'wine-tour',
      title: 'Wine Tour',
      description: 'Step into a stunning vineyard for a guided wine-tasting experience. Learn about winemaking, explore the estate, and indulge in a relaxing, sophisticated day out.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80'
    }
  ],
  virtual: [
    {
      id: 'virtual-cooking',
      title: 'Virtual Cooking Class',
      description: 'Join our expert chefs online for an interactive cooking session. Learn new recipes, cooking techniques, and enjoy a delicious meal together, virtually!',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80'
    },
    {
      id: 'virtual-yoga',
      title: 'Virtual Yoga Session',
      description: 'Experience the benefits of yoga from anywhere. Our expert instructors will guide you through poses and meditation techniques for a refreshing mind-body experience.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80'
    },
    {
      id: 'virtual-team-building',
      title: 'Virtual Team Building',
      description: 'Engage in fun online activities designed to strengthen team bonds. From virtual escape rooms to online trivia, there\'s something for everyone!',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
    }
  ],
  workshops: [
    {
      id: 'self-defense',
      title: 'Self-Defense Program',
      description: 'Learn practical self-defense techniques from expert instructors. Build confidence, improve personal safety, and develop essential skills that last a lifetime!',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
    },
    {
      id: 'leadership-workshop',
      title: 'Leadership Workshop',
      description: 'Develop essential leadership skills through interactive sessions. Perfect for aspiring leaders and those looking to enhance their management capabilities.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      description: 'Master the art of effective communication through practical exercises and expert guidance. Enhance your professional and personal relationships.',
      image: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80'
    }
  ]
};

export default function Home() {
  const {
    selectedActivities,
    showProposalModal,
    hasSelectedActivities,
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    submitProposal
  } = useProposal();

  const [activeTab, setActiveTab] = useState<ActivityCategory>('indoor');

  return (
    <main className="bg-[#FDF8F7]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Special Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB47333] backdrop-blur-sm">
                <span className="animate-bounce">🎨</span>
                <span className="text-[#FF4C39] font-inter text-base">Women&apos;s Day Special</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-dm-sans">
                  <span className="text-[#053257] text-5xl lg:text-6xl font-bold leading-tight">
                    Swing, Sip &
                  </span>
                  <div className="text-[#FF4C39] text-5xl lg:text-6xl font-bold mt-2">
                    Strengthen Bonds
                  </div>
              </h1>
                <h2 className="text-[#053257] text-3xl font-dm-sans">
                  Celebrate Women&apos;s Day in Style!
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#053257CC] text-lg font-inter max-w-xl">
                Unleash creativity, build confidence, and have fun with our special Women&apos;s Day corporate team-building activities!
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[#053257CC] text-base font-inter">
                  <span className="mr-2">✨</span>
                  Unique Experiences
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[#053257CC] text-base font-inter">
                  <span className="mr-2">🎯</span>
                  Fun & Engaging
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-[#053257CC] text-base font-inter">
                  <span className="mr-2">👥</span>
                  Perfect for Corporate Teams
                </div>
              </div>

              {/* CTA Button */}
                <Link
                href="#reserve"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#FF4C39] text-white font-inter text-base hover:bg-[#FF4C39]/90 transition-all shadow-lg hover:-translate-y-0.5 transform"
                >
                Reserve Your Spot
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-[#FFE4E1] aspect-[4/3]">
                <Image
                  src="/womens-day-team.jpg"
                  alt="Women's Day Team Building Activities"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <h2 className="font-dm-sans text-3xl font-bold text-[#053257] mb-10 text-center">
                How to Create Your Proposal
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-14 h-14 bg-[#FFB47333] rounded-full flex items-center justify-center mx-auto text-[#FF4C39] text-2xl font-bold">1</div>
                  <h3 className="font-dm-sans font-bold text-[#053257] text-lg">Select Activities</h3>
                  <p className="text-[#053257CC] text-base font-inter">Choose the activities that interest your team by clicking on the cards below</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-14 h-14 bg-[#FFB47333] rounded-full flex items-center justify-center mx-auto text-[#FF4C39] text-2xl font-bold">2</div>
                  <h3 className="font-dm-sans font-bold text-[#053257] text-lg">Review Selection</h3>
                  <p className="text-[#053257CC] text-base font-inter">Click the floating button to review your selected activities</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-14 h-14 bg-[#FFB47333] rounded-full flex items-center justify-center mx-auto text-[#FF4C39] text-2xl font-bold">3</div>
                  <h3 className="font-dm-sans font-bold text-[#053257] text-lg">Submit Details</h3>
                  <p className="text-[#053257CC] text-base font-inter">Fill in your contact information and we&apos;ll get back to you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-dm-sans text-4xl lg:text-5xl font-bold text-[#053257] mb-4">
                Featured Activities – Choose Your Perfect Experience!
              </h2>
              <p className="text-[#053257CC] text-xl font-inter max-w-2xl mx-auto">
                Give your team the gift of experiences that matter!
              </p>
            </div>

            {/* Activity Type Tabs */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                <div className="grid grid-cols-4 gap-2">
                  <button 
                    onClick={() => setActiveTab('indoor')}
                    className={`relative py-4 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'indoor'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'indoor' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Indoor</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'indoor' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('outdoor')}
                    className={`relative py-4 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'outdoor'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'outdoor' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span>Outdoor</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'outdoor' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('virtual')}
                    className={`relative py-4 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'virtual'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'virtual' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <span>Virtual</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'virtual' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('workshops')}
                    className={`relative py-4 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'workshops'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'workshops' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span>Workshops</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'workshops' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities[activeTab].map((activity) => (
                <div 
                  key={activity.id}
                  className={`group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                    selectedActivities.includes(activity.id) ? 'ring-2 ring-[#FF4C39]' : ''
                  }`}
                  onClick={() => toggleActivity(activity.id)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
              <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Activity Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-[#FFB47333] rounded-2xl">
                        <ActivityIcon id={activity.id} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#053257] font-dm-sans">
                          {activity.title}
                        </h3>
                        {activity.badge && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF4C39] text-white text-sm font-medium mt-2">
                            {activity.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#053257CC] font-inter">
                      {activity.description}
                    </p>

                    {/* Selection Indicator */}
                    <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedActivities.includes(activity.id)
                        ? 'border-[#FF4C39] bg-[#FF4C39]'
                        : 'border-[#053257CC] bg-white'
                    }`}>
                      {selectedActivities.includes(activity.id) && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Celebrate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-dm-sans text-4xl lg:text-5xl font-bold text-[#053257] mb-4">
                Why Celebrate Women&apos;s Day with Trebound?
            </h2>
              <p className="text-[#053257CC] text-xl font-inter max-w-3xl mx-auto">
                Women are the heart of every organization. This Women&apos;s Day, go beyond just celebrations—invest in meaningful experiences that foster creativity, empowerment, and teamwork.
            </p>
          </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Strengthen Team Bonds */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFB47333] rounded-2xl">
                    <TeamIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#053257] font-dm-sans mb-2">
                      Strengthen Team Bonds
                    </h3>
                    <p className="text-[#053257CC] font-inter">
                      Build stronger connections and foster collaboration through shared experiences and meaningful interactions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Boost Confidence & Well-being */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFB47333] rounded-2xl">
                    <WellnessIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#053257] font-dm-sans mb-2">
                      Boost Confidence & Well-being
                    </h3>
                    <p className="text-[#053257CC] font-inter">
                      Empower your team with activities that enhance personal growth and promote mental well-being.
                    </p>
                  </div>
                </div>
              </div>

              {/* Encourage Creativity & Fun */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFB47333] rounded-2xl">
                    <CreativityIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#053257] font-dm-sans mb-2">
                      Encourage Creativity & Fun
                    </h3>
                    <p className="text-[#053257CC] font-inter">
                      Unlock creative potential and foster innovation through engaging and enjoyable team activities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Promote Skill-Building & Leadership */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFB47333] rounded-2xl">
                    <LeadershipIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#053257] font-dm-sans mb-2">
                      Promote Skill-Building & Leadership
                    </h3>
                    <p className="text-[#053257CC] font-inter">
                      Develop essential skills and leadership qualities through expertly crafted learning experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Who Is This For?
              </h2>
              <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
                Empower, engage, and celebrate Women&apos;s Day with experiences designed for connection, growth, and well-being
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Corporate Teams Card */}
              <div className="bg-gradient-to-br from-white to-secondary-light/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TeamIcon />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-secondary">
                      Corporate Teams & HR Managers
                    </h3>
                    <div className="h-px w-16 bg-gradient-to-r from-primary to-primary-light"></div>
                    <p className="text-secondary/70 leading-relaxed">
                      Create a meaningful Women&apos;s Day celebration with engaging team-building experiences that inspire and unite your employees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Companies Card */}
              <div className="bg-gradient-to-br from-white to-secondary-light/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CompanyIcon />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-secondary">
                      Companies Championing Women&apos;s Empowerment
                </h3>
                    <div className="h-px w-16 bg-gradient-to-r from-primary to-primary-light"></div>
                    <p className="text-secondary/70 leading-relaxed">
                      Invest in activities that promote confidence, collaboration, and well-being, fostering a supportive workplace culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-light/5 via-white to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Why Choose Trebound?
              </h2>
              <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies who trust us to deliver exceptional team experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {indicator.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-secondary">{indicator.title}</h3>
                      <div className="h-px w-12 bg-gradient-to-r from-primary to-primary-light my-3"></div>
                      <p className="text-secondary/70 text-sm">{indicator.description}</p>
                    </div>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuOTEgMEg2MHYxLjFBNjAgNjAgMCAwIDAgLjEgMGg1OS44MXpNNjAgNTguOVY2MEg1OS45MUE2MCA2MCAwIDAgMCAuMSA2MGg1OS44MXYtMS4xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] bg-[length:20px_20px] opacity-50"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main content */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                <span className="block mb-2">Celebrate Women&apos;s Day</span>
                <span className="relative inline-block">
                  With Unique & Engaging Activities!
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
                </span>
          </h2>

              <p className="text-xl text-secondary/80 mb-10 mt-6 font-display">
                Book Now to Secure Your Team&apos;s Experience!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#reserve"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform group"
                >
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
          <Link
                  href="#featured-activities"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-all duration-300"
          >
                  View Activities
          </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton
        show={hasSelectedActivities}
        count={selectedActivities.length}
        onClick={openProposalModal}
      />

      {/* Proposal Modal */}
      <ProposalModal
        show={showProposalModal}
        selectedActivities={selectedActivities}
        onClose={closeProposalModal}
        onSubmit={submitProposal}
      />
    </main>
  );
}

const trustIndicators = [
  {
    title: 'Trusted by 500+ Companies',
    description: 'Building lasting relationships through exceptional experiences',
    icon: <TeamIcon />,
  },
  {
    title: 'Expert-Led Activities',
    description: 'Guided by professionals with years of experience',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
  },
  {
    title: 'Tailored Experiences',
    description: 'Customized to match your team\'s unique needs',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    description: 'Consistently delivering memorable experiences',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
]; 
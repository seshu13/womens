'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useProposalContext } from '@/context/ProposalContext';
import FloatingActionButton from '@/components/FloatingActionButton';
import ProposalModal from '@/components/ProposalModal';
import { TeamIcon, WellnessIcon, CreativityIcon, LeadershipIcon, CompanyIcon } from '@/components/icons';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';
import ActivityDetailModal from '@/components/ActivityDetailModal';
import SuccessModal from '@/components/SuccessModal';

// Create Supabase client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Activity {
  id: string;
  title: string;
  description: string;
  image_url: string;
  image: string; // For UI compatibility
  category: ActivityCategory;
  badge?: string;
  is_active: boolean;
  created_at: string;
}

type ActivityCategory = 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker';

export default function Home() {
  const [activities, setActivities] = useState<Record<ActivityCategory, Activity[]>>({
    leadership: [],
    'team-building': [],
    virtual: [],
    experiences: [],
    speaker: []
  });
  const [selectedDetailActivity, setSelectedDetailActivity] = useState<Activity | null>(null);

  const {
    selectedActivities,
    showProposalModal,
    showSuccessModal,
    hasSelectedActivities,
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    closeSuccessModal,
    submitProposal
  } = useProposalContext();

  const [activeTab, setActiveTab] = useState<ActivityCategory>('leadership');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const { data, error } = await supabase
          .from('activities')
          .select('*')
          .eq('is_active', true);

        if (error) {
          throw error;
        }

        // Group activities by category
        const groupedActivities = (data || []).reduce((acc: Record<ActivityCategory, Activity[]>, activity: Database['public']['Tables']['activities']['Row']) => {
          if (!acc[activity.category]) {
            acc[activity.category] = [];
          }
          acc[activity.category].push({
            ...activity,
            image: activity.image_url // Map image_url to image for UI compatibility
          } as Activity);
          return acc;
        }, {
          leadership: [],
          'team-building': [],
          virtual: [],
          experiences: [],
          speaker: []
        });

        setActivities(groupedActivities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchActivities();
  }, []);

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
                <div className="w-6 h-6 relative overflow-hidden">
                  <span className="absolute inset-0 animate-avatar-sequence">
                    👩‍💼
                  </span>
                  <span className="absolute inset-0 animate-avatar-sequence [animation-delay:2s]">
                    👩‍💻
                  </span>
                  <span className="absolute inset-0 animate-avatar-sequence [animation-delay:4s]">
                    👩‍🎨
                  </span>
                  <span className="absolute inset-0 animate-avatar-sequence [animation-delay:6s]">
                    👩‍⚕️
                  </span>
                </div>
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
                <button
                onClick={openProposalModal}
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#FF4C39] text-white font-inter text-base hover:bg-[#FF4C39]/90 transition-all shadow-lg hover:-translate-y-0.5 transform"
                >
                Reserve Your Spot
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-[#FFE4E1] aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Women's Day Team Building Activities"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Add a subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4C39]/20 to-transparent"></div>
              </div>
              {/* Add decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFB473]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF4C39]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              {/* Hover Trigger */}
              <div className="text-center cursor-help">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB47333] backdrop-blur-sm hover:bg-[#FFB47355] transition-all">
                  <svg className="w-5 h-5 text-[#FF4C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#FF4C39] font-inter text-base">How to make a proposal?</span>
                </div>
              </div>

              {/* Hidden Content that appears on hover */}
              <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out absolute left-0 right-0 z-10 mt-2">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#FFB47333]">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-[#FFB47333] rounded-full flex items-center justify-center mx-auto text-[#FF4C39] text-xl font-bold">1</div>
                      <h3 className="font-dm-sans font-bold text-[#053257] text-lg">Select Activities</h3>
                      <p className="text-[#053257CC] text-sm font-inter">Choose activities that interest your team from our curated selection</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-[#FFB47333] rounded-full flex items-center justify-center mx-auto text-[#FF4C39] text-xl font-bold">2</div>
                      <h3 className="font-dm-sans font-bold text-[#053257] text-lg">Review Selection</h3>
                      <p className="text-[#053257CC] text-sm font-inter">Check your selected activities in the floating review button</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-[#FFB47333] rounded-full flex items-center justify-center mx-auto text-[#FF4C39] text-xl font-bold">3</div>
                      <h3 className="font-dm-sans font-bold text-[#053257] text-lg">Submit Details</h3>
                      <p className="text-[#053257CC] text-sm font-inter">Fill in your information and we&apos;ll get back to you promptly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder space */}
              <div className="h-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-white">
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
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  <button 
                    onClick={() => setActiveTab('leadership')}
                    className={`relative py-3 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'leadership'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm flex-1'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50 flex-1'
                    } min-w-[120px]`}
                  >
                    <div className="flex flex-col items-center gap-1 p-1">
                      <svg className={`w-5 h-5 ${activeTab === 'leadership' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM12 12l-10-5 10 5 10-5-10 5zM12 17l-10-5 10 5 10-5-10 5z" />
                      </svg>
                      <span className="text-xs sm:text-sm whitespace-nowrap">Leadership</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'leadership' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('team-building')}
                    className={`relative py-3 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'team-building'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm flex-1'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50 flex-1'
                    } min-w-[120px]`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'team-building' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-xs sm:text-sm whitespace-nowrap">Team Building</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'team-building' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('virtual')}
                    className={`relative py-3 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'virtual'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm flex-1'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50 flex-1'
                    } min-w-[120px]`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'virtual' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z M12 8v.01M12 12v.01M12 16v.01" />
                      </svg>
                      <span className="text-xs sm:text-sm whitespace-nowrap">Virtual</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'virtual' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('experiences')}
                    className={`relative py-3 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'experiences'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm flex-1'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50 flex-1'
                    } min-w-[120px]`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className={`w-5 h-5 ${activeTab === 'experiences' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span className="text-xs sm:text-sm whitespace-nowrap">Experiences</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'experiences' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('speaker')}
                    className={`relative py-3 px-3 rounded-xl font-dm-sans font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === 'speaker'
                        ? 'bg-[#FFB47333] text-[#053257] shadow-sm flex-1'
                        : 'bg-white text-[#053257]/70 hover:bg-[#FFB47333]/50 flex-1'
                    } min-w-[120px]`}
                  >
                    <div className="flex flex-col items-center gap-1 p-1">
                      <svg className={`w-5 h-5 ${activeTab === 'speaker' ? 'text-[#FF4C39]' : 'text-[#053257]/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      <span className="text-xs sm:text-sm whitespace-nowrap">Speaker Sessions</span>
                    </div>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF4C39] transform transition-transform duration-300 ${
                      activeTab === 'speaker' ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-200 h-64 rounded-t-3xl"></div>
                    <div className="p-6 bg-white rounded-b-3xl">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                ))
              ) : activities[activeTab]?.map((activity) => (
                <div 
                  key={activity.id}
                  className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
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
                    {/* Activity Title */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#053257] font-dm-sans">
                        {activity.title}
                      </h3>
                      {activity.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF4C39] text-white text-sm font-medium mt-2">
                          {activity.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[#053257CC] font-inter mb-4">
                      {activity.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDetailActivity(activity);
                        }}
                        className="text-[#FF4C39] hover:text-[#FF4C39]/80 font-medium text-sm flex items-center gap-1"
                      >
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleActivity(activity.title);
                        }}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedActivities.includes(activity.title)
                            ? 'border-[#FF4C39] bg-[#FF4C39]'
                            : 'border-[#053257CC] bg-white hover:border-[#FF4C39]'
                        }`}
                      >
                        {selectedActivities.includes(activity.title) && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activity Detail Modal */}
      <ActivityDetailModal
        show={!!selectedDetailActivity}
        onClose={() => setSelectedDetailActivity(null)}
        onSelect={toggleActivity}
        isSelected={selectedDetailActivity ? selectedActivities.includes(selectedDetailActivity.title) : false}
        activity={selectedDetailActivity ? {
          id: selectedDetailActivity.id,
          title: selectedDetailActivity.title,
          description: selectedDetailActivity.description,
          image_url: selectedDetailActivity.image_url,
          category: selectedDetailActivity.category,
          badge: selectedDetailActivity.badge,
          duration: "1-2 hours",
          group_size_min: 5,
          group_size_max: 20,
          highlights: [
            "Interactive and engaging sessions",
            "Professional facilitators",
            "All materials included",
            "Customizable to your team's needs"
          ],
          is_active: selectedDetailActivity.is_active,
          created_at: selectedDetailActivity.created_at
        } : undefined}
      />

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
      <section id="why-us" className="py-16 lg:py-20 bg-gradient-to-br from-primary-light/5 via-white to-secondary-light">
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
                <button
                  onClick={openProposalModal}
                  className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform group"
                >
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <Link
                  href="#activities"
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

      {/* Success Modal */}
      <SuccessModal 
        show={showSuccessModal}
        onClose={closeSuccessModal}
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

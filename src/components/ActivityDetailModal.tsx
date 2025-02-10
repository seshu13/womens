'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Create Supabase client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ActivityDetailModalProps {
  show: boolean;
  onClose: () => void;
  onSelect?: (title: string) => void;
  isSelected?: boolean;
  activity?: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    category: 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker';
    badge?: string;
    duration?: string;
    group_size_min?: number;
    group_size_max?: number;
    highlights?: string[];
    is_active: boolean;
    created_at: string;
  };
}

export default function ActivityDetailModal({
  show,
  onClose,
  onSelect,
  isSelected,
  activity: initialActivity
}: ActivityDetailModalProps) {
  const [activity, setActivity] = useState(initialActivity);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (show && initialActivity?.id) {
      const fetchActivityDetails = async () => {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from('activities')
            .select('*')
            .eq('id', initialActivity.id)
            .single();

          if (error) throw error;
          if (data) setActivity(data);
        } catch (error) {
          console.error('Error fetching activity details:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchActivityDetails();
    }
  }, [show, initialActivity?.id]);

  // Real-time subscription for activity updates
  useEffect(() => {
    if (!show || !initialActivity?.id) return;

    const subscription = supabase
      .channel(`activity-${initialActivity.id}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'activities',
        filter: `id=eq.${initialActivity.id}`
      }, (payload) => {
        if (payload.new) {
          setActivity(payload.new as typeof initialActivity);
        }
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [show, initialActivity?.id]);

  if (!activity) return null;

  const categoryLabels = {
    'leadership': 'Leadership Development',
    'team-building': 'Team Building',
    'virtual': 'Virtual Experience',
    'experiences': 'Unique Experience',
    'speaker': 'Speaker Session'
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-[2rem] bg-white shadow-2xl transition-all">
                {/* Loading overlay */}
                {loading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF4C39] border-t-transparent"></div>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative w-full h-[300px]">
                  <Image
                    src={activity.image_url}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Close Button - Absolute positioned on image */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                  >
                    <svg className="w-6 h-6 text-[#053257]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content Section with updated scrollbar */}
                <div className="p-8 max-h-[60vh] overflow-y-auto 
                  [&::-webkit-scrollbar]:w-2.5
                  [&::-webkit-scrollbar-track]:bg-[#F9F9F9]
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gradient-to-b 
                  [&::-webkit-scrollbar-thumb]:from-[#05325733] 
                  [&::-webkit-scrollbar-thumb]:to-[#05325722]
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:border-2
                  [&::-webkit-scrollbar-thumb]:border-white
                  hover:[&::-webkit-scrollbar-thumb]:bg-gradient-to-b
                  hover:[&::-webkit-scrollbar-thumb]:from-[#05325755]
                  hover:[&::-webkit-scrollbar-thumb]:to-[#05325744]
                  [scrollbar-width]:thin
                  [scrollbar-color]:_[#053257]_[#F9F9F9]
                  transition-all duration-300">
                  {/* Category & Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FFB47333] text-[#FF4C39] text-sm font-medium">
                      {categoryLabels[activity.category]}
                    </span>
                    {activity.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#FF4C39] text-white text-sm font-medium">
                        {activity.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <Dialog.Title as="h3" className="text-3xl font-bold text-[#053257] font-dm-sans leading-tight mb-6">
                    {activity.title}
                  </Dialog.Title>

                  {/* Key Info Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {activity.duration && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FDF8F7]">
                        <div className="w-8 h-8 rounded-lg bg-[#FFB47333] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#FF4C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-[#053257]/60 font-medium">Duration</p>
                          <p className="text-sm text-[#053257] font-bold">{activity.duration}</p>
                        </div>
                      </div>
                    )}
                    
                    {(activity.group_size_min || activity.group_size_max) && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FDF8F7]">
                        <div className="w-8 h-8 rounded-lg bg-[#FFB47333] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#FF4C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-[#053257]/60 font-medium">Group Size</p>
                          <p className="text-sm text-[#053257] font-bold">
                            {activity.group_size_min && activity.group_size_max 
                              ? `${activity.group_size_min}-${activity.group_size_max} participants`
                              : activity.group_size_min
                              ? `Min ${activity.group_size_min} participants`
                              : `Max ${activity.group_size_max} participants`
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description and Highlights Side by Side */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-bold text-[#053257] font-dm-sans mb-3">
                        About This Activity
                      </h4>
                      <p className="text-[#053257]/80 text-base leading-relaxed font-inter">
                        {activity.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    {activity.highlights && activity.highlights.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-[#053257] font-dm-sans mb-3">
                          What to Expect
                        </h4>
                        <div className="space-y-2">
                          {activity.highlights.map((highlight, index) => (
                            <div 
                              key={index} 
                              className="flex items-start gap-2 py-1.5 px-2 rounded-lg hover:bg-[#FDF8F7] transition-colors duration-300 group"
                            >
                              <div className="w-5 h-5 rounded-lg bg-[#FFB47333] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4C39] transition-colors duration-300">
                                <svg className="w-3 h-3 text-[#FF4C39] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-[#053257]/80 text-sm font-inter">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    {onSelect && (
                      <button
                        onClick={() => onSelect(activity.title)}
                        className={`w-full px-6 py-4 rounded-xl font-medium text-base transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#FF4C39] text-white hover:bg-[#FF4C39]/90 shadow-lg shadow-[#FF4C39]/20'
                            : 'bg-[#FDF8F7] text-[#FF4C39] hover:bg-[#FFB47333]'
                        }`}
                      >
                        {isSelected ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Activity Selected
                          </span>
                        ) : (
                          'Select This Activity'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

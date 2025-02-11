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

interface Activity {
  id: string;
  title: string;
  description: string;
  image_url: string;
  video_url?: string;
  category: string;
  badge?: string;
  duration?: string;
  group_size_min?: number;
  group_size_max?: number;
  highlights?: string[];
  is_active: boolean;
  created_at: string;
}

interface ActivityDetailModalProps {
  show: boolean;
  onClose: () => void;
  activity?: Activity;
  onSelect: (title: string) => void;
  isSelected: boolean;
}

export default function ActivityDetailModal({
  show,
  onClose,
  activity,
  onSelect,
  isSelected,
}: ActivityDetailModalProps) {
  const [loading, setLoading] = useState(false);

  // Reset video state when modal closes
  useEffect(() => {
    if (!show) {
      // Clean up any necessary state
    }
  }, [show]);

  useEffect(() => {
    if (show && activity?.id) {
      const fetchActivityDetails = async () => {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from('activities')
            .select('*')
            .eq('id', activity.id)
            .single();

          if (error) throw error;
          if (data) {
            // Update the activity state with the fetched data
            // Note: This is a simplified implementation. You might want to merge the fetched data with the existing activity state
            // or handle it based on your specific requirements.
          }
        } catch (error) {
          console.error('Error fetching activity details:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchActivityDetails();
    }
  }, [show, activity?.id]);

  // Real-time subscription for activity updates
  useEffect(() => {
    if (!show || !activity?.id) return;

    const subscription = supabase
      .channel(`activity-${activity.id}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'activities',
        filter: `id=eq.${activity.id}`
      }, (payload) => {
        if (payload.new) {
          // Update the activity state with the new data
          // Note: This is a simplified implementation. You might want to merge the new data with the existing activity state
          // or handle it based on your specific requirements.
        }
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [show, activity?.id]);

  if (!activity) return null;

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                {/* Loading overlay */}
                {loading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF4C39] border-t-transparent"></div>
                  </div>
                )}

                {/* Image/Video Section */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={activity.image_url}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Close Button - Always on top */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#053257] hover:text-[#FF4C39] transition-all z-20"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-[#053257] font-dm-sans">
                        {activity.title}
                      </Dialog.Title>
                      {activity.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFB47333] text-[#FF4C39] text-sm font-medium mt-2">
                          {activity.badge}
                        </span>
                      )}
                    </div>
                    
                    {/* Select Activity Button */}
                    <button
                      onClick={() => onSelect(activity.title)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 ${
                        isSelected
                          ? 'bg-[#FF4C39] text-white hover:bg-[#FF4C39]/90'
                          : 'bg-[#FF4C39] text-white hover:bg-[#FF4C39]/90'
                      }`}
                    >
                      {isSelected ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Activity Selected
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Select Activity
                        </span>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-[#053257CC] font-inter">
                    {activity.description}
                  </p>

                  {/* Activity Details */}
                  {(activity.duration || activity.group_size_min) && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {activity.duration && (
                        <div className="bg-[#FFB47333] rounded-xl p-4">
                          <h4 className="font-dm-sans font-bold text-[#053257]">Duration</h4>
                          <p className="text-[#053257CC]">{activity.duration}</p>
                        </div>
                      )}
                      {activity.group_size_min && (
                        <div className="bg-[#FFB47333] rounded-xl p-4">
                          <h4 className="font-dm-sans font-bold text-[#053257]">Group Size</h4>
                          <p className="text-[#053257CC]">{activity.group_size_min}-{activity.group_size_max} participants</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key takeaways */}
                  {activity.highlights && activity.highlights.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-dm-sans font-bold text-[#053257] mb-3">Key takeaways</h4>
                      <ul className="space-y-2">
                        {activity.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-[#053257CC]">
                            <svg className="w-5 h-5 text-[#FF4C39] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

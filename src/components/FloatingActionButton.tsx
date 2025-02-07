'use client';

import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface FloatingActionButtonProps {
  show: boolean;
  count: number;
  onClick: () => void;
}

export default function FloatingActionButton({ show, count, onClick }: FloatingActionButtonProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-primary text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 transform z-50 group"
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </div>
        <span className="pr-2">Review Selection</span>
      </div>
    </button>
  );
} 
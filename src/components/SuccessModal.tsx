import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

export default function SuccessModal({ show, onClose }: SuccessModalProps) {
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <div className="mx-auto w-24 h-24 bg-[#FFB47333] rounded-full flex items-center justify-center mb-6">
                  <svg 
                    className="w-14 h-14 text-[#FF4C39]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-[#053257] font-dm-sans mt-4"
                >
                  Thank You for Celebrating With Us!
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-[#053257CC] font-inter">
                    Your registration has been received. We&apos;ll get back to you shortly with more details about your selected activities.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-xl bg-[#FF4C39] px-8 py-3 text-sm font-medium text-white hover:bg-[#FF4C39]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C39]/50 transition-all duration-200"
                    onClick={onClose}
                  >
                    Got it, thanks!
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#FFB473]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-32 h-32 bg-[#FF4C39]/10 rounded-full blur-2xl"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 
import React from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
}

interface AnniversaryProposalModalProps {
  show: boolean;
  selectedActivities: string[];
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting?: boolean;
}

export default function AnniversaryProposalModal({ 
  show, 
  selectedActivities, 
  onClose, 
  onSubmit,
  isSubmitting = false 
}: AnniversaryProposalModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
        {/* Anniversary Decorative Header */}
        <div className="bg-gradient-to-r from-[#053257] to-[#053257]/90 p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFB473] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF4C39] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
          
          <div className="relative text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/10 rounded-full p-3 backdrop-blur-sm flex items-center justify-center relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#FF4C39]/30"></span>
                <span className="text-2xl">🎉</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold font-dm-sans mb-2">A Decade of Excellence</h2>
            <div className="space-y-2">
              <p className="text-white/95 font-inter text-lg font-medium">Celebrate Trebound&apos;s 10th Anniversary</p>
              <p className="text-white/85 font-inter text-sm">Special 20% discount on all team-building packages until April 30, 2025</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {/* Offer Claimed Success Message */}
            <div className="bg-[#ecfdf5] border border-[#6ee7b7] rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Offer Successfully Claimed!</h3>
                  <div className="mt-1 text-sm text-green-700">
                    Complete your registration to secure your exclusive 20% discount.
                  </div>
                </div>
              </div>
            </div>

            {selectedActivities.length > 0 && (
              <div>
                <h3 className="font-medium text-[#053257] mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#FF4C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Selected Anniversary Package
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedActivities.map((activity) => (
                    <div
                      key={activity}
                      className="bg-[#FFB47333] text-[#FF4C39] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data: FormData = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                company: formData.get('company') as string,
                message: (formData.get('message') as string || '') + 
                         '\n[Offer: TREBOUND10 code claimed for 10th Anniversary Special]'
              };
              await onSubmit(data);
            }}>

              {/* Hidden field for additional tracking */}
              <input type="hidden" name="source_detail" value="anniversary_2025_promo" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#053257] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#053257] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#053257] mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="Enter 10 digit mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#053257] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="Company Ltd."
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#053257] mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
              </div>

              {/* Claim Promo Code Checkbox */}
              <div className="mt-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      name="claimPromo" 
                      className="peer sr-only" 
                      defaultChecked 
                    />
                    <div className="w-6 h-6 border-2 border-[#FFB473] rounded-lg peer-checked:bg-[#FFB473] peer-checked:border-[#FFB473] transition-all">
                      <svg 
                        className="w-5 h-5 text-white scale-0 peer-checked:scale-100 transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[#053257] group-hover:text-[#FF4C39] transition-colors">
                    Yes, I want to claim my 20% anniversary discount!
                  </span>
                </label>
              </div>

              {/* Promo Code Highlighted Box */}
              <div className="mt-4 bg-[#FFB473]/10 border border-[#FFB473]/20 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <h4 className="font-medium text-[#053257]">Anniversary Promo Code</h4>
                    <p className="text-sm text-[#053257]/70">Use this code when booking</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl font-bold text-[#FF4C39] inline-block bg-white/50 px-4 py-2 rounded-lg">TREBOUND10</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-xl border border-gray-200 text-[#053257] hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-xl bg-[#FF4C39] text-white hover:bg-[#FF4C39]/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
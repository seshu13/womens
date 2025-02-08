interface FormData {
  name: string;
  email: string;
  workEmail: string;
  company: string;
  numberOfParticipants: string;
  message?: string;
}

interface ProposalModalProps {
  show: boolean;
  selectedActivities: string[];
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting?: boolean;
}

export default function ProposalModal({ 
  show, 
  selectedActivities, 
  onClose, 
  onSubmit,
  isSubmitting = false 
}: ProposalModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
        {/* Decorative Header */}
        <div className="bg-gradient-to-r from-[#FF4C39] to-[#FFB473] p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
          </div>
          
          <div className="relative text-white text-center">
            <div className="flex justify-center mb-3">
              <span className="text-2xl">👩‍💼 👩‍💻 👩‍🎨 👩‍⚕️</span>
            </div>
            <h2 className="text-2xl font-bold font-dm-sans mb-2">Celebrate Women&apos;s Day Together</h2>
            <p className="text-white/90 font-inter text-sm">Join us in creating memorable experiences that empower and inspire</p>
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
            {selectedActivities.length > 0 && (
              <div>
                <h3 className="font-medium text-[#053257] mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#FF4C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Selected Activities
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
                workEmail: formData.get('workEmail') as string,
                company: formData.get('company') as string,
                numberOfParticipants: formData.get('numberOfParticipants') as string,
                message: formData.get('message') as string || undefined
              };
              await onSubmit(data);
            }}>
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
                    Personal Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-[#053257] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                    placeholder="jane@company.com"
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
                  <label htmlFor="numberOfParticipants" className="block text-sm font-medium text-[#053257] mb-1">
                    Number of Participants
                  </label>
                  <select
                    id="numberOfParticipants"
                    name="numberOfParticipants"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] disabled:opacity-50 disabled:bg-gray-50"
                  >
                    <option value="">Select team size</option>
                    <option value="5-10">5-10 participants</option>
                    <option value="11-25">11-25 participants</option>
                    <option value="26-50">26-50 participants</option>
                    <option value="51-100">51-100 participants</option>
                    <option value="100+">100+ participants</option>
                  </select>
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
                      Submit Registration
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
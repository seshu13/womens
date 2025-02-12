'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ContactModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ContactModal({ isOpen, closeModal }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    participants: '',
    date: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate participants is a positive number
    const numberOfParticipants = parseInt(formData.participants);
    if (isNaN(numberOfParticipants) || numberOfParticipants <= 0) {
      toast.error('Please enter a valid number of participants');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('proposals')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.company,
            preferred_date: formData.date,
            number_of_participants: numberOfParticipants,
            selected_activities: ['teambuilding'],
            message: formData.message,
            status: 'pending'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        if (error.message.includes('valid_email')) {
          throw new Error('Please enter a valid email address');
        } else if (error.message.includes('valid_participants')) {
          throw new Error('Please enter a valid number of participants');
        } else {
          throw new Error(error.message || 'Failed to submit form');
        }
      }

      toast.success('Thank you for your interest! We will get back to you soon.');
      closeModal();
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        participants: '',
        date: ''
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      toast.error(errorMessage);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-[#053257] mb-4 font-dm-sans"
                >
                  Let&apos;s Create Something Amazing
                </Dialog.Title>
                <p className="text-[#053257]/70 mb-6">
                  Tell us about your team and what you&apos;re looking to achieve. We&apos;ll get back to you with ideas tailored to your needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email*"
                      required
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name*"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="participants"
                      placeholder="Number of Participants*"
                      required
                      min="1"
                      value={formData.participants}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="date"
                      placeholder="Preferred Date*"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39] text-[#053257]/70"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-3 rounded-xl text-[#053257] hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-[#FF4C39] text-white hover:bg-[#FF4C39]/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Create Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

interface FormData {
  name: string;
  email: string;
  workEmail: string;
  company: string;
  numberOfParticipants: string;
  message?: string;
}

export function useProposal() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleActivity = (title: string) => {
    setSelectedActivities(prev => 
      prev.includes(title) 
        ? prev.filter(activityTitle => activityTitle !== title)
        : [...prev, title]
    );
  };

  const openProposalModal = () => {
    setShowProposalModal(true);
  };

  const closeProposalModal = () => {
    setShowProposalModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const submitProposal = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Prepare data for Supabase
      const proposalData = {
        name: formData.name,
        email: formData.email,
        phone: formData.workEmail, // Using workEmail as phone for now
        company_name: formData.company,
        preferred_date: new Date().toISOString(), // Default to current date
        number_of_participants: parseInt(formData.numberOfParticipants.split('-')[0]), // Take the lower bound
        selected_activities: selectedActivities,
        message: formData.message,
        status: 'pending'
      };

      // Insert into Supabase
      const { error } = await supabase
        .from('proposals')
        .insert([proposalData])
        .select();  // Add select to get better error details

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === 'PGRST301') {
          throw new Error('Permission denied. Please try again later.');
        } else {
          throw new Error(error.message || 'Failed to submit proposal');
        }
      }

      // Show success state
      setShowSuccessModal(true);
      closeProposalModal();
      setSelectedActivities([]);
      
    } catch (error) {
      console.error('Error submitting proposal:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasSelectedActivities = selectedActivities.length > 0;

  return {
    selectedActivities,
    showProposalModal,
    showSuccessModal,
    hasSelectedActivities,
    isSubmitting,
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    closeSuccessModal,
    submitProposal,
  };
} 
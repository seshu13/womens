import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  message?: string;
}

interface ProposalData extends FormData {
  selectedActivities: string[];
}

export function useProposal() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleActivity = (id: string) => {
    setSelectedActivities(prev => 
      prev.includes(id) 
        ? prev.filter(activityId => activityId !== id)
        : [...prev, id]
    );
  };

  const openProposalModal = () => {
    setShowProposalModal(true);
  };

  const closeProposalModal = () => {
    setShowProposalModal(false);
  };

  const submitProposal = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('Webhook URL is not configured');
      }

      const proposalData: ProposalData = {
        ...formData,
        selectedActivities
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proposalData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit proposal');
      }

      toast.success('Proposal submitted successfully! We\'ll get back to you soon.');
      
      closeProposalModal();
      setSelectedActivities([]);
      
    } catch (error) {
      console.error('Error submitting proposal:', error);
      toast.error('Failed to submit proposal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasSelectedActivities = selectedActivities.length > 0;

  return {
    selectedActivities,
    showProposalModal,
    hasSelectedActivities,
    isSubmitting,
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    submitProposal,
  };
} 
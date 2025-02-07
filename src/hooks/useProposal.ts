import { useState } from 'react';

export function useProposal() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [showProposalModal, setShowProposalModal] = useState(false);

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

  const submitProposal = async (data: any) => {
    // Here you would typically send the data to your backend
    console.log('Submitting proposal:', {
      ...data,
      selectedActivities,
    });
    
    // Close the modal after submission
    closeProposalModal();
    
    // Clear selected activities
    setSelectedActivities([]);
  };

  const hasSelectedActivities = selectedActivities.length > 0;

  return {
    selectedActivities,
    showProposalModal,
    hasSelectedActivities,
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    submitProposal,
  };
} 
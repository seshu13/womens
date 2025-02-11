'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useProposal } from '@/hooks/useProposal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  numberOfParticipants: string;
  message?: string;
}

interface ProposalContextType {
  selectedActivities: string[];
  showProposalModal: boolean;
  showSuccessModal: boolean;
  hasSelectedActivities: boolean;
  isSubmitting: boolean;
  toggleActivity: (id: string) => void;
  openProposalModal: () => void;
  closeProposalModal: () => void;
  closeSuccessModal: () => void;
  submitProposal: (data: FormData) => Promise<void>;
}

const ProposalContext = createContext<ProposalContextType | undefined>(undefined);

export function ProposalProvider({ children }: { children: ReactNode }) {
  const proposalState = useProposal();

  return (
    <ProposalContext.Provider value={proposalState}>
      {children}
    </ProposalContext.Provider>
  );
}

export function useProposalContext() {
  const context = useContext(ProposalContext);
  if (context === undefined) {
    throw new Error('useProposalContext must be used within a ProposalProvider');
  }
  return context;
} 
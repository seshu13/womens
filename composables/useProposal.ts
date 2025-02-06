import { ref, computed } from 'vue'
import { useState } from '#imports'

export interface Proposal {
  activities: string[]
  name: string
  email: string
  city: string
  groupSize: number
  date: string
  submittedAt: string
}

export const useProposal = () => {
  // Use Nuxt's useState with proper SSR handling
  const selectedActivities = useState<string[]>('selectedActivities', () => [])
  const showProposalModal = useState<boolean>('showProposalModal', () => false)
  const isSubmitting = useState<boolean>('isSubmitting', () => false)
  const submitSuccess = useState<boolean>('submitSuccess', () => false)

  const hasSelectedActivities = computed(() => selectedActivities.value.length > 0)
  const selectedCount = computed(() => selectedActivities.value.length)

  const openProposalModal = () => {
    if (process.client) {
      showProposalModal.value = true
    }
  }

  const closeProposalModal = () => {
    if (process.client) {
      showProposalModal.value = false
      submitSuccess.value = false
    }
  }

  const toggleActivity = (activityId: string) => {
    if (!process.client) return

    const index = selectedActivities.value.indexOf(activityId)
    
    // Add haptic feedback if available
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }

    if (index === -1) {
      // Add activity using immutable update
      selectedActivities.value = [...selectedActivities.value, activityId]
    } else {
      // Remove activity using immutable update
      selectedActivities.value = selectedActivities.value.filter(id => id !== activityId)
    }
  }

  const submitProposal = async (formData: Omit<Proposal, 'activities' | 'submittedAt'>) => {
    if (!process.client) return

    isSubmitting.value = true

    try {
      const proposal: Proposal = {
        activities: selectedActivities.value,
        ...formData,
        submittedAt: new Date().toISOString()
      }
      
      // Save to localStorage only on client side
      if (typeof window !== 'undefined') {
        const savedProposals = JSON.parse(localStorage.getItem('proposals') || '[]')
        savedProposals.push(proposal)
        localStorage.setItem('proposals', JSON.stringify(savedProposals))
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Reset state
      selectedActivities.value = []
      submitSuccess.value = true

      // Close modal after success message
      setTimeout(() => {
        showProposalModal.value = false
        submitSuccess.value = false
      }, 2000)
    } catch (error) {
      console.error('Error submitting proposal:', error)
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    selectedActivities,
    showProposalModal,
    isSubmitting,
    submitSuccess,
    hasSelectedActivities,
    selectedCount,
    openProposalModal,
    closeProposalModal,
    toggleActivity,
    submitProposal
  }
}
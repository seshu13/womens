import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

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
  // Initialize with an empty array and ensure it's reactive
  const selectedActivities = ref<string[]>([])

  const showProposalModal = ref(false)
  const isSubmitting = ref(false)
  const submitSuccess = ref(false)

  const hasSelectedActivities = computed(() => selectedActivities.value.length > 0)
  const selectedCount = computed(() => selectedActivities.value.length)

  const toggleActivity = (activityId: string) => {
    const index = selectedActivities.value.indexOf(activityId)
    
    // Add haptic feedback if available
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }

    if (index === -1) {
      // Add activity
      selectedActivities.value = [...selectedActivities.value, activityId]
    } else {
      // Remove activity
      selectedActivities.value = selectedActivities.value.filter(id => id !== activityId)
    }

    // For debugging
    console.log('Current selected activities:', selectedActivities.value)
  }

  const openProposalModal = () => {
    showProposalModal.value = true
  }

  const closeProposalModal = () => {
    showProposalModal.value = false
    submitSuccess.value = false
  }

  const submitProposal = async (formData: Omit<Proposal, 'activities' | 'submittedAt'>) => {
    isSubmitting.value = true

    try {
      const proposal: Proposal = {
        activities: selectedActivities.value,
        ...formData,
        submittedAt: new Date().toISOString()
      }
      
      // Save to localStorage
      const savedProposals = JSON.parse(localStorage.getItem('proposals') || '[]')
      savedProposals.push(proposal)
      localStorage.setItem('proposals', JSON.stringify(savedProposals))

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
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    submitProposal
  }
} 
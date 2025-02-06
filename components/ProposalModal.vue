<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="close" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-secondary/30 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
              <!-- Success Message Overlay -->
              <TransitionChild
                as="div"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <div v-if="isSuccess" class="absolute inset-0 bg-white flex items-center justify-center flex-col gap-4 z-50">
                  <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="text-center">
                    <h3 class="text-xl font-bold text-secondary mb-2">Proposal Submitted!</h3>
                    <p class="text-secondary/70">We'll get back to you shortly.</p>
                  </div>
                </div>
              </TransitionChild>

              <DialogTitle as="h3" class="font-display text-2xl font-bold text-secondary mb-4">
                Complete Your Team Building Proposal
              </DialogTitle>

              <div class="space-y-6">
                <!-- Selected Activities -->
                <div v-if="selectedActivities.length > 0" class="space-y-6">
                  <div class="bg-secondary-light rounded-xl p-4">
                    <h4 class="font-display text-lg font-bold text-secondary mb-3">Selected Activities</h4>
                    <TransitionGroup 
                      tag="ul" 
                      class="space-y-2"
                      enter-active-class="transition duration-300 ease-out"
                      enter-from-class="opacity-0 -translate-x-4"
                      enter-to-class="opacity-100 translate-x-0"
                      leave-active-class="transition duration-200 ease-in"
                      leave-from-class="opacity-100 translate-x-0"
                      leave-to-class="opacity-0 translate-x-4"
                    >
                      <li 
                        v-for="activity in selectedActivities" 
                        :key="activity" 
                        class="flex items-center gap-2 text-secondary/70 bg-white/50 px-3 py-2 rounded-lg"
                      >
                        <span class="text-primary">✓</span>
                        {{ activity }}
                      </li>
                    </TransitionGroup>
                  </div>
                </div>

                <!-- Contact Form -->
                <form @submit.prevent="handleSubmit" class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="name" class="block text-sm font-medium text-secondary">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        v-model="form.name"
                        required
                        :disabled="isSubmitting"
                        class="w-full px-4 py-2 rounded-lg border border-secondary/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-medium text-secondary">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        v-model="form.email"
                        required
                        :disabled="isSubmitting"
                        class="w-full px-4 py-2 rounded-lg border border-secondary/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="city" class="block text-sm font-medium text-secondary">City</label>
                      <input 
                        type="text" 
                        id="city" 
                        v-model="form.city"
                        required
                        :disabled="isSubmitting"
                        class="w-full px-4 py-2 rounded-lg border border-secondary/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="groupSize" class="block text-sm font-medium text-secondary">Group Size</label>
                      <input 
                        type="number" 
                        id="groupSize" 
                        v-model="form.groupSize"
                        required
                        min="1"
                        :disabled="isSubmitting"
                        class="w-full px-4 py-2 rounded-lg border border-secondary/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div class="space-y-2 md:col-span-2">
                      <label for="date" class="block text-sm font-medium text-secondary">Tentative Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        v-model="form.date"
                        required
                        :disabled="isSubmitting"
                        class="w-full px-4 py-2 rounded-lg border border-secondary/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-end gap-4 mt-6">
                    <button
                      type="button"
                      @click="close"
                      :disabled="isSubmitting"
                      class="px-6 py-2 rounded-lg text-secondary hover:bg-secondary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <span v-if="isSubmitting" class="inline-block animate-spin w-4 h-4 border-2 border-white/20 border-t-white rounded-full"></span>
                      {{ isSubmitting ? 'Submitting...' : 'Submit Proposal' }}
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const props = defineProps<{
  show: boolean
  selectedActivities: string[]
  isSubmitting?: boolean
  isSuccess?: boolean
}>()

const emit = defineEmits<{
  close: []
  submit: [formData: any]
}>()

const form = ref({
  name: '',
  email: '',
  city: '',
  groupSize: '',
  date: ''
})

const handleSubmit = () => {
  emit('submit', form.value)
}

const close = () => {
  if (!props.isSubmitting) {
    emit('close')
  }
}
</script> 
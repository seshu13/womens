<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-10 opacity-0"
  >
    <div 
      v-if="show && count > 0"
      class="fixed md:right-8 md:bottom-8 md:w-auto w-full px-4 bottom-0 z-40"
    >
      <div 
        class="bg-white md:rounded-2xl shadow-2xl shadow-primary/10 p-4 md:p-6 flex items-center justify-between gap-4 md:gap-6"
        :class="{'rounded-none': isMobile}"
      >
        <div class="flex items-center gap-3">
          <div class="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold">
            {{ count }}
          </div>
          <div class="text-left">
            <p class="text-secondary font-medium">{{ count }} {{ count === 1 ? 'Activity' : 'Activities' }} Selected</p>
            <p class="text-sm text-secondary/70">Click to complete your proposal</p>
          </div>
        </div>
        <button
          @click="$emit('click')"
          class="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  show: boolean
  count: number
}>()

defineEmits<{
  click: []
}>()

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)
</script> 
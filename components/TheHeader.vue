<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary/5">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <nuxt-img
            src="https://cdn.prod.website-files.com/61ead40fcee1ea7e99aa2b1f/66f3eb4e829a5759d1b0219a_trebound%20logo.png"
            alt="Trebound Logo"
            class="h-10 w-auto"
            width="150"
            height="40"
          />
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.label"
            :to="item.href"
            class="text-secondary/80 hover:text-primary transition-colors font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center gap-4">
          <button 
            @click="proposal.openProposalModal"
            class="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
          >
            Get Started
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 text-secondary hover:bg-secondary-light rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-secondary/5">
        <div class="container mx-auto px-4 py-4 space-y-4">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.label"
            :to="item.href"
            class="block px-4 py-2 text-secondary/80 hover:text-primary hover:bg-secondary-light rounded-lg transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          <button 
            @click="$emit('openModal')"
            class="w-full px-4 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Register Now
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProposal } from '~/composables/useProposal'

const isMenuOpen = ref(false)
const proposal = useProposal()

const navigationItems = [
  { label: 'Activities', href: '#featured-activities' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' }
]

defineEmits<{
  openModal: []
}>()
</script> 
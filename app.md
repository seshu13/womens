<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader @openModal="openProposalModal" />
    <div class="flex-grow pt-20">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const openProposalModal = () => {
  // This will be handled by the page component
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style> 
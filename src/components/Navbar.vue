<template>
  <nav class="flex justify-between items-center p-4 border border-blue-500">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
    </div>
    <!-- Logo -->
    <div class="flex-shrink-0">
      <h1 class="text-xl md:text-2xl font-bold text-blue-700 whitespace-nowrap">Tebogo</h1>
    </div>

    <!-- Scrollable Navigation Menu -->
    <div class="flex-1 mx-4 md:mx-8 overflow-x-auto no-scrollbar">
      <ul class="flex justify-center space-x-2 md:space-x-6">
        <li class="whitespace-nowrap">
          <router-link to="/">Home</router-link>
        </li>
        <li class="whitespace-nowrap">
          <router-link to="/about">About</router-link>
        </li>
        <li class="whitespace-nowrap">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="whitespace-nowrap">
          <router-link to="/skills">Skills</router-link>
        </li>
        <li class="whitespace-nowrap">
          <router-link to="/coursework">Coursework</router-link>
        </li>
        <li class="whitespace-nowrap">
          <router-link to="/contacts">Contacts</router-link>
        </li>
      </ul>
    </div>

    
    <!-- NEW: Get in Touch Button -->
    <button 
      @click="scrollToContact"
      class="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
    >
      Get in Touch
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const scrollToContact = () => {
  if (router.currentRoute.value.path === '/') {
    // Already on homepage, scroll to CTA
    const ctaSection = document.getElementById('contact-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to homepage then scroll
    router.push('/').then(() => {
      setTimeout(() => {
        const ctaSection = document.getElementById('contact-cta');
        if (ctaSection) {
          ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Short delay to ensure page transition completes
    });
  }
};
</script>

<style scoped>
/* Hide default scrollbars for a cleaner UI */
.no-scrollbar {
  scrollbar-width: none; /* For Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Edge */
}

/* Active link styling */
.router-link-active {
  @apply text-blue-600 font-medium;
}
</style>
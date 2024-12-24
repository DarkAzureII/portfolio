<template>
  <section class="p-8">
    <!-- About Heading -->
    <h2 class="text-2xl font-bold mb-4">About Me</h2>
    
    <!-- Introduction -->
    <p class="text-lg mb-4">
      I am Tebogo, a Front-End Web Developer specializing in building clean, 
      high-performance interfaces. With a focus on intuitive user experiences 
      and modern web standards, I bring designs to life through elegant, 
      maintainable code.
    </p>
    
    <!-- Core Skills -->
    <h3 class="text-xl font-semibold mb-2">Core Skills</h3>
    <ul class="list-disc ml-6 my-4 text-lg">
      <li>Vue.js, React, and modern JavaScript frameworks</li>
      <li>Responsive design and accessibility best practices</li>
      <li>State management solutions (e.g., Vuex, Pinia)</li>
      <li>Continuous integration and delivery pipelines</li>
    </ul>
    
    <!-- Professional Highlights -->
    <h3 class="text-xl font-semibold mt-6 mb-2">Professional Highlights</h3>
    <ul class="list-disc ml-6 text-lg">
      <li>6+ months as a JavaScript Full-Stack Developer at Wits MSS TW Kambule</li>
      <li>
        Solo-developed a system currently used to track employee work hours,
        streamlining payroll processes
      </li>
      <li>
        Led a small team of two junior developers to build a platform 
        for onboarding post-graduate students
      </li>
    </ul>
    
    <!-- Toggle Button + Beyond the Code Section -->
    <div class="mt-6">
      <button 
        @click="toggleBeyondTheCode" 
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
      >
        <!-- Optional Icon for visual indication -->
        <span v-if="showBeyondTheCode">▼</span>
        <span v-else>►</span>
        
        {{ showBeyondTheCode ? 'Hide Beyond the Code' : 'Show Beyond the Code' }}
      </button>

      <!-- Transition for smooth reveal/hide -->
      <transition name="fade">
        <div v-if="showBeyondTheCode" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Beyond the Code</h3>
          <p class="text-lg">
            When I’m not coding, I enjoy exploring topics on AI, exploring new 
            technologies, and contributing to the development community 
            through mentoring and technical writing.
          </p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/**
 * Controls whether the "Beyond the Code" section is visible.
 */
const showBeyondTheCode = ref(false)

/**
 * Toggles the visibility of the "Beyond the Code" section.
 */
function toggleBeyondTheCode() {
  showBeyondTheCode.value = !showBeyondTheCode.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

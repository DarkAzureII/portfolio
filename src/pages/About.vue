<template>
  <section class="p-8">
    <!-- About Me Section -->
    <h2 class="text-2xl font-bold mb-6">About Me</h2>
    
    <p class="text-lg mb-6">
      Hello, I'm Tebogo, a passionate Full-Stack Web Developer with extensive expertise in both front-end and back-end technologies. I specialize in building high-performance, scalable web applications that focus on security, seamless user experiences, and long-term maintainability. Whether it's crafting intuitive user interfaces or architecting powerful back-end systems, I pride myself on writing clean, efficient code. My approach integrates modern development practices, ensuring every project I contribute to is not only functional but also flexible and future-proof.
    </p>

    <!-- Core Skills Section -->
    <h3 class="text-xl font-semibold mb-4">Core Skills</h3>
    <ul class="list-disc ml-6 my-4 text-lg">
      <li>Full-stack development with modern frameworks such as <strong>Vue.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong></li>
      <li>Expertise in responsive design and UI/UX best practices for web applications</li>
      <li>Advanced state management using libraries like <strong>Vuex</strong>, <strong>Pinia</strong>, and <strong>Redux</strong></li>
      <li>Experience with DevOps workflows, CI/CD pipelines, containerization, and cloud technologies (e.g., <strong>Docker</strong>, <strong>Azure</strong>, <strong>GitHub Actions</strong>)</li>
      <li>Proficient in working with databases including <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>, as well as back-end frameworks like <strong>Express.js</strong> and <strong>Firebase</strong></li>
      <li>Skilled in machine learning, graphics programming, and game development technologies</li>
    </ul>

    <!-- Professional Highlights Section -->
    <h3 class="text-xl font-semibold mt-8 mb-4">Professional Highlights</h3>
    <ul class="list-disc ml-6 text-lg">
      <li>6+ months as a Full-Stack Developer at Wits MSS TW Kambule, where I gained hands-on experience in building full-scale web applications</li>
      <li>Independently developed a comprehensive system for tracking employee work hours, streamlining payroll and HR processes</li>
      <li>Led a small team of junior developers to successfully build a platform that enhances the onboarding experience for post-graduate students</li>
    </ul>
    
    <!-- Toggle Button + Beyond the Code Section -->
    <div class="mt-8">
      <button 
        @click="toggleBeyondTheCode" 
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
      >
        <span v-if="showBeyondTheCode">▼</span>
        <span v-else>►</span>
        {{ showBeyondTheCode ? 'Hide Beyond the Code' : 'Show Beyond the Code' }}
      </button>

      <!-- Transition for smooth reveal/hide -->
      <transition name="fade">
        <div v-if="showBeyondTheCode" class="mt-4">
          <h3 class="text-xl font-semibold mb-4">Beyond the Code</h3>
          <p class="text-lg">
            Outside of coding, I am deeply passionate about exploring Artificial Intelligence and staying updated with emerging technologies. I also love contributing to the development community through open-source projects, where I continue to learn, share knowledge, and collaborate with like-minded developers.
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

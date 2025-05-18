<template>
  <section class="p-8">
    <!-- About Me Section -->
    <h2 class="text-2xl font-bold mb-6 text-blue-900">About Tebogo Sebopela</h2>
    
    <p class="text-lg mb-6 text-blue-800">
      Hello, I'm Tebogo, a passionate Full-Stack Web Developer with extensive expertise in both front-end and back-end technologies. I specialize in building high-performance, scalable web applications that focus on security, seamless user experiences, and long-term maintainability. Whether it's crafting intuitive user interfaces or architecting powerful back-end systems, I pride myself on writing clean, efficient code. My approach integrates modern development practices, ensuring every project I contribute to is not only functional but also flexible and future-proof.
    </p>

    <!-- Core Skills Section -->
    <h3 class="text-xl font-semibold mb-4 text-blue-900">Core Skills</h3>
    <ul class="list-disc ml-6 my-4 text-lg text-blue-800">
      <li>Full-stack development with modern frameworks such as <strong>Vue.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong></li>
      <li>Expertise in responsive design and UI/UX best practices for web applications</li>
      <li>Advanced state management using libraries like <strong>Vuex</strong>, <strong>Pinia</strong>, and <strong>Redux</strong></li>
      <li>Experience with DevOps workflows, CI/CD pipelines, containerization, and cloud technologies (e.g., <strong>Docker</strong>, <strong>Azure</strong>, <strong>GitHub Actions</strong>)</li>
      <li>Proficient in working with databases including <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>, as well as back-end frameworks like <strong>Express.js</strong> and <strong>Firebase</strong></li>
      <li>Skilled in machine learning, graphics programming, and game development technologies</li>
    </ul>

    <!-- Professional Highlights Section -->
    <h3 class="text-xl font-semibold mt-8 mb-4 text-blue-900">Professional Highlights</h3>
    <ul class="list-disc ml-6 text-lg text-blue-800">
      <li>6+ months as a Full-Stack Developer at Wits MSS TW Kambule, where I gained hands-on experience in building full-scale web applications</li>
      <li>Independently developed a comprehensive system for tracking employee work hours, streamlining payroll and HR processes</li>
      <li>Led a small team of junior developers to successfully build a platform that enhances the onboarding experience for post-graduate students</li>
      </ul>
    
    <!-- Toggle Button + Beyond the Code Section -->
    <div class="mt-8">
      <button
        @click="toggleBeyondTheCode"
        class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
      >
        <span class="transform transition-transform duration-300" :class="{ 'rotate-90': showBeyondTheCode }">
          ►
        </span>
        {{ showBeyondTheCode ? 'Hide Beyond the Code' : 'Show Beyond the Code' }}
      </button>

      <!-- Enhanced Beyond the Code Section -->
      <transition name="slide-fade">
        <div v-if="showBeyondTheCode" class="mt-6 space-y-6">
          <div class="p-6 bg-blue-800 rounded-lg border border-blue-900 backdrop-blur-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-200">
              <span class="text-lg">🎮</span> Current Game Project
            </h3>
            <p class="text-lg mb-4 text-blue-100">
              Building an epic RPG in Godot Engine with procedural generation and AI-driven NPCs. 
              <span class="text-blue-300 animate-pulse">(Coming Soon!)</span>
            </p>
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-blue-900 rounded-full text-sm text-white">Godot 4</span>
              <span class="px-3 py-1 bg-blue-900 rounded-full text-sm text-white">GDScript</span>
              <span class="px-3 py-1 bg-blue-900 rounded-full text-sm text-white">AI Behavior Trees</span>
            </div>
          </div>

          <a 
            href="YOUR_SCHEDULER_LINK" 
            target="_blank"
            class="block p-6 bg-blue-800 rounded-lg border border-blue-900 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 group"
          >
            <div class="flex items-center gap-4">
              <div class="p-3 bg-blue-600 rounded-full group-hover:bg-blue-500 transition-colors animate-pulse">
                <span class="text-3xl">📅</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-blue-200">Time Master Scheduler</h3>
                <p class="text-lg mt-2 text-blue-100">
                  My custom productivity system with smart reminders, time blocking,
                  and <span class="text-blue-400">AI-powered task prioritization</span>
                </p>
              </div>
            </div>
          </a>

          <p class="text-lg text-blue-400 mt-4">
            When I'm not coding, you'll find me modding old games, experimenting with
            generative AI, or reading about quantum computing!
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Add a subtle animation to the game controller emoji */
@keyframes game-float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.text-2xl {  /* Target the game controller emoji */
  animation: game-float 3s ease-in-out infinite;
}
</style>

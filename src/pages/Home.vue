<template>
    <section class="p-8 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <!-- Main Heading -->
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center" ref="heading">
        Hello, I’m Tebogo Sebopela
      </h2>
  
      <!-- Sub-heading / Tagline -->
      <p class="text-xl md:text-2xl text-gray-700 text-center mb-6" ref="subheading">
        A Software developer who loves building modern, scalable web solutions.
      </p>
  
      <!-- Key Skills / Highlights -->
      <ul class="text-lg text-gray-600 mb-8 space-y-1 text-center" ref="skillList">
        <li>• Specializing in Vue.js & TypeScript</li>
        <li>• Experienced in Node.js & Tailwind CSS</li>
        <li>• Focused on Performance & Accessibility</li>
      </ul>
  
      <!-- Call to Action -->
      <router-link to="/projects"
        class="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
        ref="ctaButton"
      >
        View My Projects
      </router-link>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  
  const heading = ref<HTMLElement | null>(null);
  const subheading = ref<HTMLElement | null>(null);
  const skillList = ref<HTMLElement | null>(null);
  const ctaButton = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 }});
    
    // Animate elements in sequence
    tl.from(heading.value, { y: 50 })
      .from(subheading.value, { y: 30 }, "-=0.5")   // Start subheading animation slightly earlier
      .from(skillList.value, { y: 20 }, "-=0.5")
      .from(ctaButton.value, { scale: 0.8 }, "-=0.5");
  });
  </script>
  
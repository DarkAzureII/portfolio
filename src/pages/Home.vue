<template>
  <section class="p-8 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 relative">
    <!-- Main Heading -->
    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center" ref="heading">
      Hi, I’m Tebogo Sebopela
    </h2>

    <!-- Sub-heading / Tagline -->
    <p class="text-xl md:text-2xl text-gray-700 text-center mb-6" ref="subheading">
      A Software developer who loves building modern, scalable solutions.
    </p>

    <!-- Key Skills / Highlights -->
    <ul class="text-lg text-gray-600 mb-8 space-y-1 text-center" ref="skillList">
      <li>• Proficient in React.js and JavaScript for developing interactive user interfaces</li>
      <li>• Experienced in building robust backends with Node.js and Express.js</li>
      <li>• Dedicated to optimizing performance and ensuring accessibility in every project</li>
    </ul>

    <!-- Call to Action -->
    <router-link
      to="/projects"
      class="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
      ref="ctaButton"
    >
      Explore My Projects
    </router-link>
  </section>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

// Animation Refs
const heading = ref<HTMLElement | null>(null);
const subheading = ref<HTMLElement | null>(null);
const skillList = ref<HTMLElement | null>(null);
const ctaButton = ref<HTMLElement | null>(null);

onMounted(() => {
  // GSAP Animation
  const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });
  tl.from(heading.value, { y: 50 })
    .from(subheading.value, { y: 30 }, "-=0.5")
    .from(skillList.value, { y: 20 }, "-=0.5")
    .from(ctaButton.value, { scale: 0.8 }, "-=0.5");
});
</script>

<style>
</style>

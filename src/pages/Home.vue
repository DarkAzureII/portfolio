<template>
  <div>
    <section class="p-8 min-h-screen flex flex-col items-center justify-center relative">
      <!-- TAGLINE -->
      <p class="text-sm text-gray-500 uppercase tracking-widest mb-2" ref="tagline">
        Full-Stack Developer | Digital Solutions | Purpose-Driven Creator
      </p>

      <!-- HEADING -->
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center" ref="heading">
        I'm Tebogo Sebopela
      </h2>

      <!-- ENHANCED "WHY ME" SECTION -->
      <div class="max-w-2xl text-center mb-8">
        <p class="text-lg md:text-xl text-gray-700 mb-6" ref="introLine">
          Computer Science graduate building thoughtful, custom-crafted software—from websites to systems to tools.
        </p>
        
        <div class=" p-4 rounded-lg border border-l-4 border-blue-500 mb-6">
          <p class="text-base md:text-lg text-gray-800" ref="purposeLine">
            <span class="font-medium text-blue-600">My purpose:</span> To solve meaningful problems through technology that serves both people and purpose
          </p>
        </div>
        
        <p class="text-base md:text-lg text-gray-600" ref="portfolioLine">
          This portfolio documents my journey becoming a well-rounded digital creator who bridges technical skill with human-centered design
        </p>
      </div>

      <!-- STRATEGIC CTA -->
      <div class="flex flex-col sm:flex-row gap-4">
        <router-link
          to="/projects"
          class="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center"
          ref="ctaButton"
        >
          See My Solutions →
        </router-link>
        
        <router-link 
          to="/about" 
          class="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 text-center"
        >
          My Creative Journey
        </router-link>
      </div>
    </section>

    <!-- <section class="py-16 bg-white text-center">
      <h3 class="text-2xl font-bold mb-6">A Glimpse Into My Work</h3>
      <img
        src="/use.jpg"
        alt="Screenshot of Student Portal Project"
        class="mx-auto rounded-lg shadow-lg max-w-3xl"
      />
      <p class="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
        This custom-built student portal helps tutors track learner performance, give tests, and simplify their workflow.
      </p>
    </section> -->


    <section id="contact-cta" class="text-center py-16 to-white px-4">
      <div class="max-w-2xl mx-auto">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Meaningful</h3>
        <p class="text-gray-700 mb-6 max-w-xl mx-auto text-lg">
          I'm passionate about creating solutions that serve both people and purpose. 
          Whether you're in education, business, or creative fields, let's discuss how technology can empower your vision.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:tebogosebopela8@gmail.com"
            class="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 text-center"
          >
            Email Me
          </a>
          <a
            href="/Tebogo_Sebopela_CV.pdf"
            target="_blank"
            class="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 text-center"
          >
            Download Résumé
          </a>
        </div>
        
        <!-- Social links -->
        <div class="mt-8 flex justify-center space-x-6">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" class="text-gray-500 hover:text-blue-600">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" class="text-gray-500 hover:text-gray-900">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 text-center">
      <h3 class="text-2xl font-semibold mb-4">Meet the Dev</h3>
      <video
        class="rounded-lg border border-blue-500 shadow-lg mx-auto max-w-md"
        controls
        src="/vid.mp4"
        poster="/use.jpg"
      >
        Your browser does not support the video tag.
      </video>
      <p class="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
        I’m Tebogo. I make software and stories—student portals, narrative games, and tools that solve real-world problems.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';


const heading = ref<HTMLElement | null>(null);
const tagline = ref<HTMLElement | null>(null);
const introLine = ref<HTMLElement | null>(null);
const purposeLine = ref<HTMLElement | null>(null);
const portfolioLine = ref<HTMLElement | null>(null);
const ctaButton = ref<HTMLElement | null>(null);

// Update your onMounted hook:
onMounted(() => {
  
  const tl = gsap.timeline({ defaults: { duration: 0.7 } });
  
  tl.from(tagline.value, { y: 15, opacity: 0 })
    .from(heading.value, { y: 40, opacity: 0 }, "-=0.2")
    .from(introLine.value, { y: 25, opacity: 0 }, "-=0.2")
    .from(purposeLine.value, { y: 20, opacity: 0 }, "-=0.2")
    .from(portfolioLine.value, { y: 20, opacity: 0 }, "-=0.2")
    .from(ctaButton.value, { scale: 0.9, opacity: 0 }, "-=0.2");
});
</script>


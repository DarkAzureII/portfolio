<!-- src/views/Contact.vue -->
<template>
  <section class="p-8 min-h-screen flex flex-col justify-center max-w-4xl mx-auto">
    <!-- Contact Heading -->
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch</h2>
    
    <!-- Introduction -->
    <p class="text-lg md:text-xl text-gray-700 mb-8 text-center">
      I'm always interested in new opportunities and collaborations. 
      Feel free to reach out through any of these channels:
    </p>

    <!-- Social Media Links -->
    <div class="grid gap-6 md:grid-cols-2 mb-12">
      <a 
        v-for="social in socials" 
        :key="social.platform"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center p-6 border border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-400"
      >
        <component 
          :is="social.icon" 
          class="w-8 h-8 text-blue-600"
        />
        <div class="ml-5">
          <h3 class="font-bold text-lg">{{ social.platform }}</h3>
          <p class="text-gray-600">{{ social.handle }}</p>
        </div>
      </a>
    </div>

    <!-- Direct Contact Section -->
    <div class="mb-12">
      <h3 class="text-xl md:text-2xl font-semibold mb-6 text-center">Direct Contact</h3>
      <div class="border border-blue-500 p-8 rounded-xl shadow-sm ">
        <div class="flex items-center mb-5 justify-center">
          <MailIcon class="w-6 h-6 text-blue-600" />
          <a href="mailto:tebogosebopela8@gmail.com" class="ml-3 text-blue-600 hover:underline text-lg">
            tebogosebopela8@gmail.com
          </a>
        </div>
        <div class="flex items-center justify-center">
          <PhoneIcon class="w-6 h-6 text-blue-600" />
          <a href="tel:+27815296311" class="ml-3 text-blue-600 hover:underline text-lg">
            +27 81 529 6311
          </a>
        </div>
      </div>
    </div>

    <!-- Location -->
    <div class="text-center">
      <h3 class="text-xl md:text-2xl font-semibold mb-4">Location</h3>
      <p class="text-lg text-gray-700">
        Based in Pretoria, South Africa<br>
        Willing to relocate<br>
        Available for remote work worldwide
      </p>
      
      <!-- Back to Home Button -->
      <router-link 
        to="/" 
        class="mt-10 inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-400 transition-all duration-300"
      >
        &larr; Back to Home
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Github as GithubIcon, 
  Linkedin as LinkedinIcon, 
  Mail as MailIcon, 
  Phone as PhoneIcon 
} from 'lucide-vue-next'

const socials = [
  {
    platform: 'GitHub',
    handle: '@DarkAzureII',
    url: 'https://github.com/DarkAzureII',
    icon: GithubIcon
  },
  {
    platform: 'LinkedIn',
    handle: 'Tebogo Sebopela',
    url: 'https://linkedin.com/in/tebogo-sebopela',
    icon: LinkedinIcon
  },
]
</script>
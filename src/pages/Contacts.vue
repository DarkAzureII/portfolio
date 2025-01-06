<template>
    <section class="p-8">
      <!-- Contact Heading -->
      <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
      
      <!-- Introduction -->
      <p class="text-lg mb-6">
        I'm always interested in new opportunities and collaborations. 
        Feel free to reach out through any of these channels:
      </p>
  
      <!-- Social Media Links -->
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a 
          v-for="social in socials" 
          :key="social.platform"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <component 
            :is="social.icon" 
            class="w-6 h-6 text-blue-600"
          />
          <div class="ml-4">
            <h3 class="font-semibold">{{ social.platform }}</h3>
            <p class="text-gray-600 text-sm">{{ social.handle }}</p>
          </div>
        </a>
      </div>
  
      <!-- Direct Contact Section -->
      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Direct Contact</h3>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <MailIcon class="w-5 h-5 text-blue-600" />
            <a href="mailto:your.email@example.com" class="ml-3 text-blue-600 hover:underline">
              tebogosebopela8@gmail.com
            </a>
          </div>
          <div class="flex items-center">
            <PhoneIcon class="w-5 h-5 text-blue-600" />
            <a href="tel:+27123456789" class="ml-3 text-blue-600 hover:underline">
              +27 81 529 6311
            </a>
          </div>
        </div>
      </div>
  
      <!-- Location -->
      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Location</h3>
        <p class="text-lg">
          Based in Johannesburg, South Africa
          <br>
          Willing to relocate
          <br>
          Available for remote work worldwide
        </p>
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
      handle: 'Tebogo',
      url: 'https://linkedin.com/in/tebogo-sebopela',
      icon: LinkedinIcon
    },
  ]
  </script>
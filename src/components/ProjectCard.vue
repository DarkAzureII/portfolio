<template>
    <div class="border p-4 shadow-sm bg-white rounded">
      <img v-if="image" :src="image" alt="Project Preview" class="mb-4 rounded" />
      <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
      <ul class="mb-2 text-sm text-gray-600">
        <li v-for="tech in technologies" :key="tech">{{ tech }}</li>
      </ul>
      <p class="text-sm text-gray-700">{{ description }}</p>
      <p v-if="private" class="text-xs italic text-gray-500 mt-2">Note: Private project, details are limited.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  
  interface ProjectCardProps {
    title: string;
    technologies: string[];
    description: string;
    image?: string;
    private?: boolean;
  }
  
  defineProps<ProjectCardProps>();
  </script>
  
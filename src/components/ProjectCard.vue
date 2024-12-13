<template>
  <div class="border p-4 shadow-sm bg-white rounded">
    <img v-if="image" :src="image" alt="Project Preview" class="mb-4 rounded" />
    <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
    
    <!-- Technology Logos -->
    <div class="flex flex-wrap justify-evenly gap-2 mb-2">
      <img
        v-for="tech in technologies"
        :key="tech.name"
        :src="tech.logo"
        :alt="tech.name"
        class="w-8 h-8"
        :title="tech.name"
      />
    </div>
    
    <!-- Project Description -->
    <p class="text-sm text-gray-700 mb-2">{{ description }}</p>
    
    <p v-if="private" class="text-xs italic text-gray-500 mt-2">Note: Private project, details are limited.</p>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  name: string;
  logo: string;
  categories: string[];
}

interface ProjectCardProps {
  title: string;
  technologies: Technology[];
  description: string;
  image?: string;
  private?: boolean;
}

defineProps<ProjectCardProps>();
</script>

<template>
  <div class="border p-4 shadow-sm bg-white rounded">
    <img v-if="image" :src="image" alt="Project Preview" class="mb-4 rounded" />
    <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>

    <!-- Client Logo -->
    <div v-if="client" class="relative flex items-center justify-center mb-4 group">
      <div class="w-full h-24 flex items-center justify-center mb-4">
      <img
        :src="client.logo"
        :alt="client.name"
        class="max-h-full max-w-full object-contain"
      />
    </div>

      <span
        class="absolute bottom-0 mb-2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {{ client.name }}
      </span>
    </div>

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

    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      🔗 View Site
    </a>

    <p v-if="private" class="text-xs italic text-gray-500 mt-2">Note: Private project, details are limited.</p>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  name: string;
  logo: string;
  categories: string[];
}

interface Client {
  name: string;
  logo: string;
}

interface ProjectCardProps {
  title: string;
  technologies: Technology[];
  description: string;
  image?: string;
  private?: boolean;
  client?: Client;
  link?: string;
}

defineProps<ProjectCardProps>();
</script>

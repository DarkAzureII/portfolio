<template>
    <section class="p-8">
      <h2 class="text-2xl font-bold mb-4">Projects</h2>
      <p class="mb-6">Below are some professional projects I've worked on:</p>
  
      <div class="grid gap-8 md:grid-cols-2">
        <!-- Example for the completed hours-tracking project -->
        <ProjectCard
          title="Employee Hours Tracker"
          :technologies="['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL']"
          description="A web platform for tracking and summarizing employee working hours. Improved reporting speed and accuracy."
          :image="hoursTrackerImage"
          :private="true"
        />
  
        <!-- Current Project Placeholder -->
        <ProjectCard
          title="Current Project (Under NDA)"
          :technologies="['Vue.js', 'TailwindCSS', 'Express.js']"
          description="An ongoing project focused on efficient resource management. While details are restricted, the stack and approach highlight my full-stack capabilities."
          :private="true"
        />
  
        <!-- Upcoming Project Placeholder -->
        <ProjectCard
          title="Upcoming Project"
          :technologies="['TypeScript', 'GraphQL', 'AWS']"
          description="A future project aiming to integrate complex data pipelines with a robust frontend."
          :private="false"
        />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import ProjectCard from '../components/ProjectCard.vue';
  import hoursTrackerImage from '../assets/hours-tracker-demo.png'; // A blurred or sanitized screenshot
  </script>
  
<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Projects</h2>
    <p class="mb-6">A selection of professional and freelance projects I've worked on recently:</p>

    <div class="grid gap-8 md:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :technologies="project.technologies"
        :description="project.description"
        :private="project.private"
        :client="project.client"
        :link="project.link"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
{
    title: 'Artist & Event Management Platform [Current Project]',
    technologies: [
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Frontend'] },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', categories: ['Backend'] },
      { name: 'Vercel', logo: 'https://avatars.githubusercontent.com/u/14985020?s=200&v=4', categories: ['Hosting'] },
    ],
    description: 'An all-in-one platform for managing music uploads, promoting content (including YouTube videos), and booking dance performances for events.',
    private: false,
    link: 'https://for-bro-psi.vercel.app/',
    client: {
      name: 'Freelance – Artist Portfolio',
      logo: 'https://cdn-icons-png.flaticon.com/512/1785/1785366.png', // Music icon placeholder
    },
  },
  {
    title: 'Student Portal for Tutors',
    technologies: [
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Frontend'] },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', categories: ['Backend'] },
      { name: 'Vercel', logo: 'https://avatars.githubusercontent.com/u/14985020?s=200&v=4', categories: ['Hosting'] },
    ],
    description: 'A custom student management system for tutors, enabling streamlined student tracking, test assignment, and results management.',
    private: false,
    link: 'https://thatch-pi.vercel.app/',
    client: {
      name: 'Freelance',
      logo: 'TAEP.svg', // GitHub placeholder
    },
  },
  {
    title: 'Employee Hours Logger',
    technologies: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Frontend'] },
      { name: 'Tailwind CSS', logo: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4', categories: ['Web Development'] },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Backend'] },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', categories: ['Database'] },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Backend'] },
      { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'] },
      { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'] },
    ],
    description: 'A platform that simplifies work-related claims logging, reducing errors and enabling employees to document tasks immediately after completion.',
    private: true,
    client: {
      name: 'Wits MSS',
      logo: 'mss-wits-logo.png',
    },
  },
  {
    title: 'Postgraduate Onboarding & Tracking System',
    technologies: [
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Frontend'] },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Backend'] },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Backend'] },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', categories: ['Database'] },
      { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'] },
      { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'] },
    ],
    description: 'An onboarding site to track postgraduate students, assign workstations, and monitor registration status for continued access.',
    private: true,
    client: {
      name: 'Wits MSS',
      logo: 'mss-wits-logo.png',
    },
  },
]);
</script>

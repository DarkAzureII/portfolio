<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Projects</h2>
    <p class="mb-6">Below are some professional projects I've worked on:</p>

    <div class="grid gap-8 md:grid-cols-2">
      <ProjectCard
        title="Employee Hours Logger"
        :technologies="[
          { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Frontend'] },
          { name: 'Tailwind CSS', logo: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4', categories: ['Web Development'] },
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Backend'] },
          { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', categories: ['Database'] },
          { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Backend'] },
          { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'] },
          { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'] },
        ]"
        description="A platform that simplifies work-related claims logging, reducing errors and enabling employees to document tasks immediately after completion, enhancing accuracy and boosting productivity."
        :private="true"
      />

      <ProjectCard
        title="Current Project (Under NDA)"
        :technologies="[
          { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Frontend'] },
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Backend'] },
          { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Backend'] },
          { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', categories: ['Database Management', 'Web Development'] },
          { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'] },
          { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'] },
        ]"
        description="An onboarding website that tracks postgraduate students and available workstations, assigns workstations to students, and monitors their registration status to ensure continued access."
        :private="true"
      />

      <ProjectCard
        title="Upcoming Project"
        :technologies="[
          { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', categories: ['Frontend'] },
          { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Frontend'] },
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Backend'] },
          { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Backend'] },
          { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', categories: ['Database'] },
          { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'] },
          { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'] },
        ]"
        description="A future project aiming to integrate complex data pipelines with a robust frontend."
        :private="true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
</script>

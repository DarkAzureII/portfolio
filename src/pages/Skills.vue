<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Skills & Technologies</h2>
    <p class="mb-6">Hover over the logos to see their names:</p>

    <!-- Filter Options -->
    <div class="mb-6 flex space-x-4 overflow-x-auto">
      <button
        v-for="category in categories"
        :key="category"
        @click="filterSkills(category)"
        class="py-2 px-4 rounded border text-sm font-semibold"
        :class="category === activeCategory ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'"
      >
        {{ category }}
      </button>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
      <div
        v-for="skill in filteredSkills"
        :key="skill.name"
        class="flex flex-col items-center relative group"
      >
        <!-- Logo -->
        <img :src="skill.logo" :alt="skill.name" class="h-16 w-16 object-contain transition-transform group-hover:scale-110" />
        <!-- Hover Title -->
        <span
          class="absolute bottom-0 mb-2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define all skills with their categories and logos
const skills = [
  // Programming Languages
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', categories: ['Web Development', 'Software Development'] },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', categories: ['Web Development', 'Software Development'] },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', categories: ['Software Development'] },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', categories: ['Software Development', 'Graphics Programming'] },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', categories: ['Software Development'] },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', categories: ['Machine Learning', 'Software Development'] },

  // Frameworks & Libraries
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Web Development'] },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Web Development'] },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Web Development'] },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Web Development'] },
  { name: 'Tailwind CSS', logo: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4', categories: ['Web Development'] },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Web Development'] },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', categories: ['Machine Learning'] },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', categories: ['Web Development'] },

  // Tools & Platforms
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', categories: ['DevOps'] },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', categories: ['DevOps'] },
  { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'] },
  { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'] },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', categories: ['DevOps', 'Software Development'] },
  { name: 'GitHub Actions', logo: 'https://avatars.githubusercontent.com/u/44036562?s=200&v=4', categories: ['DevOps'] },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', categories: ['Database Management', 'Web Development'] },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', categories: ['Database Management'] },

  // Graphics & Game Development
  { name: 'Vulkan', logo: 'Vulkan.svg', categories: ['Graphics Programming'] },
  { name: 'OpenGL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg', categories: ['Graphics Programming'] },
  { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', categories: ['Software Development'] },
];


// State for active category and filtered skills
const categories = [
  'All',
  'Web Development',
  'Machine Learning',
  'DevOps',
  'Graphics Programming',
  'Software Development',
  'Database Management',
];
const activeCategory = ref('All');
const filteredSkills = ref(skills);

// Filter function
const filterSkills = (category: string) => {
  activeCategory.value = category;
  filteredSkills.value =
    category === 'All' ? skills : skills.filter((skill) => skill.categories.includes(category));
};
</script>

<style scoped>
/* Transition for hover effect */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>

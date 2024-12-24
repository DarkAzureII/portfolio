<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Skills & Technologies</h2>
    <p class="mb-6">Hover over the logos to see their names and optionally, their proficiency levels:</p>

    <!-- Sort and Toggle Proficiency -->
    <div class="mb-4 flex space-x-4 overflow-x-auto">
      <!-- Sort Button -->
      <select v-model="sortCriteria" @change="sortSkills" class="border rounded px-4 py-2">
        <option value="name">Sort by Name</option>
        <option value="proficiency">Sort by Proficiency</option>
      </select>

      <!-- Toggle Proficiency Button -->
      <button
        @click="toggleProficiency"
        class="py-2 px-4 rounded border text-sm font-semibold"
        :class="showProficiency ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'"
      >
        {{ showProficiency ? 'Hide Proficiency' : 'Show Proficiency' }}
      </button>
    </div>

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
        v-for="skill in sortedSkills"
        :key="skill.name"
        class="flex flex-col items-center relative group"
      >
        <!-- Logo -->
        <img :src="skill.logo" :alt="skill.name" class="h-16 w-16 object-contain transition-transform group-hover:scale-110" />
        
        <!-- Hover Title -->
        <span
          class="absolute bottom-0 mb-6 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {{ skill.name }}
        </span>

        <!-- Proficiency Slider -->
        <div 
          v-if="showProficiency"
          class="w-full h-1 bg-gray-300 mt-2 rounded-full overflow-hidden relative opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div 
            class="h-full bg-blue-600 rounded-full transition-all duration-300" 
            :style="{ width: `${skill.proficiency}%` }"
          ></div>
          <span
            class="absolute -top-6 text-xs text-blue-600"
            :style="{ left: `${skill.proficiency - 5}%` }"
          >
            {{ skill.proficiency }}%
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const skills = [
  // Programming Languages
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', categories: ['Web Development', 'Software Development'], proficiency: 90 },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', categories: ['Web Development', 'Software Development'], proficiency: 90 },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', categories: ['Software Development'], proficiency: 90 },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', categories: ['Software Development', 'Graphics Programming'], proficiency: 90 },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', categories: ['Software Development'], proficiency: 90 },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', categories: ['Machine Learning', 'Software Development'], proficiency: 90 },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', categories: ['Software Development', 'Game Development'], proficiency: 90 },

  // Frameworks & Libraries
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Web Development'], proficiency: 90 },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Web Development'], proficiency: 90 },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Web Development'], proficiency: 90 },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Web Development'], proficiency: 90 },
  { name: 'Tailwind CSS', logo: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4', categories: ['Web Development'], proficiency: 90 },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Web Development'], proficiency: 90 },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', categories: ['Machine Learning'], proficiency: 90 },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', categories: ['Web Development'], proficiency: 90 },

  // Tools & Platforms
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', categories: ['DevOps'], proficiency: 90 },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', categories: ['DevOps'], proficiency: 90 },
  { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', categories: ['DevOps'], proficiency: 90 },
  { name: 'pm2', logo: 'https://avatars.githubusercontent.com/u/16356092?s=200&v=4', categories: ['DevOps'], proficiency: 90 },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', categories: ['DevOps', 'Software Development'], proficiency: 90 },
  { name: 'GitHub Actions', logo: 'https://avatars.githubusercontent.com/u/44036562?s=200&v=4', categories: ['DevOps'], proficiency: 90 },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', categories: ['Database Management', 'Web Development'], proficiency: 90 },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', categories: ['Database Management'], proficiency: 90 },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', categories: ['Database Management', 'Web Development'], proficiency: 90 },
  { name: 'Vercel', logo: 'https://avatars.githubusercontent.com/u/14985020?s=200&v=4', categories: ['Web Development', 'DevOps'], proficiency: 90 },
  { name: 'MS Access', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Microsoft_Office_Access_%282019-present%29.svg', categories: ['Database Management'], proficiency: 90 },

  // Graphics & Game Development
  { name: 'Vulkan', logo: 'Vulkan.svg', categories: ['Graphics Programming'], proficiency: 90 },
  { name: 'OpenGL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg', categories: ['Graphics Programming'], proficiency: 90 },
  { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', categories: ['Software Development'], proficiency: 90 },

  // Testing & Development
  { name: 'Vitest', logo: 'https://vitest.dev/logo.svg', categories: ['Web Development', 'DevOps'], proficiency: 90 },
  { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', categories: ['Web Development', 'DevOps'], proficiency: 90 },
  { name: 'Cypress', logo: 'https://avatars.githubusercontent.com/u/8908513?s=200&v=4', categories: ['Web Development', 'DevOps'], proficiency: 90 },

  // Core Web Technologies
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', categories: ['Web Development'], proficiency: 90 },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', categories: ['Web Development'], proficiency: 90 },
];


// State for active category, sort criteria, and toggling proficiency
const categories = ['All', 'Web Development', 'Machine Learning', 'DevOps', 'Graphics Programming', 'Software Development'];
const activeCategory = ref('All');
const sortCriteria = ref('name');
const showProficiency = ref(false);

// Filtered and Sorted Skills
const filteredSkills = computed(() =>
  activeCategory.value === 'All'
    ? skills
    : skills.filter((skill) => skill.categories.includes(activeCategory.value))
);

const sortedSkills = computed(() => {
  return [...filteredSkills.value].sort((a, b) => {
    if (sortCriteria.value === 'name') return a.name.localeCompare(b.name);
    if (sortCriteria.value === 'proficiency') return b.proficiency - a.proficiency;
    return 0;
  });
});

// Functions for filtering, sorting, and toggling
const filterSkills = (category: string) => {
  activeCategory.value = category;
};

const sortSkills = () => {
  // Trigger sorting dynamically through computed property
};

const toggleProficiency = () => {
  showProficiency.value = !showProficiency.value;
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
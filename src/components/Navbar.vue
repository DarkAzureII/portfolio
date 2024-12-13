<template>
  <nav class="flex justify-between items-center p-4 bg-gray-100">
    <!-- Logo -->
    <h1 class="text-xl font-bold whitespace-nowrap">My Portfolio</h1>

    <!-- Scrollable Navigation Menu -->
    <ul class="flex space-x-4 overflow-x-auto no-scrollbar">
      <li class="whitespace-nowrap">
        <router-link to="/">Home</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link to="/about">About</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link to="/skills">Skills</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link to="/coursework">Coursework</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Hide default scrollbars for a cleaner UI */
.no-scrollbar {
  scrollbar-width: none; /* For Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Edge */
}
</style>

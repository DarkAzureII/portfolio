<template>
    <nav class="flex justify-between items-center p-4 bg-gray-100">
      <h1 class="text-xl font-bold">My Portfolio</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/coursework">Coursework</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts">
  // Simple static navbar
  </script>
  
<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- 📐 Grid Background -->
    <div class="absolute inset-0 z-0 bg-grid-pattern pointer-events-none"></div>

    <!-- PNG Overlay -->
    <div
      class="absolute top-[10%] left-1/2 w-[90vw] max-w-[1400px] h-[90%] -translate-x-1/2 bg-svg-pattern z-0 pointer-events-none"
    ></div>

    <!-- 📄 Main Content -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <footer class="py-4 text-center text-gray-500">
        © 2025 Tebogo Sebopela
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

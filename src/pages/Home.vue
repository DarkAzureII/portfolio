<template>
  <section class="p-8 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 relative">
    <!-- Canvas for Particles -->
    <canvas id="particleCanvas" class="absolute inset-0 w-full h-full"></canvas>

    <!-- Main Heading -->
    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center" ref="heading">
      Hello, I’m Tebogo Sebopela
    </h2>

    <!-- Sub-heading / Tagline -->
    <p class="text-xl md:text-2xl text-gray-700 text-center mb-6" ref="subheading">
      A Software developer who loves building modern, scalable web solutions.
    </p>

    <!-- Key Skills / Highlights -->
    <ul class="text-lg text-gray-600 mb-8 space-y-1 text-center" ref="skillList">
      <li>• Specializing in Vue.js & TypeScript</li>
      <li>• Experienced in Node.js & Tailwind CSS</li>
      <li>• Focused on Performance & Accessibility</li>
    </ul>

    <!-- Call to Action -->
    <router-link
      to="/projects"
      class="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
      ref="ctaButton"
    >
      View My Projects
    </router-link>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

// Animation Refs
const heading = ref<HTMLElement | null>(null);
const subheading = ref<HTMLElement | null>(null);
const skillList = ref<HTMLElement | null>(null);
const ctaButton = ref<HTMLElement | null>(null);

onMounted(() => {
  // GSAP Animation
  const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });
  tl.from(heading.value, { y: 50 })
    .from(subheading.value, { y: 30 }, "-=0.5")
    .from(skillList.value, { y: 20 }, "-=0.5")
    .from(ctaButton.value, { scale: 0.8 }, "-=0.5");

  // Particle Animation
  const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const particles: { x: number; y: number; radius: number; color: string; dx: number; dy: number }[] = [];
  const particleCount = 50;
  const mouse = { x: -9999, y: -9999, radius: 100 }; // Interaction radius

  // Resize canvas to fill screen
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: `rgba(125, 125, ${Math.random() * 100 + 155}, 0.8)`,
      dx: Math.random() * 2 -1,
      dy: Math.random() * 2 -1,
    });
  }

  // Particle draw and update
  const drawParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      const distX = particle.x - mouse.x;
      const distY = particle.y - mouse.y;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // Bounce effect
      if (distance < mouse.radius) {
        const angle = Math.atan2(distY, distX);

        // Reverse direction and increase speed slightly for the bounce effect
        particle.dx = Math.cos(angle) * 2 - 1;
        particle.dy = Math.sin(angle) * 2 - 1;
      }

      // Update position
      particle.x += particle.dx;
      particle.y += particle.dy;

      // Boundary check (particles bounce off screen edges)
      if (particle.x > canvas.width || particle.x < 0) particle.dx *= -1;
      if (particle.y > canvas.height || particle.y < 0) particle.dy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    });

    requestAnimationFrame(drawParticles);
  };

  // Track mouse
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener("mouseleave", () => {
    // Reset mouse position when the cursor leaves the canvas
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Start animation
  drawParticles();
});
</script>

<style>
#particleCanvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

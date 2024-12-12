<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Coursework & Education</h2>
    <p class="mb-6">My formal education laid the groundwork for my development approach:</p>

    <!-- Layout with two columns -->
    <div class="grid grid-cols-2 gap-8">
      <!-- Titles Column -->
      <div>
        <div class="mb-4">
          <button 
            @click="toggleScrollMode" 
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
          >
            {{ scrollingStopped ? 'Back to Scrolling' : 'Stop Scrolling' }}
          </button>
        </div>

        <!-- Scrolling Titles -->
        <div 
          v-if="!scrollingStopped"
          ref="scrollContainer" 
          class="scroll-container flex space-x-4 overflow-hidden border-b border-gray-300 py-2 relative"
          @wheel.prevent="handleWheel"
        >
          <button 
            v-for="course in courses" 
            :key="course.title" 
            class="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded whitespace-nowrap"
            @click="selectCourse(course)"
          >
            <i :class="`fas ${course.icon}`"></i>
            <span>{{ course.title }}</span>
          </button>
        </div>

        <!-- Static Vertical List -->
        <ul v-else class="space-y-2 border-b border-gray-300 pb-2">
          <li 
            v-for="course in courses" 
            :key="course.title" 
            class="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 cursor-pointer"
            @click="selectCourse(course)"
          >
            <i :class="`fas ${course.icon}`"></i>
            <span>{{ course.title }}</span>
          </li>
        </ul>
      </div>

      <!-- Description Column -->
      <div class="border-l border-gray-300 pl-4">
        <div v-if="selectedCourse">
          <h3 class="text-xl font-bold mb-2">{{ selectedCourse.title }}</h3>
          <p class="text-gray-700">{{ selectedCourse.description }}</p>
        </div>
        <div v-else>
          <p class="text-gray-500">Select a course to see its description.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Course {
  title: string;
  icon: string;
  description: string;
}

const courses = [
  { 
    title: "Data Structures & Algorithms", 
    icon: "fa-code-branch", 
    description: "Learned how to optimize code and handle complexity efficiently." 
  },
  { 
    title: "Computer Networks", 
    icon: "fa-network-wired", 
    description: "Studied network architectures, protocols, and security measures to understand reliable data transmission and communication systems." 
  },
  { 
    title: "Database Fundamentals", 
    icon: "fa-database", 
    description: "Acquired skills in SQL, normalization, and secure data operations." 
  },
  { 
    title: "Software Design", 
    icon: "fa-pencil-ruler", 
    description: "Gained insight into agile methodologies, testing, and version control." 
  },
  { 
    title: "Parallel Computing", 
    icon: "fa-project-diagram", 
    description: "Explored techniques for concurrent execution, scalability, synchronization, and performance optimization on multi-core systems."
  },
  { 
    title: "Machine Learning", 
    icon: "fa-brain", 
    description: "Gained experience with supervised and unsupervised learning, model evaluation, and common libraries and frameworks for real-world predictive analytics."
  },
  { 
    title: "Analysis of Algorithms", 
    icon: "fa-chart-line", 
    description: "Learned to formally evaluate algorithmic complexity and correctness, applying Big-O notation and advanced proof techniques."
  },
  { 
    title: "Formal Languages & Automata", 
    icon: "fa-puzzle-piece", 
    description: "Studied the theoretical foundations of computation, including regular expressions, grammars, and Turing machines."
  },
  { 
    title: "Operating Systems & System Programming", 
    icon: "fa-microchip", 
    description: "Delved into low-level system concepts such as process management, memory allocation, concurrency, and OS architecture."
  },
  { 
    title: "Computer Graphics & Visualization", 
    icon: "fa-image", 
    description: "Learned about rendering pipelines, 3D transformations, shading, and data visualization techniques using graphics APIs and tools."
  },
  { 
    title: "Information Systems", 
    icon: "fa-server", 
    description: "Understood the principles of enterprise systems, data integration, information security, and aligning technology with organizational goals."
  },
]

const selectedCourse = ref<Course | null>(null);
const scrollContainer = ref<HTMLElement|null>(null)
const scrollingStopped = ref(false)

// Scroll settings
let scrollSpeed = 2
let scrollInterval: number | null = null

function startScrolling() {
  if (!scrollingStopped.value) {
    scrollInterval = window.setInterval(() => {
      if (scrollContainer.value) {
        // Increment the scroll position
        scrollContainer.value.scrollLeft += scrollSpeed;

        const firstChild = scrollContainer.value.firstElementChild as HTMLElement;

        if (firstChild) {
          // Calculate the width of the first child plus the gap (16px for space-x-4)
          const firstChildWidth = firstChild.offsetWidth + 16; // Tailwind's `space-x-4` = 1rem = 16px

          // Check if the first child is completely out of view
          if (scrollContainer.value.scrollLeft >= firstChildWidth) {
            // Move the first child to the end of the container
            scrollContainer.value.appendChild(firstChild);

            // Adjust scrollLeft to maintain a seamless flow
            scrollContainer.value.scrollLeft -= firstChildWidth;
          }
        }
      }
    }, 50); // Adjust interval for speed
  }
}

function stopScrolling() {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
}


function handleWheel(event: WheelEvent) {
  if (scrollingStopped.value) return
  scrollSpeed += (event.deltaY > 0) ? 1 : -1
  if (scrollSpeed > 5) scrollSpeed = 5
  if (scrollSpeed < -5) scrollSpeed = -5
}

function selectCourse(course: any) {
  selectedCourse.value = course
}

function toggleScrollMode() {
  scrollingStopped.value = !scrollingStopped.value
  if (scrollingStopped.value) {
    stopScrolling()
  } else {
    startScrolling()
    console.log("started scrollimng")
  }
}

onMounted(() => {
  startScrolling()
})

onBeforeUnmount(() => {
  stopScrolling()
})
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
.scroll-container {
  display: flex;
  overflow-x: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
}

</style>

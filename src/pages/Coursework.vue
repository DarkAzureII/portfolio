<template>
  <section class="education-section">
    <div class="section-header">
      <h2>Coursework & Education</h2>
      <p>My formal education laid the groundwork for my development approach</p>
    </div>
    
    <div class="content-wrapper">
      <div class="carousel-container">
        <div class="carousel-controls">
          <button @click="toggleRotation" class="control-btn">
            <i :class="rotationPaused ? 'fa-play' : 'fa-pause'"></i>
            {{ rotationPaused ? 'Start Rotation' : 'Pause Rotation' }}
          </button>
          <button @click="resetSelection" class="control-btn">
            <i class="fa-solid fa-rotate-left"></i>
            Reset View
          </button>
        </div>
        
        <div class="carousel" :class="{ 'paused': rotationPaused }" :style="`--quantity: ${courses.length};`">
          <div 
            v-for="(course, index) in courses" 
            :key="course.title" 
            class="course-item" 
            :style="`--position: ${index};`"
            @click="selectCourse(course)"
            :title="course.title"
          >
            <img :src="course.image" :alt="course.title" class="course-icon" />
          </div>
        </div>
      </div>
      
      <div class="description-container">
        <div v-if="selectedCourse">
          <div class="description-header">
            <h3>{{ selectedCourse.title }}</h3>
          </div>
          <p class="course-description">{{ selectedCourse.description }}</p>
        </div>
        <div v-else class="empty-state">
          <i class="fa-solid fa-graduation-cap"></i>
          <p>Select a course to see its description</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Course {
  title: string;
  image: string;
  description: string;
}

const courses: Course[] = [
  { 
    title: "Data Structures & Algorithms", 
    image: "/courses/DSA.webp", 
    description: "Learned how to optimize code and handle complexity efficiently through various data structures and algorithmic techniques." 
  },
  { 
    title: "Computer Networks", 
    image: "/courses/CN.jpg", 
    description: "Studied network architectures, protocols, and security measures to understand reliable data transmission and communication systems." 
  },
  { 
    title: "Database Fundamentals", 
    image: "/courses/DF.jpg", 
    description: "Acquired skills in SQL, normalization, and secure data operations for efficient data management and retrieval." 
  },
  { 
    title: "Software Design", 
    image: "/courses/SD.jpg", 
    description: "Gained insight into agile methodologies, testing strategies, and version control systems for robust software development." 
  },
  { 
    title: "Parallel Computing", 
    image: "/courses/PC.jpg", 
    description: "Explored techniques for concurrent execution, scalability, synchronization, and performance optimization on multi-core systems." 
  },
  { 
    title: "Machine Learning", 
    image: "/courses/MC.jpg", 
    description: "Gained experience with supervised and unsupervised learning, model evaluation, and common libraries for real-world predictive analytics." 
  },
  { 
    title: "Analysis of Algorithms", 
    image: "/courses/AAA.png", 
    description: "Learned to formally evaluate algorithmic complexity and correctness using Big-O notation and advanced proof techniques." 
  },
  { 
    title: "Formal Languages & Automata", 
    image: "/courses/FLA.webp", 
    description: "Studied the theoretical foundations of computation, including regular expressions, grammars, and Turing machines." 
  },
  { 
    title: "Operating Systems", 
    image: "/courses/OS.jpg", 
    description: "Delved into low-level system concepts such as process management, memory allocation, concurrency, and OS architecture." 
  },
  { 
    title: "Computer Graphics", 
    image: "/courses/CGV.png", 
    description: "Learned about rendering pipelines, 3D transformations, shading, and data visualization techniques using graphics APIs." 
  },
  { 
    title: "Coding and Cryptography", 
    image: "/courses/CC.jpg", 
    description: "Studied encryption techniques, secure coding practices, and the mathematical foundations of cryptography." 
  },
  { 
    title: "Information Systems", 
    image: "/courses/IS.jpg", 
    description: "Understood enterprise systems, data integration, information security, and aligning technology with organizational goals." 
  }
];

const selectedCourse = ref<Course | null>(null);
const rotationPaused = ref(false);

function selectCourse(course: Course) {
  selectedCourse.value = course;
}

function toggleRotation() {
  rotationPaused.value = !rotationPaused.value;
}

function resetSelection() {
  selectedCourse.value = null;
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.education-section {
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.education-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.section-header h2 {
  font-size: 3.5rem;
  color: #25283B;
  margin-bottom: 15px;
  font-weight: 900;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
}

.section-header p {
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.carousel-container {
  flex: 1;
  min-width: 100%;
  perspective: 4000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
}

.carousel-controls {
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
  z-index: 4;
}

.control-btn {
  padding: 12px 25px;
  background: #4361ee;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(67, 97, 238, 0.4);
  display: flex;
  align-items: center;
  gap: 8px;
}

.control-btn:hover {
  background: #3a56d4;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(67, 97, 238, 0.5);
}

.control-btn:active {
  transform: translateY(1px);
}

.carousel {
  position: relative;
  width: 200px;
  height: 250px;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: autoRotate 15s linear infinite;
  z-index: 2;
}

.carousel.paused {
  animation-play-state: paused;
}

@keyframes autoRotate {
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
}

.course-item {
  position: absolute;
  inset: 0 0 0 0;
  width: 50%;
  height: 50%;
  cursor: pointer;
  transition: all 0.4s ease;
  transform: rotateY(calc( (var(--position) - 1) * 30deg)) translateZ(350px); 
}

.course-item:hover {
  /* Remove translateZ and scale changes */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.course-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.course-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.description-container {
  display: flex;
  padding: 30px;
  position: relative;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
}

.course-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
}

.description-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.description-header i {
  font-size: 2.5rem;
  color: #4361ee;
}

.description-header h3 {
  font-size: 2rem;
  color: #25283B;
}

.course-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #777;
}

.empty-state i {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #ddd;
}

.empty-state p {
  font-size: 1.2rem;
  max-width: 350px;
}

/* Responsive design */
@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .carousel-container {
    order: 2;
  }
  
  .section-header h2 {
    font-size: 2.8rem;
  }
  
  .carousel {
    width: 250px;
    height: 250px;
  }
  
  .course-item {
    transform: rotateY(calc(var(--position) * (360deg / var(--quantity)))) translateZ(350px);
  }
  
  .course-item:hover {
    transform: rotateY(calc(var(--position) * (360deg / var(--quantity)))) translateZ(380px) scale(1.05);
  }
}

@media (max-width: 500px) {
  .education-section {
    padding: 20px;
  }
  
  .section-header h2 {
    font-size: 2.3rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .carousel {
    width: 220px;
    height: 220px;
  }
  
  .course-item {
    transform: rotateY(calc(var(--position) * (360deg / var(--quantity)))) translateZ(280px);
  }
  
  .course-item:hover {
    transform: rotateY(calc(var(--position) * (360deg / var(--quantity)))) translateZ(300px) scale(1.05);
  }
  
  .course-icon {
    font-size: 2.8rem;
  }
  
  .course-title {
    font-size: 1.2rem;
  }
}
</style>
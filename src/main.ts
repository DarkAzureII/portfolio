import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './styles.css'; // Import Tailwind styles

createApp(App)
  .use(router)
  .mount('#app');

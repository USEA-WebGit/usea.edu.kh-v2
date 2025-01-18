import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import { createPinia } from 'pinia';
import './style.css';
import './assets/tailwind.css';

const app = createApp(App);

// Set up dynamic title based on route metadata
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'USEA'; // Default title if meta.title is not set
  next();
});

// Use router and Pinia, then mount the app
app.use(router).use(createPinia()).mount('#app');

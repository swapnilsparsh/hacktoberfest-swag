import { createApp } from 'vue'
import { inject } from '@vercel/analytics';
import './tailwind.css'
import App from './App.vue'

// import './assets/main.css'
inject();
createApp(App).mount('#app')

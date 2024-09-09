import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'

function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-V5G3W2P568`;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-V5G3W2P568');
  };
}

loadGoogleAnalytics();

createApp(App).mount('#app')
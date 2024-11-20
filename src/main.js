import { createApp } from 'vue'
import App from './App.vue'
import '@/global.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Font Awesome 라이브러리에 아이콘 추가
library.add(fas);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
createApp(App).mount('#app')

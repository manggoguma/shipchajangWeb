import { createApp } from 'vue';
import App from './App.vue';
import '@/global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullpage.css';
import 'fullpage.js/dist/jquery.fullpage.js';
import router from './router';
import store from './store/store'; // Vuex 스토어 가져오기

// Font Awesome 라이브러리에 아이콘 추가
library.add(fas);

window.$ = window.jQuery = $;

const app = createApp(App);


app.use(store); 
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app'); 

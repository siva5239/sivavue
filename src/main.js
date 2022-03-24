import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//  import Vue from 'vue'
import vPage from 'v-page';


createApp(App).use(router).use(vPage).mount('#app')

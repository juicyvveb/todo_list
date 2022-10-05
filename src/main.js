import { createApp } from 'vue';
import App from './App.vue';
import store from './assets/vuex/store';

createApp(App).use(store).mount('#app')

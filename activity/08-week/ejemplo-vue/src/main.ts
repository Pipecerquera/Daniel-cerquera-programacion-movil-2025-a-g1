import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.mount('#app');
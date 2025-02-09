import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { overflowState } from './stores/overflowstore';

const app = createApp(App)

app.use(router)

app.mount('#app')


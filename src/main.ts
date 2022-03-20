import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naiveUI from '@/plugins/naive'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(naiveUI)
app.use(createPinia())

app.mount('#app')

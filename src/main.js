import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

// use component globaly
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App);

app.component('GlobalComponent', GlobalComponent);
app.mount('#app')

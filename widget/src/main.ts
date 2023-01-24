import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import Widget from "./components/Widget.ce.vue";

const WidgetElement = defineCustomElement(Widget)
customElements.define("widget-vue", WidgetElement);

import './assets/main.css'

createApp(App).mount('#app')

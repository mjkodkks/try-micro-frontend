import { defineCustomElement } from 'vue'
import Widget from "./components/Widget.ce.vue";

const WidgetElement = defineCustomElement(Widget)
customElements.define("widget-vue", WidgetElement);
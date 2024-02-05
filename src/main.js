import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "./assets/css/global.css";

const app = createApp(App);

import { registerGlobalComponents } from "./utils/import";
registerGlobalComponents(app);

app.use(router);

app.mount("#app");

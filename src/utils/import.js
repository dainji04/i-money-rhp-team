import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layout/auth.vue"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layout/default.vue"))
  );
}

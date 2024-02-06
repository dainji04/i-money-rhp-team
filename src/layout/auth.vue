<template>
  <navigation-brand />
  <slot />
</template>
<script>
import NavigationBrand from "@/components/navigationBrand.vue";

export default {
  components: { NavigationBrand },
};
</script>

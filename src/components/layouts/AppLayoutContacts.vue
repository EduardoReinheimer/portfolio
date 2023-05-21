<template>
  <div>
    <header class="header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>
<script>
import AppLayoutLinks from './AppLayoutLinks.vue';

export default {
  name: "AppLayoutHome",
  components: { AppLayoutLinks }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: red;
}
</style>
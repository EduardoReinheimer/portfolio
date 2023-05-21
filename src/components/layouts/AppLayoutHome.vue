<template>
  <div>
    <header class="header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>
<script>
import AppLayoutLinks from '@/components/layouts/AppLayoutLinks.vue'

export default {
  name: "AppLayoutHome",
  components: { AppLayoutLinks }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>
<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>

import { markRaw, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppLayoutDefault from './AppLayoutDefault.vue'
export default {
  name: "AppLayout",
  data: () => ({
    layout: AppLayoutDefault
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import('./AppLayout' + route.meta.layout + '.vue')
          this.layout = component?.default
        } catch (e) {
          this.layout = AppLayoutDefault
        }
      }
    }
  }
}
</script>
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  }
}
</script>

<style lang="scss">
/* Убирает постоянный scrollbar
https://vuetifyjs.com/en/introduction/frequently-asked-questions/
#the-scrollbar-is-showing-even-though-my-content-is-not-overflowing-vertically
*/
html {
  overflow-y: auto !important;
}
</style>

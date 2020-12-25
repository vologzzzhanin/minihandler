<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
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

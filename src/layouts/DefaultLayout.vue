<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="deep-purple lighten-5">
      <p>side-bar</p>
    </v-navigation-drawer>

    <v-app-bar app class="teal lighten-5">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Обработка класса</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="$store.dispatch('logout')"
        class="deep-orange--text text--darken-5"
        color="deep-orange lighten-3"
      >
        Выйти
      </v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'default-layout',
  data: () => ({
    drawer: true
  })
}
</script>

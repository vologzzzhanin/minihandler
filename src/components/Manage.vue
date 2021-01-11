<template>
  <v-toolbar flat>
    <v-btn
      large
      fab
      class="pa-2 teal--text text--darken-3"
      color="teal lighten-2"
      @click="$store.dispatch('saveClass')"
      title="Сохранить"
    >
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      large
      fab
      class="pa-2 red--text text--darken-2"
      color="red lighten-2"
      @click="$store.dispatch('resetClass')"
      title="Сбросить"
    >
      <v-icon>mdi-reload</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'manage'
}
</script>

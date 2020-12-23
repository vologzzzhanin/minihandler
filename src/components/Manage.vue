<template>
  <v-row>
    <v-col cols="auto" class="mr-auto">
      <v-btn
        class="pa-2"
        outlined
        large
        fab
        color="teal lighten-2"
        @click="saveClass"
      >
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
        class="pa-2"
        outlined
        large
        fab
        color="red lighten-2"
        @click="resetClass"
      >
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'manage',
  methods: {
    saveClass() {
      this.$store.dispatch('saveClass')
    },
    resetClass() {
      this.$store.dispatch('resetClass')
    }
  }
}
</script>

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
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'manage',
  props: {
    entityOptions: Object
  },
  methods: {
    saveClass() {
      axios
        .post('api/v1/make_history', this.class_)
        .then(responce => {})
        .catch(e => {
          console.log(e)
        })
    },
    resetClass() {
      this.$store.commit('RESET_STATE')
    }
  },
  computed: mapState({
    class_: state => state.class
  })
}
</script>

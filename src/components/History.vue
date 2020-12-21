<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list dense>
      <v-subheader>
        <h2>История</h2>
      </v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(event, i) in history"
          :key="i"
          @click="setState(i)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ event.data.className }}</v-list-item-title>
            <v-list-item-subtitle>{{ event.timestamp }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'history',
  props: {
    history: Array
  },
  methods: {
    setState(i) {
      console.log(i)
      let newState = this.history[i]['data']
      this.$store.commit('SET_STATE', { newState })
    }
  }
}
</script>

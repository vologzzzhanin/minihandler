<template>
  <v-card class="light-blue lighten-4" elevation="2" outlined>
    <v-card-title>Классы</v-card-title>
    <v-card-subtitle>Список созданных классов</v-card-subtitle>
    <v-card-text>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(cls, i) in classList"
            :key="i"
            @click="$store.dispatch('selectClass', cls.id)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{
                  cls.data.className ? cls.data.className : 'Класс отсутствует'
                }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ cls.timestamp | date }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-btn icon x-small @click="$store.dispatch('deleteClass', cls.id)">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'class-list',
  computed: mapState(['classList']),
  created() {
    this.$store.dispatch('getClassList')
  }
}
</script>

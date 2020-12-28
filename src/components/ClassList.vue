<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="300" tile>
          <v-list dense>
            <v-subheader>
              <h2>Классы</h2>
            </v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(cls, i) in classList"
                :key="i"
                @click="$store.dispatch('selectClass', cls.id)"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{
                      cls.data.className
                        ? cls.data.className
                        : 'Класс отсутствует'
                    }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ cls.timestamp | date }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-btn
                  icon
                  x-small
                  @click="$store.dispatch('deleteClass', cls.id)"
                >
                  <v-icon>
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'class-list',
  computed: mapState(['classList'])
}
</script>

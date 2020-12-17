<template>
  <v-card :class="options.class.class" outlined>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ 'Класс: ' + class_.className }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form @submit.prevent>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  clearable
                  dense
                  type="text"
                  clear-icon="mdi-close-circle"
                  v-model="class_.className"
                  :rules="options.class.rules"
                  :label="options.class.label"
                  :prepend-inner-icon="options.class.icon"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import { options } from '@/options'

export default {
  name: 'class',
  data: () => ({
    options: options
  }),
  computed: mapState({
    class_: state => state.class
  })
}
</script>

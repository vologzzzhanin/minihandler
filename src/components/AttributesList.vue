<template>
  <v-card
    v-if="class_.attributes.length"
    :class="options.attribute.listClass"
    outlined
  >
    <v-expansion-panels
      v-for="(attribute, i) in class_.attributes"
      :key="i"
      focusable
    >
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-header>
          {{ 'Атрибут ' + i + ': ' + attribute.attributeName }}
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
                  v-model="attribute.attributeName"
                  :rules="options.attribute.rules"
                  :label="options.attribute.label"
                  :prepend-inner-icon="options.attribute.icon"
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
  name: 'attributes-list',
  data: () => ({
    options: options
  }),
  computed: mapState({
    class_: state => state.class
  })
}
</script>

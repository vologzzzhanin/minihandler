<template>
  <v-card
    v-if="class_.attributes.length"
    class="pt-2 px-2 mb-2 green lighten-5"
    outlined
  >
    <v-expansion-panels v-for="(attribute, i) in class_.attributes" :key="i">
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-header>
          {{ 'Атрибут ' + attribute.id + ': ' + attribute.attributeName }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  clearable
                  dense
                  :label="options.class.attributeLabel"
                  type="text"
                  :prepend-inner-icon="options.class.attributeIcon"
                  clear-icon="mdi-close-circle"
                  v-model="attribute.attributeName"
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

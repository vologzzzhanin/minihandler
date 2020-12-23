<template>
  <v-card v-if="attributes.length" :class="attributeOptions.listClass" outlined>
    <v-expansion-panels
      v-for="(attribute, index) in attributes"
      :key="index"
      focusable
    >
      <v-expansion-panel
        class="mb-2"
        @click="attributeName = attribute.attributeName"
      >
        <v-expansion-panel-header>
          {{ 'Атрибут ' + (index + 1) + ': ' + attribute.attributeName }}
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
                  v-model="attributeName"
                  :rules="attributeOptions.rules"
                  :label="attributeOptions.label"
                  :prepend-inner-icon="attributeOptions.icon"
                  append-outer-icon="mdi-content-save"
                  @input="saveAttributeName(index, attributeName)"
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
    attributeName: '',
    attributeOptions: options.attribute
  }),
  computed: mapState({
    attributes: state => state.class.data.attributes
  }),
  methods: {
    saveAttributeName(index, value) {
      this.$store.dispatch('editAttribute', {
        fieldName: 'attributeName',
        index,
        value
      })
    }
  }
}
</script>

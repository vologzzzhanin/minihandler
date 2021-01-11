<template>
  <v-card :class="option.listClass" elevation="2" outlined>
    <v-card-subtitle>Наименования атрибутов</v-card-subtitle>
    <v-card-text>
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
            {{ '#' + (index + 1) + ': ' + attribute.attributeName }}
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
                    :rules="option.rules"
                    :label="option.label"
                    :prepend-inner-icon="option.icon"
                    append-outer-icon="mdi-content-save"
                    @input="saveAttributeName(index, attributeName)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'attributes-list',
  props: {
    option: Object
  },
  data: () => ({
    attributeName: ''
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

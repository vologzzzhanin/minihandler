<template>
  <v-card :class="classOptions.class" outlined>
    <v-expansion-panels v-model="expanded">
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ 'Класс: ' + className }}
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
                  v-model="className"
                  :rules="classOptions.rules"
                  :label="classOptions.label"
                  :prepend-inner-icon="classOptions.icon"
                  append-outer-icon="mdi-content-save"
                  @click:append-outer="saveClassName"
                  @keyup.enter="saveClassName"
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
import { options } from '@/plugins/options'

export default {
  name: 'class',
  data: () => ({
    expanded: null,
    className: '',
    classOptions: options.class
  }),
  created() {
    this.className = this.$store.state.class.data.className
  },
  methods: {
    closePanel() {
      this.expanded = null
    },
    saveClassName() {
      this.$store.dispatch('setEntity', {
        entitySetting: this.classOptions.editAction,
        entityName: this.className
      })
      this.closePanel()
    }
  }
}
</script>

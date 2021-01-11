<template>
  <v-card :class="option.class" elevation="2" outlined>
    <v-card-subtitle>{{ option.label }}</v-card-subtitle>
    <v-card-text>
      <v-expansion-panels v-model="expanded">
        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ className }}
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
                    :rules="option.rules"
                    :label="option.label"
                    :prepend-inner-icon="option.icon"
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'class',
  props: {
    option: Object
  },
  data: () => ({
    expanded: null,
    className: ''
  }),
  created() {
    this.className = this.$store.state.class.data.className
  },
  methods: {
    saveClassName() {
      this.$store.dispatch('setEntity', {
        entitySetting: this.option.editAction,
        entityName: this.className
      })
      this.expanded = null
    }
  }
}
</script>

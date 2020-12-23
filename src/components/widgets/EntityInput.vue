<template>
  <v-form ref="form" @submit.prevent :lazy-validation="true">
    <v-row>
      <v-col cols="12">
        <v-text-field
          outlined
          clearable
          dense
          :label="entityOptions.label"
          type="text"
          append-outer-icon="mdi-content-save"
          :prepend-inner-icon="entityOptions.icon"
          clear-icon="mdi-close-circle"
          :rules="rules"
          v-model="entityName"
          @click:append-outer="saveEntity"
          @keyup.enter="saveEntity"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'entity-input',
  props: {
    entityOptions: Object
  },
  data: () => ({
    entityName: '',
    rules: []
  }),
  methods: {
    saveEntity() {
      this.rules = this.entityOptions.rules
      let isValid = this.$refs.form.validate()
      if (!isValid) {
        return
      }
      this.$store.dispatch('setEntity', {
        entitySetting: this.entityOptions.addAction,
        entityName: this.entityName
      })
      this.$refs.form.reset()
    }
  }
}
</script>

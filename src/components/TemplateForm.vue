<template>
  <v-card class="pa-2 lime lighten-5" outlined>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-text-field
            outlined
            dense
            solo
            readonly
            :value="classTemplate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            outlined
            dense
            solo
            readonly
            :value="nameExample"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'template-form',
  data: () => ({
    // options: options
  }),
  computed: {
    ...mapState({
      class_: state => state.class
    }),
    classTemplate() {
      let template = ''
      this.class_.attributes.forEach(
        x =>
          (template += `{${x.beforeValue}[${x.attributeName}]${x.afterValue}}`)
      )
      return template
    },
    nameExample() {
      let name = ''
      this.class_.attributes.forEach(
        x => (name += `${x.beforeValue}${x.value}${x.afterValue}`)
      )
      return name
    }
  }
}
</script>

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
  computed: {
    ...mapState({
      attributes: state => state.class.data.attributes
    }),
    classTemplate() {
      let template = ''
      this.attributes.forEach(
        x =>
          (template += `{${x.beforeValue}[${x.attributeName}]${x.afterValue}}`)
      )
      return template
    },
    nameExample() {
      let name = ''
      this.attributes.forEach(
        x => (name += `${x.beforeValue}${x.value}${x.afterValue}`)
      )
      return name
    }
  }
}
</script>

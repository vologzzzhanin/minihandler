<template>
  <v-card v-if="showAttributes" class="yellow lighten-4" elevation="2" outlined>
    <v-card-title>Шаблон наименования</v-card-title>
    <v-card-subtitle>
      Пример шаблона, составленного из атрибутов
    </v-card-subtitle>
    <v-container>
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
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'template-form',
  computed: {
    ...mapState({
      attributes: state => state.class.data.attributes
    }),
    ...mapGetters(['showAttributes']),
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

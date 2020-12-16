<template>
  <v-card v-if="class_.className" class="pa-2 red lighten-5" outlined>
    <v-expansion-panels :value="0">
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ options.attribute.request }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <EntityInput :entity-options="options.attribute" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import EntityInput from '@/components/widgets/EntityInput'
import { mapState } from 'vuex'
import { options } from '@/options'

export default {
  name: 'attribute-form',
  components: {
    EntityInput
  },
  data: () => ({
    options: options
  }),
  computed: mapState({
    class_: state => state.class
  })
}
</script>

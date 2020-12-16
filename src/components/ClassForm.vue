<template>
  <v-card class="pa-2 mb-2 blue lighten-5" outlined>
    <v-expansion-panels :value="!class_.className ? 0 : null">
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{
            class_.className
              ? 'Класс: ' + class_.className
              : options.class.request
          }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <EntityInput :entity-options="options.class" />
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
  name: 'class-form',
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

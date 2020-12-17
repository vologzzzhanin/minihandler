<template>
  <v-card :class="option.class" outlined>
    <v-expansion-panels :value="option.expanded">
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ option.request }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <EntityInput :entity-options="option" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import EntityInput from '@/components/widgets/EntityInput'

export default {
  name: 'input-form',
  components: {
    EntityInput
  },
  props: {
    option: Object
  }
}
</script>

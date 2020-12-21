<template>
  <v-card v-click-outside="closePanel" :class="option.class" outlined>
    <v-expansion-panels v-model="expanded">
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
  data: () => ({
    expanded: 0
  }),
  components: {
    EntityInput
  },
  props: {
    option: Object
  },
  methods: {
    closePanel() {
      this.expanded = null
    }
  }
}
</script>

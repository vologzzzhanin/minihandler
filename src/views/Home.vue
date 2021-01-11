<template>
  <v-main>
    <v-container fill-height>
      <v-row align="start">
        <v-col cols="3">
          <ClassList />
        </v-col>
        <v-col cols="3">
          <Taxonomy />
        </v-col>
        <v-col cols="6">
          <ValueTable />
        </v-col>
      </v-row>
      <v-row align="start">
        <v-col cols="8">
          <TemplateForm />
        </v-col>
      </v-row>
      <v-row align="end">
        <v-col cols="12">
          <Manage />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ClassList from '@/components/ClassList'
import Taxonomy from '@/components/Taxonomy'
import ValueTable from '@/components/ValueTable'
import TemplateForm from '@/components/TemplateForm'
import Manage from '@/components/Manage'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    ClassList,
    Taxonomy,
    ValueTable,
    TemplateForm,
    Manage
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    showAttributes() {
      return this.$store.state.class.data.attributes.length > 0
    }
  }
}
</script>

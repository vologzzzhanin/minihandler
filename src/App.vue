<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      History
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container>
        <v-row>
          <v-col cols="6" sm="4">
            <div>
              <h2>Таксономия</h2>
            </div>
            <ClassForm />
            <AttributesList />
            <AttributeForm />
          </v-col>
          <v-col cols="6">
            <div>
              <h2>Значения атрибутов</h2>
            </div>
            <ValueTable />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ClassForm from '@/components/ClassForm'
import AttributesList from '@/components/AttributesList'
import AttributeForm from '@/components/AttributeForm'
import ValueTable from '@/components/ValueTable'
import { mapState } from 'vuex'
import { options } from '@/options'

export default {
  name: 'app',
  components: {
    ClassForm,
    AttributesList,
    AttributeForm,
    ValueTable
  },
  data: () => ({
    drawer: null
  })
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="deep-purple lighten-5">
      <ClassList />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Пример генерации шаблона</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="$store.dispatch('logout')"
        class="deep-orange--text text--darken-5"
        color="deep-orange lighten-3"
      >
        Выйти
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container>
        <v-row>
          <v-col cols="6" sm="4">
            <div>
              <h3>Таксономия</h3>
            </div>
            <div v-if="showClass">
              <InputForm :option="options.class" />
            </div>
            <div v-else>
              <Class />
              <AttributesList />
              <InputForm :option="options.attribute" />
            </div>
          </v-col>
          <v-col cols="6" v-if="showAttributes">
            <div>
              <h3>Значения атрибутов</h3>
            </div>
            <ValueTable />
          </v-col>
        </v-row>
        <v-row v-if="showAttributes">
          <v-col cols="12">
            <div>
              <h3>Шаблон</h3>
            </div>
            <TemplateForm />
          </v-col>
        </v-row>
        <Manage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InputForm from '@/components/InputForm'
import AttributesList from '@/components/AttributesList'
import Class from '@/components/Class'
import ValueTable from '@/components/ValueTable'
import TemplateForm from '@/components/TemplateForm'
import ClassList from '@/components/ClassList'
import Manage from '@/components/Manage'
import { mapState } from 'vuex'
import { options } from '@/plugins/options'

export default {
  name: 'main-layout',
  components: {
    InputForm,
    Class,
    AttributesList,
    ValueTable,
    TemplateForm,
    ClassList,
    Manage
  },
  data: () => ({
    drawer: null,
    options: options
  }),
  computed: {
    showClass() {
      return !this.$store.state.class.data.className
    },
    showAttributes() {
      return this.$store.state.class.data.attributes.length > 0
    }
  },
  created() {
    this.$store.dispatch('getClassList')
  }
}
</script>

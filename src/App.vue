<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="deep-purple lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <History :history="history" />
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Пример генерации шаблона</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container>
        <v-row>
          <v-col cols="6" sm="4">
            <div>
              <h3>Таксономия</h3>
            </div>
            <div v-if="!class_.className">
              <InputForm v-if="!class_.className" :option="options.class" />
            </div>
            <div v-else>
              <Class />
              <AttributesList />
              <InputForm :option="options.attribute" />
            </div>
          </v-col>
          <v-col cols="6" v-if="attributesLength">
            <div>
              <h3>Значения атрибутов</h3>
            </div>
            <ValueTable />
          </v-col>
        </v-row>
        <v-row v-if="attributesLength">
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
import axios from 'axios'
import InputForm from '@/components/InputForm'
import AttributesList from '@/components/AttributesList'
import Class from '@/components/Class'
import ValueTable from '@/components/ValueTable'
import TemplateForm from '@/components/TemplateForm'
import History from '@/components/History'
import Manage from '@/components/Manage'
import { mapState } from 'vuex'
import { options } from '@/options'

export default {
  name: 'app',
  components: {
    InputForm,
    Class,
    AttributesList,
    ValueTable,
    TemplateForm,
    History,
    Manage
  },
  data: () => ({
    drawer: null,
    options: options,
    history: null
  }),
  computed: {
    ...mapState({
      class_: state => state.class
    }),
    attributesLength() {
      return this.class_.attributes.length
    }
  },
  created() {
    axios
      .get('api/v1/get_history')
      .then(responce => {
        this.history = responce.data.history
        console.log(this.history)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

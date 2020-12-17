<template>
  <div>
    <v-data-table
      :headers="options.attributeValue.headers"
      :items="class_.attributes"
      hide-default-footer
    >
      <template v-slot:body="{ items, headers }">
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td v-for="(header, key) in headers" :key="key">
              <v-edit-dialog
                :return-value.sync="item[header.value]"
                @save="save"
                @cancel="cancel"
                @open="open"
                @close="close"
                cancel-text="Отмена"
                save-text="Сохранить"
                large
              >
                {{ item[header.value] }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item[header.value]"
                    :label="item[header.label]"
                    :rules="item[header.rules]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false">
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { options } from '@/options'

export default {
  name: 'value-table',
  data() {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      options: options
    }
  },
  computed: mapState({
    class_: state => state.class
  }),
  methods: {
    save() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Сохранено'
    },
    cancel() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Отменено'
    },
    open() {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Редактирование'
    },
    close() {
      console.log('Редактирование закрыто')
    }
  }
}
</script>

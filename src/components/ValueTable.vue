<template>
  <div>
    <v-data-table
      :headers="options.attributeValue.headers"
      :items="class_.attributes"
      hide-default-footer
    >
      <template v-slot:body="{ items, headers }">
        <tbody>
          <tr v-for="(attribute, i) in items" :key="i">
            <td v-for="(header, key) in headers" :key="key">
              <v-edit-dialog
                @save="save(header.name, i, fieldValue)"
                @cancel="cancel"
                @open="open(attribute[header.name])"
                cancel-text="Отмена"
                save-text="Сохранить"
                large
              >
                {{ attribute[header.name] }}
                <template v-slot:input>
                  <v-text-field v-model="fieldValue" single-line></v-text-field>
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
      options: options,
      fieldValue: '',
      snack: false,
      snackColor: '',
      snackText: ''
    }
  },
  computed: mapState({
    class_: state => state.class
  }),
  methods: {
    save(name, i, value) {
      this.$store.commit(this.options.attribute.edit_action, {
        name,
        i,
        value
      })
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Сохранено'
    },
    cancel() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Отменено'
    },
    open(value) {
      this.fieldValue = value
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Редактирование'
    }
  }
}
</script>

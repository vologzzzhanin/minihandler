<template>
  <div>
    <v-data-table
      :headers="attributeOptions.headers"
      :items="attributes"
      hide-default-footer
    >
      <template v-slot:body="{ items, headers }">
        <tbody>
          <tr v-for="(attribute, index) in items" :key="index">
            <td v-for="(header, key) in headers" :key="key">
              <v-edit-dialog
                @save="save(header.name, index, fieldValue)"
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
import { options } from '@/plugins/options'

export default {
  name: 'value-table',
  data() {
    return {
      attributeOptions: options.attribute,
      fieldValue: '',
      snack: false,
      snackColor: '',
      snackText: ''
    }
  },
  computed: mapState({
    attributes: state => state.class.data.attributes
  }),
  methods: {
    save(fieldName, index, value) {
      this.$store.dispatch('editAttribute', { fieldName, index, value })

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

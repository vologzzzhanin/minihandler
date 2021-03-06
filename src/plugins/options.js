const rules = {
  required: v => !!v || 'Поле должно быть заполнено'
}

const options =  Object.freeze({
  class: {
    label: 'Наименование класса',
    icon: 'mdi-folder',
    request: 'Введите наименование класса',
    addAction: 'EDIT_CLASS_NAME',
    editAction: 'EDIT_CLASS_NAME',
    rules: [rules.required],
    expanded: '0',
    class: 'mb-2 light-blue lighten-5'
  },
  attribute: {
    label: 'Наименование атрибута',
    icon: 'mdi-cog',
    request: 'Введите наименование атрибута',
    addAction: 'ADD_ATTRIBUTE',
    editAction: 'EDIT_ATTRIBUTE',
    rules: [rules.required],
    expanded: '0',
    class: 'pa-2 red lighten-5',
    listClass: 'mb-2 light-green lighten-5',
    headers: [
      {
        text: 'Атрибут',
        label: 'Введите наименование атрибута',
        align: 'start',
        name: 'attributeName',
        rules: [rules.required]
      },
      {
        text: 'Текст до',
        label: 'Введите текст до значения',
        sortable: false,
        name: 'beforeValue'
      },
      {
        text: 'Значение',
        label: 'Введите текст значения',
        sortable: false,
        name: 'value',
        rules: [rules.required]
      },
      {
        text: 'Текст после',
        label: 'Введите текст после значения',
        sortable: false,
        name: 'afterValue'
      }
    ]
  }
})

export { options }

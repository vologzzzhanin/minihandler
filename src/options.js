const rules = {
  required: v => !!v || 'Поле должно быть заполнено'
}

const options = {
  class: {
    label: 'Наименование класса',
    icon: 'mdi-folder',
    request: 'Введите наименование класса',
    action: 'ADD_CLASS',
    rules: [rules.required],
    expanded: '0',
    class: 'pa-2 mb-2 blue lighten-5'
  },
  attribute: {
    label: 'Наименование атрибута',
    icon: 'mdi-cog',
    request: 'Введите наименование атрибута',
    action: 'ADD_ATTRIBUTE',
    rules: [rules.required],
    expanded: '0',
    class: 'pa-2 red lighten-5',
    listClass: 'pt-2 px-2 mb-2 green lighten-5'
  },
  attributeValue: {
    headers: [
      {
        text: 'Атрибут',
        label: 'Введите наименование атрибута',
        align: 'start',
        value: 'attributeName',
        rules: [rules.required]
      },
      {
        text: 'Текст до',
        label: 'Введите текст до значения',
        sortable: false,
        value: 'beforeValue'
      },
      {
        text: 'Значение',
        label: 'Введите текст значения',
        sortable: false,
        value: 'value',
        rules: [rules.required]
      },
      {
        text: 'Текст после',
        label: 'Введите текст после значения',
        sortable: false,
        value: 'afterValue'
      }
    ]
  }
}

export { options }

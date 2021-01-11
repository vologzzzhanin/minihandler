<template>
  <v-card class="grey lighten-4" elevation="2" outlined>
    <v-card-title>Таксономия</v-card-title>
    <v-card-subtitle>Создание класса и атрибутов</v-card-subtitle>
    <v-card-text>
      <Class v-if="showClass" :option="classOptions" />
      <InputForm v-if="!showClass" :option="classOptions" />
      <AttributesList v-if="showAttributes" :option="attributeOptions" />
      <InputForm v-if="showClass" :option="attributeOptions" />
    </v-card-text>
  </v-card>
</template>

<script>
import InputForm from '@/components/details/InputForm'
import Class from '@/components/details/Class'
import AttributesList from '@/components/details/AttributesList'
import { options } from '@/plugins/options'
import { mapGetters } from 'vuex'

export default {
  name: 'taxonomy',
  data: () => ({
    classOptions: options.class,
    attributeOptions: options.attribute
  }),
  components: {
    InputForm,
    Class,
    AttributesList
  },
  computed: mapGetters(['showClass', 'showAttributes'])
}
</script>

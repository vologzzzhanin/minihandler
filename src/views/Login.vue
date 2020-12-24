<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="px-2">
            <v-card-title primary-title>
              <h4>Вход</h4>
            </v-card-title>
            <v-form>
              <v-text-field
                prepend-icon="mdi-account"
                name="Email"
                label="Email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="Password"
                label="Пароль"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-card-actions>
                <v-btn primary large block @click="login">Войти</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ message }}

      <v-btn text @click="snack = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    message: '',
    snack: false,
    snackColor: ''
  }),
  methods: {
    login() {
      axios
        .post('/api/v1/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.message = response.data.message
          this.snackColor = 'success'
          this.snack = true

          this.$router.push('app')
        })
        .catch(error => {
          if (error.response) {
            this.message = error.response.data.message
            this.snackColor = 'info'
            this.snack = true
          } else {
            this.message = error
            this.snackColor = 'error'
            this.snack = true
          }
        })
    }
  }
}
</script>

<template>
  <v-main>
    <v-container fill-height>
      <v-row justify="center" align-content="center">
        <v-col cols="4">
          <v-card>
            <v-card-title primary-title>
              <h4>Вход</h4>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  name="Email"
                  label="Email"
                  v-model="email"
                  @keyup.enter="login"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  name="Password"
                  label="Пароль"
                  type="password"
                  v-model="password"
                  @keyup.enter="login"
                ></v-text-field>
                <v-card-actions>
                  <v-btn
                    large
                    block
                    @click="login"
                    class="deep-orange--text text--darken-5"
                    color="deep-orange lighten-3"
                  >
                    Войти
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snack" :timeout="3000" color="info">
      {{ loginMassage }}
      <v-btn text @click="snack = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  created() {
    if (process.env.NODE_ENV === 'development') axios.get('/api/v1/get_token')
  },
  computed: {
    loginMassage() {
      return this.$store.state.loginMassage
    },
    snack() {
      return this.$store.state.loginMassage.length > 0
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

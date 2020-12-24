<template>
  <v-app>
    <v-main class="grey lighten-3">
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
                  name="Username"
                  label="Пользователь"
                  v-model="username"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  name="Password"
                  label="Пароль"
                  type="password"
                  v-model="password"
                ></v-text-field>
                <v-card-actions>
                  <v-btn primary large block>Войти</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    username: '',
    password: ''
  })
}
</script>

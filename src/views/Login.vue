<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>科研业绩量化系统</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title right>用户登陆</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="loginForm.username"
                    readonly
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    readonly
                    v-model="loginForm.password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.native.prevent="handleLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar color="success" bottom v-model="snackbar" timeout="2000" dark>
      <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
      <div>
        登陆成功！ 欢迎来到
        <b>科研业绩量化系统</b>
      </div>
      <v-icon size="16" @click="snackbar = false">mdi-close-circle</v-icon>
    </v-snackbar>
  </v-app>
</template>
<script>
export default {
  name: "Login",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    loginForm: {
      username: "admin",
      password: "admin"
    },
    snackbar: false
  }),
  methods: {
    handleLogin() {
      const _this = this;
      this.$store
        .dispatch("login", _this.loginForm)
        .then(res => {
          if (res.code === 200) {
            _this.loginSuccess(_this.loginForm.username);
          }
        })
        .finally(() => {});
    },
    loginSuccess(username = "admin") {
      this.snackbar = true;
      setTimeout(_ => {
        this.$router.push("/");
      }, 2000);
    }
  }
};
</script>

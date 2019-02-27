<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>用户登陆</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-tooltip bottom>
                  <v-btn icon large :href="source" target="_blank" slot="activator">
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>-->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field
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
    }
  }),
  methods: {
    handleLogin() {
      const _this = this;
      _this.loading = true;
      this.$store
        .dispatch("login", _this.loginForm)
        .then(res => {
          console.log(res);
          _this.loginSuccess(_this.loginForm.username);
        })
        .finally(() => {
          _this.loading = false;
        });
    },
    loginSuccess(username = "admin") {
      this.$router.push("/");
    }
  }
};
</script>

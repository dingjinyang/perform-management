<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-layout justify-center align-center>
              <h1>科研业绩量化系统，努力开发中...</h1>
              <v-tooltip right>
                <v-btn icon large target="_blank" slot="activator">
                  <v-icon large>code</v-icon>
                </v-btn>
                <span>努力开发中...</span>
              </v-tooltip>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "Dashboard",
  data: () => ({})
};
</script>


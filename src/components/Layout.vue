<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click>
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">科研业绩量化系统</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-badge overlap color="red" @click="alert('haha')">
        <span slot="badge">3</span>
        <v-avatar>
          <v-icon dark>notifications</v-icon>
        </v-avatar>
      </v-badge>
      <v-menu bottom offset-y transition="scale-transition">
        <v-btn slot="activator" dark icon>
          <v-avatar size="32px">
            <img src="@/assets/logo.png" alt="Vuetify">
          </v-avatar>
        </v-btn>
        <!-- <v-btn slot="activator" dark color="primary">Scale Transition</v-btn> -->
        <v-list>
          <v-list-tile v-for="(item,index) in menuItems" :key="index" @click="menuClick(index)">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- <v-btn icon @click="logout()">
        <v-avatar size="32px">
          <img src="@/assets/logo.png" alt="Vuetify">
        </v-avatar>
      </v-btn>-->
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <h1>科研业绩量化系统，努力开发中...</h1>
          <v-tooltip right>
            <v-btn icon large :href="source" target="_blank" slot="activator">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>努力开发中...</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { heading: "首页" },
      { icon: "history", text: "Frequently contacted" },
      { icon: "content_copy", text: "Duplicates" },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Labels",
        model: true,
        children: [{ icon: "add", text: "Create label" }]
      }
    ],
    menuItems: [{ title: "个人中心" }, { title: "退出" }]
  }),
  methods: {
    menuClick(index) {
      if (index === 1) {
        this.logout();
      }
    },
    logout() {
      this.$store
        .dispatch("fontLogout")
        .then(res => {
          if (res === "success") {
            // this.$router.push("/login");
            location.reload();
          }
        })
        .finally(() => {});
    }
  }
};
</script>

<style>
</style>

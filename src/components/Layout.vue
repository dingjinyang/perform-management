<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.meta.text"
            :prepend-icon="item.model ? item.meta.icon : item.meta['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.meta.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="routerPush(child.path)"
            >
              <v-list-tile-action v-if="child.meta.icon">
                <v-icon>{{ child.meta.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.meta.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="routerPush(item.path)" :key="item.meta.text">
            <v-list-tile-action>
              <v-icon>{{ item.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.meta.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down" @click="routerHome()">科研业绩量化系统</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge overlap color="red">
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
        <v-list>
          <v-list-tile v-for="(item,index) in menuItems" :key="index" @click="item.action.call()">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition leave-absolute>
          <router-view/>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    source: String
  },
  data() {
    const actions = [
      {
        title: "个人中心",
        action: () => {
          this.routerPush("/personal");
        }
      },
      {
        title: "退出",
        action: () => {
          this.logout();
        }
      }
    ];
    return {
      drawer: false,
      items: [],
      menuItems: actions
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("fontLogout")
        .then(res => {
          if (res === "success") {
            location.reload();
          }
        })
        .finally(() => {});
    },
    routerPush(path) {
      this.$router.push(path);
    },
    routerHome() {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["permissionRouters"])
  },
  mounted() {
    this.items = this.permissionRouters.filter(item => !item.hideInMenu);
    this.items.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          child.path = `${item.path}/${child.path}`;
        });
      }
    });
  }
};
</script>

<style>
</style>

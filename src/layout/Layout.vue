<template>
  <v-app>
    <v-navigation-drawer app fixed :clipped="$vuetify.breakpoint.mdAndUp" v-model="drawer">
      <!-- <v-list>
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
      </v-list>-->
      <side-bar style="height:100%;"></side-bar>
    </v-navigation-drawer>
    <nav-bar app fixed @handleDrawer="(data)=>this.drawer=data"></nav-bar>
    <v-content>
      <v-container fluid>
        <app-main></app-main>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { log } from "util";
import { NavBar, AppMain, SideBar } from "./components";
export default {
  props: {
    source: String
  },
  components: {
    NavBar,
    AppMain,
    SideBar
  },
  data() {
    return {
      drawer: false,
      items: []
    };
  },
  methods: {
    routerPush(path) {
      console.log(this.permissionRouters);
      this.$router.push({ path });
    }
  },
  computed: {
    ...mapGetters(["permissionRouters"])
  },
  mounted() {
    console.log(this.permissionRouters);
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


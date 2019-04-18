<template>
  <div>
    <v-toolbar app color="blue darken-3" dark :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="handleDrawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down" @click="routerHome()">科研业绩量化系统</span>
      </v-toolbar-title>
      <!-- <breadcrumb/> -->
      <v-spacer></v-spacer>
      <screen-full/>
      <v-menu center nudge-bottom="15" offset-y transition="scale-transition">
        <v-btn slot="activator" icon>
          <v-badge overlap color="red">
            <template v-slot:badge>
              <span>3</span>
            </template>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon dark v-on="on">notifications</v-icon>
              </template>
              <span>通知</span>
            </v-tooltip>
          </v-badge>
        </v-btn>
        <v-card style="width:320px">
          <v-list two-line>
            <template v-for="(item, index) in messages">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

              <v-divider></v-divider>

              <v-list-tile v-if="!item.header" :key="index" avatar @click>
                <v-list-tile-avatar>
                  <v-icon class="cyan lighten-1 white--text">{{item.icon}}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-text="item.content"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-divider></v-divider>
          </v-list>
          <v-card-actions right>
            <v-spacer></v-spacer>
            <v-btn color="info" flat>查看全部</v-btn>
            <v-btn color="warning" flat>置为已读</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

      <v-menu nudge-bottom="15" offset-y transition="scale-transition">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb/index";
import ScreenFull from "@/components/screen-full/index";
export default {
  props: {
    source: String
  },
  components: {
    ScreenFull,
    Breadcrumb
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
      menuItems: actions,
      messages: [
        {
          header: "通知"
        },
        {
          icon: "email",
          title: "这是一条信息",
          content:
            "信息的内容信息的内容信息的内容信息的内容信息的内容信息的内容信息的内容"
        },
        {
          icon: "email",
          title: "这是一条信息",
          content:
            "信息的内容信息的内容信息的内容信息的内容信息的内容信息的内容信息的内容"
        },
        {
          icon: "email",
          title: "这是一条信息",
          content:
            "信息的内容信息的内容信息的内容信息的内容信息的内容信息的内容信息的内容"
        }
      ]
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
    handleDrawer() {
      this.drawer = !this.drawer;
      this.$emit("handleDrawer", this.drawer);
    },
    routerPush(path) {
      console.log(this.permissionRouters);
      this.$router.push({ path });
    },
    routerHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>


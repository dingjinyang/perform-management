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
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon>
                <v-avatar size="32px" tile>
                    <img src="./assets/logo.png" alt="Vuetify">
                </v-avatar>
                <v-menu offset-y bottom dark>
                    <v-list>
                        <v-list-tile
                                v-for="(item, index) in menuItems"
                                :key="index"
                                @click=""
                        >
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-btn>

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
        <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title class="grey lighten-4 py-4 title">努力开发中...</v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12 align-center justify-space-between>
                            <v-layout align-center>
                                <v-avatar size="40px" class="mr-3">
                                    <img src="./assets/logo.svg" alt>
                                </v-avatar>
                                <v-text-field placeholder="Name" value="丁金洋"></v-text-field>
                            </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field prepend-icon="business" placeholder="Company"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field placeholder="Job title"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    type="tel"
                                    prepend-icon="phone"
                                    placeholder="(000) 000 - 0000"
                                    mask="phone"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-btn flat color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
                    <v-btn flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    import HelloWorld from "./components/HelloWorld";

    export default {
        name: "App",
        components: {
            HelloWorld
        },
        props: {
            source: String
        },
        data() {
            return {
                dialog: false,
                drawer: null,
                items: [
                    {heading: "首页"},
                    {icon: "history", text: "Frequently contacted"},
                    {icon: "content_copy", text: "Duplicates"},
                    {
                        icon: "keyboard_arrow_up",
                        "icon-alt": "keyboard_arrow_down",
                        text: "Labels",
                        model: true,
                        children: [{icon: "add", text: "Create label"}]
                    }
                ],
                menuItems: [
                    {title: '个人中心'},
                    {title: '退出'}
                ]
            };
        }
    };
</script>

<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>校级优秀毕业设计论文明细表</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="查询" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">添加</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.mainpeople" label="负责人"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select
                      persistent-hint
                      return-object
                      single-line
                      v-model="editedItem.mpeopledepartment"
                      :items="departmentItems"
                      item-text="name"
                      item-value="id"
                      label="部门"
                    ></v-select>
                    <!-- <v-text-field v-model="editedItem.mpeopledepartment" label="所属部门"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.papername" label="论文名称"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select
                      v-model="editedItem.studentdepartment"
                      :items="departmentItems"
                      attach
                      label="学生院系"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.studentclass" label="学生班级"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.studentid" label="学生学号"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.studentname" label="学生姓名"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :menu-props="{ maxHeight: '130' }"
                      v-model="editedItem.rewordtype"
                      :items="rewordtypeItems"
                      attach
                      label="奖项"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">取消</v-btn>
              <v-btn color="blue darken-1" flat @click="save">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :loading="loading"
        locale="zh-CN"
        class="elevation-1"
      >
        <template v-slot:progress>
          <v-progress-linear color="green" indeterminate></v-progress-linear>
        </template>
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.index + 1 }}</td>
          <td class="text-xs-left">{{ props.item.mainpeople }}</td>
          <td class="text-xs-left">{{ props.item.mpeopledepartment }}</td>
          <td class="text-xs-left">{{ props.item.papername }}</td>
          <td class="text-xs-left">{{ props.item.studentdepartment }}</td>
          <td class="text-xs-left">{{ props.item.studentclass }}</td>
          <td class="text-xs-left">{{ props.item.studentid }}</td>
          <td class="text-xs-left">{{ props.item.studentname }}</td>
          <td class="text-xs-left">{{ props.item.rewordtype }}</td>
          <td class="text-xs-left">{{ props.item.point }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
        <template v-slot:pageText="props">第 {{ props.pageStart }} 页 - 共 {{ props.itemsLength }} 行</template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">刷新</v-btn>
        </template>
        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
            class="ma-2"
          >您查询的 "{{ search }}" 未找到相匹配的结果.</v-alert>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    loading: false,
    search: "",
    headers: [
      {
        text: "序号",
        align: "center",
        sortable: false,
        value: "index",
        width: "1"
      },
      { text: "负责人", value: "mainpeople" },
      { text: "所属部门", value: "mpeopledepartment" },
      { text: "论文名称", value: "papername" },
      { text: "学生院系", value: "studentdepartment" },
      { text: "学生班级", value: "studentclass" },
      { text: "学生学号", value: "studentid" },
      { text: "学生姓名", value: "studentname" },
      { text: "奖项", value: "rewordtype" },
      { text: "总业绩点", value: "point" },
      { text: "操作", value: "index", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    departmentItems: ["软件学院"],
    rewordtypeItems: ["一等奖", "其他"],
    editedItem: {
      mainpeople: "",
      mpeopledepartment: "",
      papername: "",
      studentdepartment: "",
      studentclass: "",
      studentid: "",
      studentname: "",
      rewordtype: ""
    },
    defaultItem: {
      mainpeople: "",
      mpeopledepartment: "",
      papername: "",
      studentdepartment: "",
      studentclass: "",
      studentid: "",
      studentname: "",
      rewordtype: ""
    }
  }),
  computed: {
    ...mapGetters(["userInfo"]),
    formTitle() {
      return this.editedIndex === -1 ? "添加" : "修改";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      for (let i = 0; i < 6; i++) {
        this.desserts.push({
          index: 1,
          mainpeople: "赵冬",
          mpeopledepartment: "网络安全教研室",
          papername: "科研业绩量化",
          studentdepartment: "软件学院",
          studentclass: "RB软工卓越161",
          studentid: "201619150123",
          studentname: "丁魏武",
          rewordtype: "校级优秀毕业设计论文/其他",
          point: 0
        });
      }
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  },
  beforeMount() {
    this.editedItem.mainpeople = this.userInfo.name;
    this.editedItem.mpeopledepartment = this.userInfo.department;
  }
};
</script>
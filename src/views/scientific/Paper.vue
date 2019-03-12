<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>校级优秀毕业设计论文明细表</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="查询" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" lazy persistent max-width="800px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">添加</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.mainpeople" label="负责人" readonly></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-select
                        persistent-hint
                        attach
                        v-model="editedItem.mpeopledepartment"
                        :items="departmentItems"
                        label="部门"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.papername" label="论文名称" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="editedItem.studentid"
                        label="学生学号"
                        counter
                        maxlength="12"
                        :rules="formRules.studentIdRules"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-select
                        v-model="editedItem.studentdepartment"
                        :items="departmentItems"
                        attach
                        readonly
                        label="学生院系"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.studentclass" label="学生班级" readonly></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.studentname" label="学生姓名" readonly></v-text-field>
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
              </v-form>
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
import { resolve } from "q";
export default {
  data: () => ({
    dialog: false,
    loading: false,
    search: "",
    /** 表格头部 */
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
    /** 部门选项 */
    departmentItems: ["软件学院", "计算机学院"],
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
    },
    /** 学号验证规则 */
    formRules: {
      studentIdRules: [
        v => !!v || "学号必须填写！",
        v => v.length <= 12 || "学号不能超过12位！"
      ]
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
      if (val) {
        /** 初始化表单默认值 */
        this.editedItem.mainpeople = this.userInfo.name;
        this.editedItem.mpeopledepartment = this.userInfo.department;
      }
      val || this.close();
    },
    "editedItem.studentid": {
      handler() {
        if (this.editedItem.studentid.length === 12) {
          this.fetchStudentInfo(this.editedItem.studentid).then(res => {
            this.editedItem.studentname = res.studentname;
            this.editedItem.studentclass = res.studentclass;
            this.editedItem.studentdepartment = res.studentdepartment;
          });
        } else {
          this.editedItem.studentname = "";
          this.editedItem.studentclass = "";
          this.editedItem.studentdepartment = "";
        }
      }
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
          mpeopledepartment: "软件学院",
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
    fetchStudentInfo(id) {
      return new Promise(resolve => {
        setTimeout(_ => {
          resolve({
            studentdepartment: "软件学院",
            studentclass: "RB软工卓越161",
            studentname: "丁魏武"
          });
        }, 1000);
      });
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
    },
    validateField() {
      this.$refs.form.validate();
    }
  }
};
</script>
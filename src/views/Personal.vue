<template>
  <v-app id="inspire">
    <v-container grid-list-xl>
      <v-layout wrap justify-space-between>
        <v-flex xs12 md6>
          <v-form ref="form">
            <v-text-field v-model="userForm.name" label="用户名" disabled></v-text-field>
            <v-text-field v-model="userForm.jobNumber" label="工号" disabled></v-text-field>
            <v-select
              persistent-hint
              return-object
              single-line
              v-model="userForm.department"
              :items="departmentItems"
              item-text="name"
              item-value="id"
              label="部门"
              disabled
            ></v-select>
            <v-btn color="warning">修改</v-btn>
            <v-btn color="success">保存</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Personal",
  data: () => ({
    /** 用户信息表单 */
    userForm: {
      name: "",
      department: { value: 1, text: "软件学院" },
      jobNumber: ""
    },
    /** 部门选项 */
    departmentItems: [
      { value: 1, text: "软件学院" },
      { value: 2, text: "计算机学院" }
    ]
  }),
  methods: {},
  computed: {
    ...mapGetters(["userInfo"])
  },
  beforeMount() {
    /* 从store中获取当前表单中需要的用户信息 */
    for (const key in this.userForm) {
      if (this.userInfo.hasOwnProperty(key)) {
        this.userForm[key] = this.userInfo[key];
      }
    }
  }
};
</script>


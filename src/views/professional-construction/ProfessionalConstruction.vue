<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>专业建设</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-toolbar flat color="white">
          <v-toolbar-title>专业建设信息录入</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-layout row wrap justify-space-around>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.princlName"
                  :rules="validRules.princlName"
                  label="负责人名称"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5></v-flex>
              <v-flex md5>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="defaultForm.createDate"
                      label="通过时间"
                      :rules="validRules.createDate"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="defaultForm.createDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex md5></v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.departMentName"
                  :rules="validRules.departMentName"
                  :items="departMentItems"
                  item-text="state"
                  item-value="abbr"
                  label="部门名称"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5></v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-card>
    <v-card style="margin-top:50px">
      <v-toolbar flat color="white">
        <v-toolbar-title>业绩分配情况</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div class="text-left" style="margin:10px">
        <v-chip label color="primary" text-color="white">业绩点: x</v-chip>
        <v-chip label color="primary" text-color="white">待分配: x</v-chip>
      </div>
      <v-data-table :headers="headers" :items="tableData" :hide-actions="true" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.department }}</td>
          <td class="text-xs-center">{{ props.item.performance }}</td>
          <td class="text-xs-center">{{ props.item.remark }}</td>
          <td class="justify-center layout px-0">
            <v-btn small fab color="#ff3a3a" @click="deleteItem(props.item)">
              <v-icon color="white">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>

      <v-layout justify-end>
        <v-btn fab small color="cyan">
          <v-icon color="white">person_add</v-icon>
        </v-btn>
      </v-layout>
    </v-card>
    <v-layout justify-end>
      <v-btn color="info" @click="saveInfo">保存项目信息</v-btn>
    </v-layout>
  </div>
</template>


<script>
export default {
  name: "TeachingAchievementAward",
  data() {
    return {
      menu: false,
      modal: false,
      valid: false,
      validRules: {
        princlName: [v => !!v || "请填写负责人"],
        departMentName: [v => v !== "" || "请选择部门名称"]
      },
      defaultForm: {
        princlName: "丁金洋",
        createDate: new Date().toISOString().substr(0, 10),
        departMentName: ""
      },
      departMentItems: [
        { state: "北大核心", abbr: "北大核心" },
        { state: "中原工学院", abbr: "中原工学院" },
        { state: "其他", abbr: "其他" }
      ],
      headers: [
        {
          text: "姓名",
          align: "center",
          value: "name"
        },
        {
          text: "部门",
          align: "center",
          value: "department"
        },
        {
          text: "业绩点",
          align: "center",
          value: "performance"
        },
        {
          text: "备注",
          align: "center",
          value: "remark"
        }
      ],
      tableData: [
        {
          name: "丁金洋",
          department: "中原工学院",
          performance: -1,
          remark: "无"
        }
      ]
    };
  },
  methods: {
    calculate(formName) {
      if (this.$refs[formName].validate()) {
        this.snackbar = true;
      }
    },
    saveInfo() {
      //todo
      console.log("保存项目信息");
    },
    deleteItem(item) {
      //todo
      const index = this.tableData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tableData.splice(index, 1);
    }
  }
};
</script>

<style scope>
</style>


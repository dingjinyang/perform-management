<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>科研、学科平台</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-toolbar flat color="white">
          <v-toolbar-title>科研、学科平台信息录入</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-layout row wrap justify-space-around>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.projectName"
                  :rules="validRules.projectName"
                  label="项目名称"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.hostUnit"
                  :rules="validRules.hostUnit"
                  label="主持单位"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.plantformProjectLevel"
                  :rules="validRules.plantformProjectLevel"
                  :items="plantformProjectLevelItems"
                  item-text="state"
                  item-value="abbr"
                  label="科研平台项目等级"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.expenditure"
                  :rules="validRules.expenditure"
                  label="经费"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.projectLevel"
                  :rules="validRules.projectLevel"
                  :items="projectLevelItems"
                  item-text="state"
                  item-value="abbr"
                  label="科技项目等级"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5></v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-layout justify-center>
          <v-btn color="info" @click="calculate('form')">计算总业绩点</v-btn>
        </v-layout>
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
  name: "ScientificAndSubjectPlatform",
  data() {
    return {
      valid: false,
      validRules: {
        projectName: [v => !!v || "请填写项目名称"],
        hostUnit: [v => !!v || "请填写主持单位"],
        plantformProjectLevel: [v => !!v || "请选择科研平台项目等级"],
        expenditure: [v => !!v || "请填写经费"],
        projectLevel: [v => !!v || "请选择科技项目等级"]
      },
      defaultForm: {
        projectName: "",
        hostUnit: "",
        plantformProjectLevel: "",
        expenditure: "",
        projectLevel: ""
      },
      plantformProjectLevelItems: [
        { state: "1", abbr: "选项一" },
        { state: "选项二", abbr: "选项二" },
        { state: "选项三", abbr: "选项三" },
        { state: "其它", abbr: "其它" }
      ],
      projectLevelItems: [
        { state: "选项一", abbr: "选项一" },
        { state: "选项二", abbr: "选项二" },
        { state: "选项三", abbr: "选项三" },
        { state: "其它", abbr: "其它" }
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

<style scoped>
</style>

<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>著作业绩量化</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-toolbar flat color="white">
          <v-toolbar-title>著作信息录入</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-layout row wrap justify-space-around>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.drafter"
                  :rules="validRules.drafter"
                  label="第一起草人"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.draftUnit"
                  :rules="validRules.draftUnit"
                  label="第一起草单位"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.category"
                  :rules="validRules.category"
                  :items="categoryItems"
                  item-text="state"
                  item-value="abbr"
                  label="类别"
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
  name: "QuantificationOfWorkPerformance",
  data() {
    return {
      valid: false,
      validRules: {
        drafter: [v => !!v || "请填写第一起草人姓名"],
        draftUnit: [v => !!v || "请选填写一起草单位"],
        category: [v => v !== "" || "请选择类别"]
      },
      categoryItems: [
        { state: "选项一", abbr: "选项一" },
        { state: "选项二", abbr: "选项二" },
        { state: "选项三", abbr: "选项三" },
        { state: "其它", abbr: "其它" }
      ],
      defaultForm: {
        drafter: "丁金洋",
        draftUnit: "中原工学院",
        category: ""
      },
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


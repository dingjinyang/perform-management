<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>知识产权</v-toolbar-title>
        <v-toolbar-items>
          <v-btn
            color="primary"
            flat
            @click="$router.push({name:'intellectualPropertyRegular'})"
          >查看规则</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-toolbar flat color="white">
          <v-toolbar-title>产权信息录入</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-layout row wrap justify-space-around>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.principalName"
                  :rules="validRules.principalName"
                  :counter="10"
                  label="负责人"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.publishLevel"
                  :rules="validRules.publishLevel"
                  :items="publishLevelItems"
                  item-text="state"
                  item-value="abbr"
                  label="发表等级"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
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
                      v-model="defaultForm.publishDate"
                      label="发表时间"
                      :rules="validRules.publishDate"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="defaultForm.publishDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.wordsNumber"
                  :rules="validRules.wordsNumber"
                  :counter="10"
                  label="论文字数"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.thesisName"
                  :rules="validRules.thesisName"
                  label="论文名称"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.coef"
                  :rules="validRules.coef"
                  :items="coefItems"
                  item-text="state"
                  item-value="abbr"
                  label="系数"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.publisJournals"
                  :rules="validRules.publisJournals"
                  label="发表刊物"
                  required
                ></v-text-field>
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
        <v-chip label color="primary" text-color="white">标准业绩点: x</v-chip>
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
  name: "Index",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      valid: false,
      validRules: {
        principalName: [v => !!v || "请填写负责人名称"],
        publishLevel: [v => v !== "" || "请选择发表等级"],
        publishDate: [v => !!v || "请填写发表时间"],
        wordsNumber: [v => !!v || "请填写字数"],
        thesisName: [v => !!v || "请填写论文名称"],
        coef: [v => v !== "" || "请填写系数"],
        publisJournals: [v => !!v || "请填写发表刊物名称"]
      },
      publishLevelItems: [
        { state: "北大核心", abbr: "北大核心" },
        { state: "中原工学院", abbr: "中原工学院" },
        { state: "其他", abbr: "其他" }
      ],
      coefItems: [
        { state: "0.3", abbr: "0.3" },
        { state: "0.5", abbr: "0.5" },
        { state: "0.6", abbr: "0.6" },
        { state: "1", abbr: "1" }
      ],
      defaultForm: {
        principalName: "丁金洋",
        publishLevel: "",
        publishDate: new Date().toISOString().substr(0, 10),
        wordsNumber: 0,
        thesisName: "",
        coef: "",
        publisJournals: ""
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


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
                <v-text-field
                  v-model="defaultForm.name"
                  :rules="validRules.name"
                  :counter="10"
                  label="专利名称"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.category"
                  :rules="validRules.category"
                  :items="items"
                  item-text="state"
                  item-value="abbr"
                  label="知识产权类别"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.authorNumber"
                  :rules="validRules.authorNumber"
                  label="授权编号"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.numberOfPeople"
                  :rules="validRules.numberOfPeople"
                  label="专利权人数"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.authorUnit"
                  :rules="validRules.authorUnit"
                  label="授权单位"
                  required
                ></v-text-field>
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
                      v-model="defaultForm.authorDate"
                      label="发表时间"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="defaultForm.authorDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex md5>
                <v-checkbox v-model="defaultForm.isNationaldefense" label="国防"></v-checkbox>
              </v-flex>
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
  name: "Thesis",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      valid: false,
      validRules: {
        principalName: [v => !!v || "请填写负责人名称"],
        name: [v => !!v || "请填写专利名称"],
        category: [v => v !== "" || "请填写知识产权类别"],
        authorNumber: [v => !!v || "请填授权编号"],
        numberOfPeople: [v => !!v || "请填专利权人数"],
        authorUnit: [v => !!v || "请填写授权单位"],
        authorDate: [v => !!v || "请填写授权时间"]
      },
      items: [
        { state: "选项一", abbr: "选项一" },
        { state: "选项二", abbr: "选项二" },
        { state: "选项三", abbr: "选项三" },
        { state: "选项四", abbr: "选项四" }
      ],
      defaultForm: {
        principalName: "丁金洋",
        name: "",
        category: "",
        authorNumber: 2,
        numberOfPeople: 1,
        authorUnit: "中原工学院",
        authorDate: new Date().toISOString().substr(0, 10),
        isNationaldefense: false
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
          name: "丁二",
          department: "中原工学院",
          performance: -1,
          remark: "辣鸡"
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


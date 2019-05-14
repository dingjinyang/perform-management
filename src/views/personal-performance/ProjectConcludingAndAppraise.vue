<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>项目结题、评价</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div>
        <v-tabs v-model="active" color="cyan" @change="next(this)" dark slider-color="yellow">
          <v-tab v-for="(item,index) in tabsData" :key="index" ripple>{{item.title}}</v-tab>
          <v-tab-item v-for="(item,index) in tabsData" :key="index">
            <v-card flat>
              <component is="currentView"></component>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>

      <v-card>
        <v-toolbar flat color="white">
          <v-toolbar-title>项目结题、评价</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-layout row wrap justify-space-around>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.mainpeople"
                  :rules="validRules.mainpeople"
                  label="负责人"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.Concludinglevel"
                  :rules="validRules.Concludinglevel"
                  :items="concludinglevelItems"
                  item-text="state"
                  item-value="abbr"
                  label="结题等级"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.projectName"
                  :rules="validRules.projectName"
                  label="项目名称"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.appraise"
                  :rules="validRules.appraise"
                  :items="appraiseItems"
                  item-text="state"
                  item-value="abbr"
                  label="评价结论"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.orgainzeConcludingUnit"
                  :rules="validRules.orgainzeConcludingUnit"
                  label="组织结题单位"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.projectNature"
                  :rules="validRules.projectNature"
                  :items="projectNatureItems"
                  item-text="state"
                  item-value="abbr"
                  label="项目性质"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.projectLevel"
                  :rules="validRules.projectLevel"
                  :items="projectLevelItems"
                  item-text="state"
                  item-value="abbr"
                  label="项目级别"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field
                  v-model="defaultForm.expenditure"
                  :rules="validRules.expenditure"
                  label="项目经费"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select
                  v-model="defaultForm.concludingOrAppriaseLevel"
                  :rules="validRules.concludingOrAppriaseLevel"
                  :items="concludingOrAppriaseLevelItems"
                  item-text="state"
                  item-value="abbr"
                  label="结题/评价类别"
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-flex>
              <v-flex md5>
                <v-checkbox v-model="defaultForm.isClassified" label="涉密"></v-checkbox>
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
  name: "ProjectConcludingAndAppraise",
  data() {
    return {
      active: null,
      tabsData: [
        {
          title: "纵向评价",
          componentName: ""
        },
        {
          title: "横向评价",
          componentName: ""
        },
        {
          title: "结题"
        }
      ],
      next(data) {
        console.log(this.active);
        const active = parseInt(this.active);
        this.active = active < 2 ? active + 1 : 0;
      },
      currentTab: {
        title: "纵向评价",
        componentName: ""
      },
      valid: false,
      validRules: {
        mainpeople: [v => !!v || "请填写负责人姓名"],
        Concludinglevel: [v => v !== "" || "请选择结题等级"],
        projectName: [v => !!v || "请填写项目名称"],
        appraise: [v => v !== "" || "请选择评价结论"],
        orgainzeConcludingUnit: [v => !!v || "请填写结题组织单位"],
        projectNature: [v => v !== "" || "请选择项目性质"],
        projectLevel: [v => v !== "" || "请选择项目级别"],
        expenditure: [v => !!v || "请填写入院经费"],
        concludingOrAppriaseLevel: [v => v !== "" || "请选择类别"]
      },
      defaultForm: {
        mainpeople: "丁金洋",
        Concludinglevel: "",
        projectName: "",
        appraise: "",
        orgainzeConcludingUnit: "",
        projectNature: "",
        projectLevel: "",
        expenditure: 0,
        concludingOrAppriaseLevel: "",
        isClassified: false
      },
      concludinglevelItems: [
        { state: "选项一", abbr: "选项一" },
        { state: "选项二", abbr: "选项二" },
        { state: "选项三", abbr: "选项三" },
        { state: "其它", abbr: "其它" }
      ],
      appraiseItems: [
        { state: "选项一", abbr: "选项一" },
        { state: "选项二", abbr: "选项二" },
        { state: "选项三", abbr: "选项三" },
        { state: "其它", abbr: "其它" }
      ],
      projectNatureItems: [
        { state: "选项一", abbr: "选项一" },
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
      concludingOrAppriaseLevelItems: [
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

<style scope>
</style>


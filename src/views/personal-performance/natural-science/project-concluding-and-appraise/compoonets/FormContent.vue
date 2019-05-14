<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>{{title}}</v-toolbar-title>
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
  </div>
</template>


<script>
export default {
  name: "FormContent",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
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
      this.$emit("submit", this.defaultForm);
    }
  }
};
</script>

<style scope>
</style>


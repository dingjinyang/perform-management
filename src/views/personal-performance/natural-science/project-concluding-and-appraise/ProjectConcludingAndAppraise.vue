<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>项目结题、评价</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div>
        <v-tabs v-model="active" color="cyan" @change="next()" dark slider-color="yellow">
          <v-tab v-for="(item,index) in tabsData" :key="index" ripple>{{item.title}}</v-tab>
          <v-tab-item v-for="(item,index) in tabsData" :key="index">
            <v-card flat>
              <components :is="currentForm" :title="currentTab.title||''"></components>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
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
import FormContent from "./compoonets/FormContent";
export default {
  name: "ProjectConcludingAndAppraise",
  components: {
    FormContent
  },
  computed: {
    currentTab() {
      return this.tabsData[this.active];
    }
  },
  data() {
    return {
      active: 0,
      currentForm: "form-content",
      tabsData: [
        {
          title: "纵向评价",
          componentName: "form-content"
        },
        {
          title: "横向评价",
          componentName: "form-content"
        },
        {
          title: "结题",
          componentName: "form-content"
        }
      ],
      next() {
        const active = parseInt(this.active);
        this.currentForm = this.tabsData[active].componentName;
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
          performance: 100,
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


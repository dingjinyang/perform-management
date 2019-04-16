<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>知识产权</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-toolbar flat color="white">
          <v-toolbar-title>产权信息录入</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form v-model="valid">
          <v-container>
            <v-layout row wrap justify-space-around>
              <v-flex md5>
                <v-text-field
                  v-model="principalName"
                  :rules="nameRules"
                  :counter="10"
                  label="负责人"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field v-model="name" :rules="nameRules" :counter="10" label="专利名称" required></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-select v-model="category" :items="items" label="知识产权类别"></v-select>
              </v-flex>
              <v-flex md5>
                <v-text-field v-model="authorNumber" :rules="emailRules" label="授权编号" required></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field v-model="numberOfPeople" :rules="emailRules" label="专利权人数" required></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-text-field v-model="authorUnit" :rules="emailRules" label="授权单位" required></v-text-field>
              </v-flex>
              <v-flex md5>
                <v-menu
                  ref="menu"
                  v-model="authorDate"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="授权时间"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">确认</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(date)">取消</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex md5>
                <v-checkbox v-model="isNationaldefense" label="国防"></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-layout justify-center>
          <v-btn color="info">计算总业绩点</v-btn>
        </v-layout>
      </v-card>
    </v-card>
    <v-card style="margin-top:50px">
      <v-toolbar flat color="white">
        <v-toolbar-title>业绩分配情况</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="tableData" :hide-actions="true" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.department }}</td>
          <td class="text-xs-center">{{ props.item.performance }}</td>
          <td class="text-xs-center">{{ props.item.remark }}</td>
          <td class="justify-center layout px-0">
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
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
import { log } from "util";
export default {
  name: "Index",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      items: ["选项一", "选项二", "选项三", "选项四"],
      principalName: "丁二",
      name: "专利",
      category: "",
      authorNumber: "",
      numberOfPeople: 1,
      authorUnit: "",
      authorDate: "",
      isNationaldefense: false,
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


<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>论文系数表</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.coef }}</td>
          <td class="justify-center layout px-0">
            <v-btn @click="select(props.item)" color="info">选择</v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "ThesisCoefTable",
  data() {
    return {
      headers: [
        {
          text: "评判标准",
          align: "center",
          sortable: false,
          value: "title"
        },
        { text: "业绩点系数", align: "center", value: "coef" }
      ],
      desserts: [
        {
          title:
            "中原工学院教职工为第一作者和第一通讯作者（当论文有通讯作者时），中原工学院（Zhongyuan University of Technology）署名为第一单位的",
          coef: 1
        },
        {
          title:
            "论文通讯作者单位为中原工学院的Nature、Science、Cell的论文全额计算，且Nature、Science、Cell论文指在该期刊主刊发表的论文。",
          coef: 1
        },
        {
          title:
            "中原工学院教职工至少为第三作者和第一通讯作者（当论文有通讯作者时），中原工学院（Zhongyuan University of Technology）署名至少为第二单位且论文被SCI三区以上（含三区）收录",
          coef: 0.5
        },
        {
          title:
            "中原工学院教职工为第一作者，中原工学院（Zhongyuan University of Technology）署名为第一单位，中原工学院教职工非通讯作者，且论文被SCI三区以上（含三区）收录",
          coef: 0.3
        }
      ]
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    getTableData() {},
    select(item) {
      //todo
      console.log(item);
    }
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style scope>
</style>


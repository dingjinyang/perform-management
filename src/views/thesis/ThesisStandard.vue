<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>论文标准</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">新建</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.title" label="评判标准"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.coef" label="业绩点系数"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="error" @click="close">取消</v-btn>
              <v-btn flat color="primary" @click="save">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.coef }}</td>
          <td class="justify-center layout px-0">
            <v-btn small fab color="cyan" @click="editItem(props.item)">
              <v-icon color="white">edit</v-icon>
            </v-btn>
            <v-btn small fab color="#ff3a3a" @click="deleteItem(props.item)">
              <v-icon color="white">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "ThesisStandard",
  data() {
    return {
      dialog: false,
      desserts: [],
      editedIndex: -1,
      formTitle: "编辑",
      editedItem: {
        title: "",
        coef: 0
      },
      defaultItem: {
        title: "",
        coef: 0
      },
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
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    getTableData() {}
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style scope>
</style>


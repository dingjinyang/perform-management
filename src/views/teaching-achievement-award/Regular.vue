<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>教学成果标准</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" show-expand class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.level }}</td>
          <td class="text-xs-center">{{ props.item.performancePoint }}</td>
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
  name: "teachingMaterialRegular",
  data() {
    return {
      dialog: false,
      desserts: [],
      editedIndex: -1,
      editedItem: {
        level: "",
        award: "",
        unitRanking: "",
        performancePoint: 0,
        coef: 0
      },
      defaultItem: {
        level: "",
        award: "",
        unitRanking: "",
        performancePoint: 0,
        coef: 0
      },
      headers: [
        {
          text: "成果等级",
          align: "center",
          sortable: false,
          value: "levle"
        },
        {
          text: "奖项",
          align: "center",
          value: "award"
        },
        {
          text: "标准业绩点",
          align: "center",
          value: "performancePoint"
        },
        {
          text: "完成单位名次",
          align: "center",
          value: "award"
        },
        {
          text: "系数",
          align: "center",
          value: "coef"
        }
      ],
      desserts: [
        {
          level: "国家级",
          award: "特等奖",
          unitRanking: "第一完成单位",
          performancePoint: 500,
          coef: 1.0
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


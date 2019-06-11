<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>专业建设标准</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" show-expand class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.courseConstructionCategory }}</td>
          <td class="text-xs-center">{{ props.item.courseConstructionCategory }}</td>
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
  name: "professionalConstructionRegula",
  data() {
    return {
      dialog: false,
      desserts: [],
      editedIndex: -1,
      editedItem: {
        courseConstructionCategory: "",
        performancePoint: 0
      },
      defaultItem: {
        courseConstructionCategory: "",
        performancePoint: 0
      },
      headers: [
        {
          text: "课程建设类别",
          align: "center",
          sortable: false,
          value: "courseConstructionCategory"
        },
        {
          text: "业绩点",
          align: "center",
          value: "performancePoint"
        }
      ],
      desserts: [
        {
          courseConstructionCategory: "国家级课程建设项目立项",
          performancePoint: 500
        },
        {
          courseConstructionCategory: "省级课程建设项目立项",
          performancePoint: 300
        },
        {
          courseConstructionCategory: "中国纺织工业联合会课程立项",
          performancePoint: 200
        },
        {
          courseConstructionCategory: "学校慕课项目通过验收",
          performancePoint: 500
        },
        {
          courseConstructionCategory: "学校其他课程建设项目通过验收",
          performancePoint: 300
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


<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>教学平台标准</v-toolbar-title>
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
        performancePoint: 0
      },
      defaultItem: {
        level: "",
        performancePoint: 0
      },
      headers: [
        {
          text: "教学平台建设",
          align: "center",
          sortable: false,
          value: "levle"
        },
        { text: "业绩点", align: "center", value: "performancePoint" }
      ],
      desserts: [
        {
          level: "国家级教学平台",
          performancePoint: 1.2
        },
        {
          level: "省级教学平台",
          performancePoint: 1.1
        },
        {
          level: "学校级教学平台",
          performancePoint: 1.0
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


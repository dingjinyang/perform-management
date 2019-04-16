<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>知识产权标准</v-toolbar-title>
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
                    <v-text-field v-model="editedItem.category" label="类别"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.coef" label="业绩点"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.category }}</td>
          <td class="text-xs-center">{{ props.item.coef }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
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
        category: "",
        coef: 0
      },
      defaultItem: {
        category: "",
        coef: 0
      },
      headers: [
        {
          text: "评判标准",
          align: "center",
          sortable: false,
          value: "category"
        },
        { text: "业绩点系数", align: "center", value: "coef" }
      ],
      desserts: [
        {
          category: "国际发明专利（PCT/美国专利等）",
          coef: 300
        },
        {
          category: "国防发明专利",
          coef: 150
        },
        {
          category: "发明专利",
          coef: 120
        },
        {
          category: "实用新型专利",
          coef: 20
        },
        {
          category: "外观设计专利",
          coef: 16
        },
        {
          category: "软件著作权",
          coef: 16
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


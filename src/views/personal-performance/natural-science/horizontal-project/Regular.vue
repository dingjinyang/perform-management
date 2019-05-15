<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>横向立项标准</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-center" style="width:50%;">{{ props.item.range }}</td>
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

      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">添加</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex sm6 md4>
                  <v-text-field v-model="editedItem.min" label="最小值（万元）"></v-text-field>
                </v-flex>
                <v-flex sm6 md4>
                  <v-text-field v-model="editedItem.max" label="最大值（万元）"></v-text-field>
                </v-flex>
                <v-flex sm6 md4>
                  <v-text-field v-model="editedItem.coef" label="业绩系数"></v-text-field>
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
        max: 0,
        min: 0,
        range: "",
        coef: 0
      },
      defaultItem: {
        max: 0,
        min: 0,
        range: "",
        coef: 0
      },
      headers: [
        {
          text: "项目经费（万元）",
          align: "center",
          sortable: false,
          value: "range"
        },
        { text: "业绩系数", align: "center", value: "coef" }
      ],
      desserts: [
        {
          min: 300,
          max: 2000,
          range: "300 ~ 2000",
          coef: 1.2
        },
        {
          min: 80,
          max: 300,
          range: "80 ~ 300",
          coef: 1.1
        },
        {
          min: 0,
          max: 80,
          range: "0 ~ 80",
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
      this.editedItem.range = this.editedItem.min + " ~ " + this.editedItem.max;
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


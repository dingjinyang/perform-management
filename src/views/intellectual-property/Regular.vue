<template>
  <div>
    <v-card>
      <v-toolbar flat color="white">
        <v-toolbar-title>知识产权规则</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1" :hide-actions="true">
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.category }}</td>
          <td class="text-xs-center">{{ props.item.internationInvention }}</td>
          <td class="text-xs-center">{{ props.item.defenseInvention }}</td>
          <td class="text-xs-center">{{ props.item.paentForInvention }}</td>
          <td class="text-xs-center">{{ props.item.untilityModelPatent }}</td>
          <td class="text-xs-center">{{ props.item.designPaent }}</td>
          <td class="text-xs-center">{{ props.item.softwareCopyright}}</td>
        </template>
      </v-data-table>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">注：</h3>
          <ol style="margin-left:30px;line-height:25px">
            <li>同一内容的专利不重复计算；</li>
            <li>所有专利成果须以获国家知识产权局授权为准，同时要求我校作为第一专利权人、我校教职工作为第一发明人；软件著作权须以我校作为唯一的著作权人；</li>
            <li>专利有两个专利权人，中原工学院为第一专利权人时，业绩点计70%，专利有三个及以上专利权人时，不计业绩点；</li>
            <li>每人每年授权发明专利8项以内（含）全额计算业绩点，超过8项的部分乘以0.5的系数。</li>
            <li>其他类型的国防专利按同类别专利业绩点上浮10个计。</li>
          </ol>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "ThesisStandard",
  data() {
    return {
      headers: [
        {
          text: "类别",
          align: "center",
          sortable: false,
          value: "category"
        },
        {
          text: "国际发明专利（PCT/美国专利等）",
          align: "center",
          sortable: false,
          value: "internationInvention"
        },
        {
          text: "国防发明专利",
          align: "center",
          sortable: false,
          value: "defenseInvention"
        },
        {
          text: "发明专利",
          align: "center",
          sortable: false,
          value: "paentForInvention"
        },
        {
          text: "实用新型专利",
          align: "center",
          sortable: false,
          value: "untilityModelPatent"
        },
        {
          text: "外观设计专利",
          align: "center",
          sortable: false,
          value: "designPaent"
        },
        {
          text: "软件著作权",
          align: "center",
          sortable: false,
          value: "softwareCopyright"
        }
      ],
      desserts: [
        {
          category: "业绩点",
          internationInvention: 300,
          defenseInvention: 150,
          paentForInvention: 120,
          untilityModelPatent: 20,
          designPaent: 16,
          softwareCopyright: 20
        }
      ]
    };
  }
};
</script>

<style scope>
</style>


(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2073f3"],{a05c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("教学平台")]),a("v-spacer"),a("v-spacer")],1),a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("教学平台信息录入")]),a("v-spacer"),a("v-spacer")],1),a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:e.validRules.princlName,label:"负责人名称",required:""},model:{value:e.defaultForm.princlName,callback:function(t){e.$set(e.defaultForm,"princlName",t)},expression:"defaultForm.princlName"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[a("v-text-field",e._g({attrs:{label:"发表时间",rules:e.validRules.createDate,readonly:""},model:{value:e.defaultForm.createDate,callback:function(t){e.$set(e.defaultForm,"createDate",t)},expression:"defaultForm.createDate"}},l))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.defaultForm.createDate,callback:function(t){e.$set(e.defaultForm,"createDate",t)},expression:"defaultForm.createDate"}})],1)],1),a("v-flex",{attrs:{md5:""}},[a("v-select",{attrs:{rules:e.validRules.departMentName,items:e.departMentItems,"item-text":"state","item-value":"abbr",label:"部门名称","persistent-hint":"","return-object":"","single-line":""},model:{value:e.defaultForm.departMentName,callback:function(t){e.$set(e.defaultForm,"departMentName",t)},expression:"defaultForm.departMentName"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-select",{attrs:{rules:e.validRules.level,items:e.levelItems,"item-text":"state","item-value":"abbr",label:"平台建设级别","persistent-hint":"","return-object":"","single-line":""},model:{value:e.defaultForm.level,callback:function(t){e.$set(e.defaultForm,"level",t)},expression:"defaultForm.level"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:e.validRules.platFormName,label:"平台名称",required:""},model:{value:e.defaultForm.platFormName,callback:function(t){e.$set(e.defaultForm,"platFormName",t)},expression:"defaultForm.platFormName"}})],1),a("v-flex",{attrs:{md5:""}})],1)],1)],1)],1)],1),a("v-card",{staticStyle:{"margin-top":"50px"}},[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("业绩分配情况")]),a("v-spacer")],1),a("div",{staticClass:"text-left",staticStyle:{margin:"10px"}},[a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[e._v("业绩点: x")]),a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[e._v("待分配: x")])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tableData,"hide-actions":!0},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"text-xs-center",staticStyle:{width:"50%"}},[e._v(e._s(t.item.name))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.department))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.performance))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.remark))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{attrs:{small:"",fab:"",color:"#ff3a3a"},on:{click:function(a){return e.deleteItem(t.item)}}},[a("v-icon",{attrs:{color:"white"}},[e._v("delete")])],1)],1)]}}])}),a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{attrs:{fab:"",small:"",color:"cyan"}},[a("v-icon",{attrs:{color:"white"}},[e._v("person_add")])],1)],1)],1),a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{attrs:{color:"info"},on:{click:e.saveInfo}},[e._v("保存项目信息")])],1)],1)},r=[],n={name:"TeachingAchievementAward",data:function(){return{menu:!1,modal:!1,valid:!1,validRules:{princlName:[function(e){return!!e||"请填写负责人"}],departMentName:[function(e){return""!==e||"请选择部门名称"}],level:[function(e){return""!==e||"请选择平台建设级别"}],platFormName:[function(e){return!!e||"请填写平台名称"}],publishDate:[function(e){return!!e||"请选择建设日期"}]},defaultForm:{princlName:"丁金洋",createDate:(new Date).toISOString().substr(0,10),departMentName:"",achievementName:"",date:"",level:""},departMentItems:[{state:"北大核心",abbr:"北大核心"},{state:"中原工学院",abbr:"中原工学院"},{state:"其他",abbr:"其他"}],levelItems:[{state:"国家级教学平台",abbr:"国家级教学平台"},{state:"省级教学平台",abbr:"省级家级教学平台"},{state:"学校级教学平台",abbr:"学校级教学平台"}],headers:[{text:"姓名",align:"center",value:"name"},{text:"部门",align:"center",value:"department"},{text:"业绩点",align:"center",value:"performance"},{text:"备注",align:"center",value:"remark"}],tableData:[{name:"丁金洋",department:"中原工学院",performance:-1,remark:"无"}]}},methods:{calculate:function(e){this.$refs[e].validate()&&(this.snackbar=!0)},saveInfo:function(){console.log("保存项目信息")},deleteItem:function(e){var t=this.tableData.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.tableData.splice(t,1)}}},s=n,o=a("2877"),i=a("6544"),c=a.n(i),u=a("8336"),m=a("b0af"),d=a("cc20"),v=a("a523"),f=a("8fea"),p=a("2e4b"),b=a("0e8f"),x=a("4bd4"),h=a("132d"),F=a("a722"),k=a("e449"),_=a("b56d"),w=a("9910"),y=a("2677"),N=a("71d9"),D=a("2a7f"),V=Object(o["a"])(s,l,r,!1,null,null,null);t["default"]=V.exports;c()(V,{VBtn:u["a"],VCard:m["a"],VChip:d["a"],VContainer:v["a"],VDataTable:f["a"],VDatePicker:p["a"],VFlex:b["a"],VForm:x["a"],VIcon:h["a"],VLayout:F["a"],VMenu:k["a"],VSelect:_["a"],VSpacer:w["a"],VTextField:y["a"],VToolbar:N["a"],VToolbarTitle:D["b"]})}}]);
//# sourceMappingURL=chunk-2d2073f3.58ca769b.js.map
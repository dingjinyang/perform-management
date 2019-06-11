(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d84836da"],{"102a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("教材")]),a("v-spacer"),a("v-spacer")],1),a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("教材信息录入")]),a("v-spacer"),a("v-spacer")],1),a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:t.validRules.princlName,label:"负责人名称",required:""},model:{value:t.defaultForm.princlName,callback:function(e){t.$set(t.defaultForm,"princlName",e)},expression:"defaultForm.princlName"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-select",{attrs:{rules:t.validRules.departMentName,items:t.departMentItems,"item-text":"state","item-value":"abbr",label:"部门名称","persistent-hint":"","return-object":"","single-line":""},model:{value:t.defaultForm.departMentName,callback:function(e){t.$set(t.defaultForm,"departMentName",e)},expression:"defaultForm.departMentName"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:t.validRules.name,label:"姓名",required:""},model:{value:t.defaultForm.name,callback:function(e){t.$set(t.defaultForm,"name",e)},expression:"defaultForm.name"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:t.validRules.jobTitle,label:"职称",required:""},model:{value:t.defaultForm.jobTitle,callback:function(e){t.$set(t.defaultForm,"jobTitle",e)},expression:"defaultForm.jobTitle"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:t.validRules.materialName,label:"教材名称",required:""},model:{value:t.defaultForm.materialName,callback:function(e){t.$set(t.defaultForm,"materialName",e)},expression:"defaultForm.materialName"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:t.validRules.ISBN,label:"书号（ISBN）",required:""},model:{value:t.defaultForm.ISBN,callback:function(e){t.$set(t.defaultForm,"ISBN",e)},expression:"defaultForm.ISBN"}})],1),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{rules:t.validRules.publichHouse,label:"书号（ISBN）",required:""},model:{value:t.defaultForm.publichHouse,callback:function(e){t.$set(t.defaultForm,"publichHouse",e)},expression:"defaultForm.publichHouse"}})],1),a("v-flex",{attrs:{md5:""}})],1)],1)],1)],1)],1),a("v-card",{staticStyle:{"margin-top":"50px"}},[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("业绩分配情况")]),a("v-spacer")],1),a("div",{staticClass:"text-left",staticStyle:{margin:"10px"}},[a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[t._v("业绩点: x")]),a("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[t._v("待分配: x")])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tableData,"hide-actions":!0},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center",staticStyle:{width:"50%"}},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.department))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.performance))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.remark))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{attrs:{small:"",fab:"",color:"#ff3a3a"},on:{click:function(a){return t.deleteItem(e.item)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("delete")])],1)],1)]}}])}),a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{attrs:{fab:"",small:"",color:"cyan"}},[a("v-icon",{attrs:{color:"white"}},[t._v("person_add")])],1)],1)],1),a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{attrs:{color:"info"},on:{click:t.saveInfo}},[t._v("保存项目信息")])],1)],1)},i=[],n={name:"HorizontalProject",data:function(){return{menu:!1,modal:!1,valid:!1,validRules:{princlName:[function(t){return!!t||"请填写负责人"}],departMentName:[function(t){return""!==t||"请选择部门名称"}],name:[function(t){return!!t||"请填写姓名"}],jobTitle:[function(t){return!!t||"请填写职称"}],materialName:[function(t){return!!t||"请填写教材名称"}],ISBN:[function(t){return!!t||"请填写ISBN"}],publichHouse:[function(t){return!!t||"请填写出版社"}]},defaultForm:{princlName:"丁金洋",departMentName:"",name:"",jobTitle:"",materialName:"",ISBN:"",publichHouse:""},departMentItems:[{state:"北大核心",abbr:"北大核心"},{state:"中原工学院",abbr:"中原工学院"},{state:"其他",abbr:"其他"}],headers:[{text:"姓名",align:"center",value:"name"},{text:"部门",align:"center",value:"department"},{text:"业绩点",align:"center",value:"performance"},{text:"备注",align:"center",value:"remark"}],tableData:[{name:"丁金洋",department:"中原工学院",performance:-1,remark:"无"}]}},methods:{calculate:function(t){this.$refs[t].validate()&&(this.snackbar=!0)},saveInfo:function(){console.log("保存项目信息")},deleteItem:function(t){var e=this.tableData.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.tableData.splice(e,1)}}},l=n,o=a("2877"),s=a("6544"),u=a.n(s),c=a("8336"),d=a("b0af"),f=a("cc20"),m=a("a523"),h=a("8fea"),v=a("0e8f"),p=a("4bd4"),b=a("132d"),x=a("a722"),w=a("b56d"),g=a("9910"),y=a("2677"),_=a("71d9"),N=a("2a7f"),F=Object(o["a"])(l,r,i,!1,null,null,null);e["default"]=F.exports;u()(F,{VBtn:c["a"],VCard:d["a"],VChip:f["a"],VContainer:m["a"],VDataTable:h["a"],VFlex:v["a"],VForm:p["a"],VIcon:b["a"],VLayout:x["a"],VSelect:w["a"],VSpacer:g["a"],VTextField:y["a"],VToolbar:_["a"],VToolbarTitle:N["b"]})},2677:function(t,e,a){"use strict";var r=a("8654"),i=(a("7e63"),a("d9bd")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},l={name:"v-textarea",extends:r["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return n({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||r["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(i["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},o=a("7cf7"),s=a("ab6d");a.d(e,"a",function(){return u});var u={functional:!0,$_wrapperFor:r["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,n=e.data,c=e.slots,d=e.parent;Object(s["a"])(n);var f=Object(o["a"])(c(),t);return a.textarea&&Object(i["d"])("<v-text-field textarea>","<v-textarea outline>",u,d),a.multiLine&&Object(i["d"])("<v-text-field multi-line>","<v-textarea>",u,d),a.textarea||a.multiLine?(n.attrs.outline=a.textarea,t(l,n,f)):t(r["a"],n,f)}}},"26e5":function(t,e,a){},"4bd4":function(t,e,a){"use strict";a("26e5");var r=a("94ab");e["a"]={name:"v-form",mixins:[Object(r["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",function(a){e.$set(e.errorBag,t._uid,a)},{immediate:!0})},r={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))}):r.valid=a(t),r},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var a=this.watchers.find(function(t){return t._uid===e._uid});a.valid&&a.valid(),a.shouldValidate&&a.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"7e63":function(t,e,a){}}]);
//# sourceMappingURL=chunk-d84836da.8d64bbec.js.map
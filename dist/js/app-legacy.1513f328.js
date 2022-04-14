(function(){"use strict";var t={671:function(t,e,r){var s=r(144),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Form")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form",attrs:{name:"form",id:"form"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[r("h1",{staticClass:"form__name"},[t._v("Форма клиента")]),r("div",{staticClass:"form__data"},[r("fieldset",{staticClass:"form__fieldset"},[r("legend",{staticClass:"form__legend"},[t._v("Основные данные")]),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"last-name"}},[t._v("Фамилия")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.mainInfo.lastName,expression:"mainInfo.lastName",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"last-name"},domProps:{value:t.mainInfo.lastName},on:{input:[function(e){e.target.composing||t.$set(t.mainInfo,"lastName",e.target.value.trim())},function(e){return t.setLastName(e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),r("br"),t.$v.mainInfo.lastName.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.mainInfo.lastName.$error}},[t._v(" Это поле обязательно. ")])]),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"first-name"}},[t._v("Имя")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.mainInfo.firstName,expression:"mainInfo.firstName",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"first-name"},domProps:{value:t.mainInfo.firstName},on:{input:[function(e){e.target.composing||t.$set(t.mainInfo,"firstName",e.target.value.trim())},function(e){return t.setFirstName(e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),r("br"),t.$v.mainInfo.firstName.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.mainInfo.firstName.$error}},[t._v(" Это поле обязательно. ")])]),t._m(0),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"birthdate"}},[t._v("Дата рождения")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.mainInfo.birthdate,expression:"mainInfo.birthdate",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__text-field",attrs:{type:"date",id:"birthdate"},domProps:{value:t.mainInfo.birthdate},on:{input:[function(e){e.target.composing||t.$set(t.mainInfo,"birthdate",e.target.value.trim())},function(e){return t.setBirthdate(e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),r("br"),t.$v.mainInfo.birthdate.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.mainInfo.birthdate.$error}},[t._v(" Это поле обязательно. ")])]),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"phone-number"}},[t._v("Номер телефона")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.mainInfo.phoneNumber,expression:"mainInfo.phoneNumber",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__text-field",attrs:{type:"tel",format:"7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}",id:"phone-number"},domProps:{value:t.mainInfo.phoneNumber},on:{input:[function(e){e.target.composing||t.$set(t.mainInfo,"phoneNumber",e.target.value.trim())},function(e){return t.setPhoneNumber(e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),r("br"),t.$v.mainInfo.phoneNumber.required?t._e():r("span",{staticClass:"form__error",class:{form__error_show:t.$v.mainInfo.phoneNumber.$error}},[t._v(" Это поле обязательно. ")]),t.$v.mainInfo.phoneNumber.isPhoneNumber?t._e():r("span",{staticClass:"form__error",class:{form__error_show:t.$v.mainInfo.phoneNumber.$error}},[t._v("Недействительный номер.")])]),t._m(1),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"client-group"}},[t._v("Группа клиентов")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.mainInfo.clientGroup,expression:"mainInfo.clientGroup",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__multiselect-field",attrs:{id:"client-group",multiple:""},on:{input:function(e){return t.setClientGroup(e.target.value)},change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.mainInfo,"clientGroup",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"vip"}},[t._v("VIP")]),r("option",{attrs:{value:"problematic"}},[t._v("Проблемные")]),r("option",{attrs:{value:"mi"}},[t._v("ОМС")])]),r("br"),t.$v.mainInfo.clientGroup.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.mainInfo.clientGroup.$error}},[t._v(" Это поле обязательно. ")])]),t._m(2),t._m(3)]),r("fieldset",{staticClass:"form__fieldset"},[r("legend",{staticClass:"form__legend"},[t._v("Адрес")]),t._m(4),t._m(5),t._m(6),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"city"}},[t._v("Город")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.address.city,expression:"address.city",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"city"},domProps:{value:t.address.city},on:{input:[function(e){e.target.composing||t.$set(t.address,"city",e.target.value.trim())},function(e){return t.setCity(e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),r("br"),t.$v.address.city.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.address.city.$error}},[t._v(" Это поле обязательно. ")])]),t._m(7),t._m(8)]),r("fieldset",{staticClass:"form__fieldset"},[r("legend",{staticClass:"form__legend"},[t._v("Паспорт")]),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"doctype"}},[t._v("Тип документа")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.passport.doctype,expression:"passport.doctype",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__select-field",attrs:{id:"doctype"},on:{input:function(e){return t.setDoctype(e.target.value)},change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.passport,"doctype",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"passport"}},[t._v("Паспорт")]),r("option",{attrs:{value:"birth-certificate"}},[t._v("Свидетельство о рождении")]),r("option",{attrs:{value:"driving-license"}},[t._v("Вод. удостоверение")])]),r("br"),t.$v.passport.doctype.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.passport.doctype.$error}},[t._v(" Это поле обязательно. ")])]),t._m(9),t._m(10),t._m(11),r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block form__label_required",attrs:{for:"date-of-issue"}},[t._v("Дата выдачи")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passport.dateOfIssue,expression:"passport.dateOfIssue",modifiers:{trim:!0}}],staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"date-of-issue"},domProps:{value:t.passport.dateOfIssue},on:{input:[function(e){e.target.composing||t.$set(t.passport,"dateOfIssue",e.target.value.trim())},function(e){return t.setDateOfIssue(e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),t.$v.passport.dateOfIssue.required?t._e():r("div",{staticClass:"form__error",class:{form__error_show:t.$v.passport.dateOfIssue.$error}},[t._v(" Это поле обязательно. ")])])])]),t._m(12),r("div",{staticClass:"form__message-wrapper",class:{"form__message-wrapper_show":t.showSuccessMessage}},[r("div",{staticClass:"form__message"},[t._v("Запись создана")])])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"middle-name"}},[t._v("Отчество")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"middle-name"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"sex"}},[t._v("Пол")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"sex"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"doctor"}},[t._v("Лечащий врач")]),r("select",{staticClass:"form__field form__field_wide form__select-field",attrs:{id:"doctor"}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("-- Выбор врача --")]),r("option",{attrs:{value:"ivanov"}},[t._v("Иванов")]),r("option",{attrs:{value:"zhakharov"}},[t._v("Захаров")]),r("option",{attrs:{value:"chernyshova"}},[t._v("Чернышева")])]),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_inline",attrs:{for:"disable-sms"}},[t._v("Не отправлять СМС")]),r("input",{staticClass:"form__field form__checkbox-field",attrs:{id:"disable-sms",type:"checkbox"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"index"}},[t._v("Индекс")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"index"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"country"}},[t._v("Страна")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"country"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"region"}},[t._v("Область")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"region"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"street"}},[t._v("Улица")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"street"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"building"}},[t._v("Дом")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"building"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"batch"}},[t._v("Серия")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"batch"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"number"}},[t._v("Номер")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"number"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label form__label_block",attrs:{for:"issued-by"}},[t._v("Кем выдан")]),r("input",{staticClass:"form__field form__field_wide form__text-field",attrs:{type:"text",id:"issued-by"}}),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form__button-wrapper"},[r("button",{staticClass:"form__button-submit",attrs:{type:"submit"}},[t._v("Создать")])])}],_=r(379);const n=_.BM.regex("phoneNumber",/^(7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2})*$/);var f={data(){return{showSuccessMessage:!1,mainInfo:{lastName:"",firstName:"",birthdate:"",phoneNumber:"",clientGroup:[]},address:{city:""},passport:{doctype:"",dateOfIssue:""}}},validations:{mainInfo:{lastName:{required:_.C1},firstName:{required:_.C1},birthdate:{required:_.C1},phoneNumber:{required:_.C1,isPhoneNumber:n},clientGroup:{required:_.C1}},address:{city:{required:_.C1}},passport:{doctype:{required:_.C1},dateOfIssue:{required:_.C1}}},methods:{setLastName(t){this.mainInfo.lastName=t,this.$v.mainInfo.lastName.$touch()},setFirstName(t){this.mainInfo.firstName=t,this.$v.mainInfo.firstName.$touch()},setBirthdate(t){this.mainInfo.birthdate=t,this.$v.mainInfo.birthdate.$touch()},setPhoneNumber(t){this.mainInfo.phoneNumber=t,this.$v.mainInfo.phoneNumber.$touch()},setClientGroup(t){const e=this.mainInfo.clientGroup.indexOf(t);-1===e?this.mainInfo.clientGroup.push(t):this.mainInfo.clientGroup.splice(e,1),this.$v.mainInfo.clientGroup.$touch()},setCity(t){this.address.city=t,this.$v.address.city.$touch()},setDoctype(t){this.passport.doctype=t,this.$v.passport.doctype.$touch()},setDateOfIssue(t){this.passport.dateOfIssue=t,this.$v.passport.dateOfIssue.$touch()},submit(){this.$v.$touch(),this.$v.$invalid||(this.showSuccessMessage=!0)}}},m=f,u=r(1),c=(0,u.Z)(m,o,l,!1,null,null,null),d=c.exports,p={components:{Form:d}},v=p,b=(0,u.Z)(v,a,i,!1,null,null,null),h=b.exports,C=r(620);s.Z.config.productionTip=!1,s.Z.config.devtools=!0,s.Z.use(C.ZP),new s.Z({render:function(t){return t(h)}}).$mount("#app")}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,s,a,i){if(!s){var o=1/0;for(f=0;f<t.length;f++){s=t[f][0],a=t[f][1],i=t[f][2];for(var l=!0,_=0;_<s.length;_++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](s[_])}))?s.splice(_--,1):(l=!1,i<o&&(o=i));if(l){t.splice(f--,1);var n=a();void 0!==n&&(e=n)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[s,a,i]}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,i,o=s[0],l=s[1],_=s[2],n=0;if(o.some((function(e){return 0!==t[e]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(_)var f=_(r)}for(e&&e(s);n<o.length;n++)i=o[n],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(f)},s=self["webpackChunkclient_form"]=self["webpackChunkclient_form"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(671)}));s=r.O(s)})();
//# sourceMappingURL=app-legacy.1513f328.js.map
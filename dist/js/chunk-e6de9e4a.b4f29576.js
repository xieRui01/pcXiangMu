(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6de9e4a"],{a31a:function(t,n,a){"use strict";a("a4f2")},a4f2:function(t,n,a){},dd7b:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"login"}},[a("div",{attrs:{id:"login_box"}},[t._m(0),a("div",[a("el-input",{staticClass:"name",attrs:{placeholder:"请输入账号"},model:{value:t.form.name1,callback:function(n){t.$set(t.form,"name1",n)},expression:"form.name1"}},[a("div")]),a("br"),a("el-input",{staticClass:"pwd",attrs:{placeholder:"请输入密码","show-password":""},model:{value:t.form.pwd,callback:function(n){t.$set(t.form,"pwd",n)},expression:"form.pwd"}})],1),a("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:function(n){return t.login1()}}},[t._v("登录")]),a("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:function(n){return t.login2()}}},[t._v("注册")])],1)])},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("p",{staticClass:"p1"},[t._v("账号登录")])])}],s={name:"login",data:function(){return{form:{name1:"",pwd:""}}},methods:{login1:function(){var t=this;console.log("花海"),this.$ajax({method:"post",url:"http://122.112.253.28:8888/api/private/v1/login",data:{username:this.form.name1,password:this.form.pwd}}).then((function(n){console.log("我拿到的数据：",n),localStorage.setItem("token",n.data.data.token),200==n.data.meta.status?t.$router.push({path:"/menu1"}):alert(hh)})).catch((function(t){console.log(t)}))},login2:function(){this.$router.push({path:"/inser"})}}},i=s,r=(a("a31a"),a("2877")),l=Object(r["a"])(i,e,o,!1,null,"6a728949",null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e6de9e4a.b4f29576.js.map
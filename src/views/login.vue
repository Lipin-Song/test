<!-- 包裹嵌套其它元素，使元素具有区域性 -->
<template >
    <div class="login">
      <p class="title">学生信息管理系统</p>
      <!-- ref,为表单起个别名；rules，定义一套校验规则；model，绑定的表单输入数据 -->
      <el-form
        :model="user"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login()">登录</el-button>
          <span></span>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  //export主要用于对外输出本模块变量的接口，一个文件就可以被理解为一个模块。export就是导出
  export default {
    data() {
      return {
        user: {
          username:"",
          password: "",
        },
        rules: {
          username: [
            // required,判断当前选项内容是否为必填
            // trigger,失去焦点时进行验证
            { required: true, message: "请输入用户名", trigger: "blur" },
            {
              min: 3,
              max: 12,
              message: "长度在 3 到 12 个字符",
              trigger: "blur",
            },
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            {
              min: 3,
              max: 16,
              message: "长度在 3 到 16 个字符",
              trigger: "blur",
            },
          ],
        },
      };
    },
    methods: {
      // 登录方法
      login() {
        this.$router.push("/home");
      },
      // 清空表单
      resetForm(formName) {
        this.user = {
          username: "",
          password: "",
        };
      },
    },
  };
  </script>
  <style>
  * {
    margin: 0;
    padding: 0;
  }

  .login {
    padding-top: 450px;
    background-image:url(https://img2.baidu.com/it/u=4180845142,4087801993&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375);
    height: 900px;
  }
  .title {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 20px;
    color: rgb(60, 96, 164);
    font-family:"宋体";
    text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }
  .demo-ruleForm {
    width: 350px;
    margin: 20px auto;
    padding: 30px 50px 10px 0;
    text-align: center;
    border-radius:10%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(60, 96, 164,0.4);
  }
  
  .login p {
    text-align: center;
  }
  .btn {
    text-align: center;
  }
  .btn span {
    display: inline-block;
    width: 30px;
  }
  .el-form-item__label{
    color: rgb(204, 236, 236);
    font-size: 16px;
  }
  .el-input__inner{
    color: rgb(204, 236, 236);
    background-color: rgb(60, 96, 164,0.5);
  }
  .el-button--primary {
    background-color: rgb(60, 96, 164,0.5);
  }
  .el-button{
    background-color: rgb(60, 96, 164,0.3);
  }
  .el-button:hover{
    background: #66b1ff;
  }

  </style>
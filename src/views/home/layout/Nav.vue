<template>
  <el-aside width="200px">
    <!-- default-active需要传进去的值就是子导航的index值（也就是其路由值 -->
    <el-menu default-active="/index" class="el-menu-vertical-demo" router>
      <div id="msg">
        <span>管理员：宋利平</span><br />
        <img src="./img/头像.jpg" />
        <a @click="logout" href="#" class="logout">退出登录</a>
      </div>
      <hr />
      <!-- 无子级 -->
      <el-menu-item index="/index" style="margin-top: 30px">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 有子级 -->
      <el-submenu index="/employee" style="margin-top: 20px">
        <!-- template,模板占位符,可帮助开发者包裹元素,可创建组件模板内容 -->
        <template slot="title">
          <i class="el-icon-user-solid"></i>学生管理
        </template>
        <el-menu-item index="/employee/list">
          <i class="el-icon-menu"></i>学生列表
        </el-menu-item>
        <el-menu-item index="/employee/save">
          <i class="el-icon-plus"></i> 添加学生
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/employee" style="margin-top: 20px">
        <!-- template,模板占位符,可帮助开发者包裹元素,可创建组件模板内容 -->
        <template slot="title">
          <i class="el-icon-user-solid"></i>组件练习
        </template>
        <el-menu-item index="/employee/test01">
          <i class="el-icon-menu"></i>Layout布局
        </el-menu-item>
        <el-menu-item index="/employee/test02">
          <i class="el-icon-menu"></i>备选项
        </el-menu-item>
        <el-menu-item index="/employee/test03">
          <i class="el-icon-menu"></i>计数器
        </el-menu-item>
        <el-menu-item index="/employee/test04">
          <i class="el-icon-menu"></i>选择器
        </el-menu-item>
        
      </el-submenu>

      
    </el-menu>
  </el-aside>
</template>
    
    <script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
    <style>
.el-aside {
  overflow: hidden;
  height: 100vh;
  background-color: #d3dce6;
}

.el-menu {
  background-color: #d3dce6;
}
#msg {
  padding-left: 20px;
  width: 150px;
  text-align: left;
  font-size: 14px;
  height: 200px;
  font-family: "微软雅黑";
  /* background-color: rgb(87, 161, 161,0.3); */
}
#msg a {
  text-decoration: none;
  display: block;
  text-align: center;
  color: rgb(134, 144, 43);
  margin-left: 10px;
  margin-top: 10px;
}
#msg a:hover {
  color: red;
}
#msg span {
  font-size: 18px;
  padding-top: 10px;
  display: block;
  margin-left: 20px;
  font-weight: bold;
  color: #5b718c;
}
#msg img {
  height: 100px;
  height: 100px;
  display: block;
  margin-left: 30px;
  border-radius: 50%;
}
</style>
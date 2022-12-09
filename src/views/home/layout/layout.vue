<template>
  <div>
    <el-container>
      <!-- 左侧导航菜单 -->
      <Nav />
      <el-container>

        <el-container>
          <el-header>
            <!-- 面包屑 -->
            <BreadCrumb />
          </el-header>
          <router-view />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Nav from "./Nav.vue";
import BreadCrumb from "../layout/BreadCrumb.vue";
export default {
    components: {
    Nav,
    BreadCrumb,
  },
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}


.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<template>
    <div class="breadcrumb">
      <!-- el-breadcrumb,面包屑导航 -->
      <el-breadcrumb separator=">">
        <p class="gps el-icon-location-outline">当前位置</p>
        <el-breadcrumb-item
          id="point"
          :to="v.path"
          v-for="(v, i) in breadcrumbList"
          :key="i"
          >{{ v.meta.title }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </template>
    
    <script>
  export default {
    name: "breadcrumb",
    // computed是vue的计算属性，是根据依赖关系进行缓存的计算
    computed: {
      breadcrumbList() {
        // 当有多级路由的时候,记录每一级路由,并生成数组
        return this.$route.matched;
      },
    },
  };
  </script>
    <!-- scoped，让样式只在当前组件生效 -->
    <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .gps {
    float: left;
    height: 60px;
    line-height: 60px;
    color: rgb(61, 61, 151);
    font-weight: bold;
  }
  .breadcrumb {
    float: left;
  }
  #point {
    display: inline-block;
    line-height: 60px;
    color: rgb(82, 158, 159);
  }
  </style>
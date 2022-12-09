<template>
    <div>
      <el-button id="system" @click="show2 =!show2">系统信息</el-button>
      <div style="margin-top: 20px; height: 100px">
        <!-- 使用transition元素把需要被动画控制的元素,包裹起来 -->
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="transition-box">
            系统介绍......
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show2: true,
        message: "员工管理系统简介",
      };
    },
    methods: {
    },
  };
  </script>
  <style>
  #system{
    display: block;
    float: left;
  }
  .transition-box {
    float: left;
    margin: 10px 20px 20px 0;
    width: 100%;
    height: 700px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
  }
  </style>
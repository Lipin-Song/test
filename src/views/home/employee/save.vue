<template>
    <div>
        <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="学号：">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="姓名：">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="联系方式：">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="家庭住址：">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="班级：">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="专业：">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加学生</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>
  <script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style>
.el-input__inner{
    width: 200px;
}

</style>
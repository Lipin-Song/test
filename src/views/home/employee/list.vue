<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="学号" width="80" >
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
    <el-table-column prop="province" label="联系方式" width="120">
    </el-table-column>
    <el-table-column prop="city" label="家庭住址" width="180"> </el-table-column>
    <el-table-column prop="address" label="班级" width="60"> </el-table-column>
    <el-table-column prop="zip" label="专业" width="120"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
        <el-button type="text" size="small">编辑</el-button>
    </el-table-column>
  </el-table>
</template>
  
  <script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          date: "202201",
          name: "张三",
          province: "13578659409",
          city: "陕西省西安市南窑国际",
          address: "1班",
          zip: "软件技术",
        },{
          date: "202201",
          name: "李四",
          province: "13578659409",
          city: "陕西省西安市南窑国际",
          address: "1班",
          zip: "软件技术",
        },{
          date: "202201",
          name: "王五",
          province: "13578659409",
          city: "陕西省西安市南窑国际",
          address: "1班",
          zip: "软件技术",
        },{
          date: "202201",
          name: "王小虎",
          province: "13578659409",
          city: "陕西省西安市南窑国际",
          address: "1班",
          zip: "软件技术",
        },{
          date: "202201",
          name: "王小虎",
          province: "13578659409",
          city: "陕西省西安市南窑国际",
          address: "1班",
          zip: "软件技术",
        }
      ],
    };
  },
};
</script>

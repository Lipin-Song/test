//module.export 相当于集中起来导出去，导出的为一个对象，在 vue 中直接访问使用即可。
module.exports={
    // 通过devServer，可以在NodeJS架设起临时的服务器用于项目的运行与调试
    devServer:{
        port:9528,//端口号
        host:'localhost',//域名
        open:true //自动打开浏览器
    },
    // 关闭ESLint的所有规则
    // Eslint是一款前端VUE开发语法检测的工具，是用 JavaScript 语言编写的
    // 设置是否在开发环境下每次保存代码时都启用 eslint验证
    lintOnSave:false

}
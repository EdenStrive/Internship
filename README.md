# 我实习的学习历程

-----

github仓库主要包括内容


> * 手机端适配
> * 落地页批量处理
> * react —— react官方文档主要概念以及高级指引
> * webpack+react
> * koa2.0后端系统

### 0. 项目路径说明

### 1. 最大收获 [React]

- [x] 每日精进
- [x] 各种IE浏览器的兼容
- [x] ie8不支持flex、伪类等css3的新属性，rem对于ie8失效，同时如果js文件中存在一个解析出错的地方就会终止所有js文件的编译，作出判断跳过某段不想让ie8编译的代码也是不可行的。
- [x] koa 中 pool链接数据库的链接数为10，所以每次请求完数据库都要释放连接池。否则将请求不回来数据
- [x] setState触发的页面重新render需要追踪到最内层，如果存在多层对象，要提前在state中提前定义外层对象名称。
- [x] react-router 4.x，使用antd分页器实现分页
- [x] Redux
- [x] react-redux

### 3. 高亮一段代码[^code] 

```javascript
console.log("Hello world!!");
```

2019-04-24

    > * 更新webpack
    
2019-04-26

    > * 更新React.html 里面包括react中的所有的主要概念

2019-05-14

    > * 更新koa server，搭建后端服务

2019-05-16

    > * 我在公司写的手机预约页面：
   ————————[ 点击浏览查看 ]( http://mevent.cy.com/wjhy/20190516/m/hw/index.html )
  
2019-05-22

    > * 为博文nav组件更新函数节流
    
2019-05-31

    > * 我在公司写的星际战甲页面：
   ————————[ 点击浏览查看 ]( http://event.changyou.com/wf/201905/fetena/pc/index.html )

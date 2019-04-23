//假设它是main.js 还是我们的入口文件
// console.log("webpack-dev-server!!!!!!!!!!")
import React from 'react' //创建组件、虚拟dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟Dom放到页面上进行展示的

//创建虚拟dom
console.log("123")

const myh1 = React.createElement('h1',{title:'this is a title'},"我是虚拟dom哦")
const mydiv = React.createElement('div',null,"这是一个div",myh1)

ReactDOM.render(
    mydiv,
    document.getElementById("app")
)
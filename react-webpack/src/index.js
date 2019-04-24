//假设它是main.js 还是我们的入口文件
// console.log("webpack-dev-server!!!!!!!!!!")
import React from 'react' //创建组件、虚拟dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟Dom放到页面上进行展示的

//创建虚拟dom
console.log("123")
//jsx语法的本质，还是在运行中被转换成了React.createElement的形式来进行执行的。中间被babel进行了一次转换

// const myh1 = React.createElement('h1',{title:'this is a title'},"我是虚拟dom哦")
// const mydiv = React.createElement('div',null,"这是一个div",myh1)

const mydivjsx = <div>啦啦啦
    <h1>大大的H1
    </h1>
</div>

ReactDOM.render(
    mydivjsx,
    document.getElementById("app")
)
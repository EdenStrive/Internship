//假设它是main.js 还是我们的入口文件
// console.log("webpack-dev-server!!!!!!!!!!")
import React from 'react' //创建组件、虚拟dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟Dom放到页面上进行展示的
// import Zujian from './components/Hello' //默认如果不做单独的配置的话，不能省略jsx后缀名
import Zujian from '@/components/Hello' //这里的@符号，表示项目根目录中的src这一层目录，需要用webpack进行单独配置

//创建虚拟dom
console.log("123")
//jsx语法的本质，还是在运行中被转换成了React.createElement的形式来进行执行的。中间被babel进行了一次转换
//xml 要比html严格的多 所以在jsx中一定要有闭合标签
// 在jsx空之的区域内，写js表达式，则需要把js代码写到{}中
// const myh1 = React.createElement('h1',{title:'this is a title'},"我是虚拟dom哦")
// const mydiv = React.createElement('div',null,"这是一个div",myh1)
const hr = <hr/>
const arr = [
    <h1>数组一</h1>,
    <h2>数组二</h2>
]

const arr2 = ["111","222","333","444"]
let arr3 = arr2.map(value => <h3 key={value}>{value}</h3>) //方案1

const dog = {
    name:"小黑"
}

const mydivjsx = (<div>啦啦啦
                    <h1>大大的H1
                    </h1>
                    {hr}
                    {arr}
                    {hr}
                    {arr3}
                </div>)

ReactDOM.render(
    <div>    
    {mydivjsx}
    <Zujian name={dog.name}></Zujian>
    </div>
    ,
    document.getElementById("app")
)
import React from 'react'
class Super extends React.Component{ //当对组件进行挂载时<Super></Super>相当于是实例了，new
    constructor(){
        super()
        //为什么一定要在constructor中调用super
        //super是个什么东西：super就是一个函数，而且他是父类构造器，子类中的super，其实就是父类构造器的引用
        //为什么调用super之后new Super后传入参数示例结果会变为underfind（ 继承react.component） //https://www.bilibili.com/video/av37668737/?p=31
    }   //this.setState方法的执行是异步的，有第二个参数，为回调函数，可以获取最新的state值
}
import React from 'react' //创建组件、虚拟dom元素 生命周期
export default function Zujian(props){
    //props是一个形参，并且是只读的，不可以对其进行修改
    return <div>这是一个函数组件--!{props.name}</div>
}

// export default Zujian
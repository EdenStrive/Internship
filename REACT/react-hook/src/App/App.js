import React, { useState , useEffect } from 'react';
import './App.css';







function PartOne() {
  const [ number , setNumber ] = useState(66) //n这是数组结构的写法，number是useState返回的第一个值，setNumber为返回的第二个值
  //初始化 number的值为66
  return(
    <>
      <h2>
        State Hook {number}
        <button onClick={()=>{ setNumber(number+1) }}>点我加一</button>
      </h2>
      <h3>箭头函数中也可以使用Hook：const Example = () =>{ } 这个函数里面是可以使用hook的，还是要重复一下，在class内部是不可以使用hook的，可以管这种组件叫函数组件</h3>
      <h3>number就相当于state setNumber就相当于this.setState,获取时不再需要这样子this.state.xxx获取，而是直接获取即可，更新时也不再使用this</h3>
    </>


  )
}






function PartTwo(){
  const [ strings , setStrings] = useState({one:"componentDidMount() { document.title = `You clicked ${this.state.count} times`;}componentDidUpdate() {document.title = `You clicked ${this.state.count} times`;}",two:"useEffect(() => {document.title = `You clicked ${count} times`;});"})
  const [ clear ] = useState({one:"componentDidMount() { document.title = `You clicked ${this.state.count} times`; ChatAPI.subscribeToFriendStatus( this.props.friend.id, this.handleStatusChange ); } componentWillUnmount() { ChatAPI.unsubscribeFromFriendStatus( this.props.friend.id, this.handleStatusChange); }",
                              two:"  useEffect(() => { function handleStatusChange(status) {   setIsOnline(status.isOnline); } ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange); return () => {   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange); }; });",
                              three:"useEffect(() => { document.title = `You clicked ${count} times`; }, [count]); // 仅在 count 更改时更新"})
  return(
    <>
      <h2>Effect Hook</h2>
      <h3>在官方文档中的解释大意为副作用，我个人理解useEffect就是react声明周期中的componentDidMount 和 componentDidUpdate，我有时候希望一些操作在组件加载和更新都会执行的操作，我们不得不这么写：</h3>
      <p>{strings.one}</p>
      <h3>而在Effect Hook只需要这么写就可以啦,与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。</h3>
      <p>{strings.two}</p><br/>
      <h3>清除需要清除的effect</h3>
      <p>当我们需要对一个组件进行加载时订阅，以及卸载时进行取消订阅时，在class中的写法应该是：</p>
      <p>{clear.one}</p>
      <p>如果使用hook的话，只需要这样</p>
      <p>{clear.two}</p><br/>
      <h3>使用Effect 进行性能优化</h3>
      <p>当组件进行更新一定会进行useEffect方法，但是如果对于没有变化的状态还要再执行，这是浪费性能的，解决这个办法可以这么写：每次更新组件后，都会对count的先后值进行对比，如果发生改变了再进行执行，如果没有发生改变则不会执行该方法，对于有清除操作的effect也是适用的</p>
      <p>{clear.three}</p>
    </>
  )
}











function App() {
  //声明多个state的变量
  const [ company , setCompany ] = useState("阿里巴巴")
  const [ todos , setTodos ] = useState({value:"hello world!"})

  useEffect(()=>{

    console.log("告诉react在完成DOM的更改后运行这段代码, 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。")

  })

  return (
      <div className="App">
        <div>
          <h3>react-hooke: 最直观的作用就是可以让你在不编写class情况下使用state以及其他的React的特性，当你无意识的写函数组件时，想写入状态时，就不必改写成class</h3>
        </div>
      
        <div>
          <h3>react-hooks向下进行兼容，可以考虑在新的组件中使用hook，没有必要把所有的class换成hook，并且在clas中是无法使用hook的。</h3>
          <h3>useState就是一个Hook：useState会返回一对值，一个是当前的状态，一个是更新其状态的方法。括号中就是初始化当前状态的值，上方的例子就为100</h3>
          <h3>useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。我个人从简单的角度来进行解释就是它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。通过使用 Hook，你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。</h3>
          <h3>使用规则：1.只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。  2.只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）</h3>
        </div>  
        <div>
          <PartOne></PartOne>
        </div>
        <div>
          <PartTwo></PartTwo>
        </div>
      </div>
  );
}

export default App;

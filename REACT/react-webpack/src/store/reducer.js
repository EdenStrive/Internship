const defaultState = {
    welcome:false
}

export default (state = defaultState, action)=>{
    //reducer 可以接受state，但是绝对不能修改state
    const newState = JSON.parse(JSON.stringify(state)) //对数据进行深拷贝
    if (action.type == "change_welcome") {
        newState.welcome = action.value
    }
    //新的newState会自动替换老的state
    return newState
}
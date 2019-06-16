const defaultState = {
    welcome:false,
    admin: 1,
    change:null
}

export default (state = defaultState, action)=>{
    //reducer 可以接受state，但是绝对不能修改state
    const newState = JSON.parse(JSON.stringify(state)) //对数据进行深拷贝
    if (action.type == "change_welcome") {
        newState.welcome = action.value
    }else if(action.type == "change_meau2"){
        newState.admin = action.value
    }else if(action.type == "change_meau1"){
        newState.admin = action.value
    }else if(action.type == "change_meau3"){
        newState.admin = action.value
    }else if(action.type == "change_meau4"){
        newState.admin = action.value
    }else if(action.type == "change_blog"){
        newState.admin = action.admin
        newState.change = action.value
    }else if(action.type == "change_blog2"){
        newState.admin = action.admin
        newState.change = action.value
    }

    //新的newState会自动替换老的state
    return newState
}
import React from "react"

const
notFounds ={
    fontSize :"70px",
    backgroundColor:"black",
    color:"rgb(255,255,255)"
}

class notFound extends React.Component{
    render(){
        return(
            <div style={notFounds}>找不到页面啦~~~~~~~~~~~~~~~！</div>
        )
    }
}

export default notFound
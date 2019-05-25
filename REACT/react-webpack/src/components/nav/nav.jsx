import React from 'react'
import styled , { keyframes } from 'styled-components'
//--------------------css
const 
nav_an = keyframes`
    from{
        color:rgb(255,255,255);
    }
    to{
        color:rgb(255,255,255);
        background-color:rgb(38, 49, 53);
    }
`,
nav_ba = keyframes`
    from{
        color:rgb(255,255,255);
        background-color:rgb(38, 49, 53);
    }
    to{
        color:rgb(255,255,255);
    }
`,
Li = styled.li`
    display:inline-block;
    font-size:18px;
    width:130px;
    text-align:center;
    opacity:0.8
`,
INav = styled.nav`
    display: flex;
    flex-direction: row;
    z-index:99;
    color:rgb(255,255,255);
    height:80px;
    align-items:center;
    justify-content:center;
    position:fixed
    width: 100%;
    animation-name:${ props => props.animation ? nav_an : nav_ba};
    -webkit-animation-name:${ props => props.animation ? nav_an : nav_ba};
    animation-duration:1s;
    -webkit-animation-duration:1s;
    animation-timing-function: linear;
    -webkit-animation-timing-function:linear;
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode:forwards;
`,
Ndiv = styled.div`
    margin-left:400px;
`
//-------------------组件
class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.bindScroll = this.bindScroll.bind(this)
        this.Change = this.Change.bind(this)
    }
    componentDidMount(){
        window.addEventListener("scroll",this.bindScroll())
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.bindScroll)
    }
    bindScroll(){
        let timer
        let Change = this.Change
        return ()=>{
            clearTimeout(timer);
            timer = setTimeout(Change, 100);
        }
    }
    //实现函数节流
    Change(){
        let scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollTop)
        if (scrollTop > 400) {
            this.setState({
                an_name:true
            })
        }else{
            this.setState({
                an_name:false
            })
        }
    }
    render(){
        return(
            <INav animation = {this.state.an_name}>
                <Li><span>Eden</span></Li>
                <Ndiv>
                    <Li><span>Blog</span></Li>
                    <Li><span>Sign in</span></Li>
                    <Li><span>Sign up</span></Li>
                </Ndiv>
            </INav>
        )
    }
}
export default Nav
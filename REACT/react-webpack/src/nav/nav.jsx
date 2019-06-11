import React from 'react'
import styled , { keyframes } from 'styled-components'
import { GlobalStyle } from '../../static/css/style' //引用的全局变量
import { Link } from "react-router-dom"
import store from "@/store/index"
import { removeCookie, getCookie } from '@/cookie/jsCookie'
import { message } from 'antd';
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
    color:rgb(255,255,255);
    opacity:0.8;
    &:hover {
        color: #1890ff;
    }
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
        this.logout = this.logout.bind(this)
        store.subscribe(this.welcome.bind(this))//订阅redex。只要state中的数据放生了改变就会重新render
    }
    componentDidMount(){
        window.addEventListener("scroll",this.bindScroll())
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.bindScroll)
    }
    welcome(){
        this.setState({})
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
        if (scrollTop > 200) {
            this.setState({
                an_name:true
            })
        }else{
            this.setState({
                an_name:false
            })
        }
    }
    //退出登录
    logout(){
        removeCookie()
        message.success('退出登录！', 2);
        this.setState({})
    }
    render(){
        return(
            <div>
                <INav animation = {this.state.an_name}>
                <Link to="/"><Li><span>Eden</span></Li></Link>
                    {getCookie('edenName') == undefined ?
                    <Ndiv>
                        <Link to="/blog" style={{position: "relative"}}><Li><span>Blog</span></Li></Link>
                        <Link to="/signin"><Li><span>Sign in</span></Li></Link>
                        <Link to="/signup"><Li><span>Sign up</span></Li></Link>
                    </Ndiv>
                    :
                    <Ndiv>
                        <Link to="/blog" style={{position: "relative"}}><Li><span>Blog</span></Li></Link>
                        <Link to="/admin"><Li><span style={{width:"130px",display:"block"}}>Backstage</span></Li></Link>
                        <Li><span style={{cursor:"auto",width:"175px",display:"block",marginLeft:"20px"}}>Welcome : {getCookie('edenName')}</span></Li>
                        <Li  style={{width:"130px",marginLeft:"62px"}} onClick={this.logout}><span>Logout</span></Li>
                    </Ndiv>
                    }
                </INav>
                <GlobalStyle />  {/*前台全局css样式*/}
                {/* 路由每次更改此Children */}
                { this.props.children } 
            </div>
        )
    }
}
export default Nav
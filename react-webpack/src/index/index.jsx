import React from 'react'
import Nav from '../components/nav/nav'
import { GlobalStyle } from '../../static/css/style' //引用的全局变量
import styled from 'styled-components'
import { Button } from "antd";
import "antd/dist/antd.css";
//--------------------css
const
Div = styled.div`
    width:100%;
    min-width:1300px;
    min-height:100px;
    position: relative;
    display:flex;
    flex-direction:column;
    align-items: center
`,
Img = styled.img`
    width:100%;
    position: absolute;
    z-index:-1;
    top:-80px
`,
Idiv= styled.div`
    width: 750px;
    height: 300px;
    color:rgb(255,255,255);
    position:relative;
    top:250px;
    text-align:center;
    font-size:45px;
    display:flex;
    flex-direction:column;
    align-items: center
`,
Span = styled.span`
    font-size:25px;
    opacity: 0.6;
`,
index_button = {
    width:' 174px',
    height: '50px',
    fontSize:"20px",
    marginTop:"20px"
},
index_p = {
    margin:"0px"
},
blue = {
    display:"inline-block",
    borderBottom:"1px solid rgb(46, 43, 141)"
}


class Index extends React.Component{
    render(){
        return(
            <Div>
                <GlobalStyle />  {/*前台全局css样式*/}
                <Img src="../../static/img/bg_index.jpg" alt=""/>  {/* 页面背景图片 */}
                <Nav></Nav>  {/* 导航 */}
                <Idiv>
                    <p style={index_p}>Welcome To My Personal Blog</p>
                    <Span>Leave me more <div style={blue}>messages~</div></Span>
                    <Button type="primary" style={index_button}>Entry</Button>                
                </Idiv>
            </Div>
        )
    }
}
export default Index
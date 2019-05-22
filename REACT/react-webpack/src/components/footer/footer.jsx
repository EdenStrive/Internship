import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import "../../../static/css/footer.css"


class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //-------------------------------csss
        const Div = styled.div`
            z-index: 100;
            width: 100%;
            position: relative;
            background: rgb(38,49,53);
            top: ${this.props.top};
            height: 311px;        
        `
        return(
            <Div>
                <div className="div_f1">
                    <div className="div_f2">
                        <div className="foo_fun">
                            <a>FUNCTION</a>
                            <a>Blog</a>
                            <a>Sign in</a>
                            <a>Sing up</a>
                        </div>
                        <div className="foo_fun">
                            <a>USEFUL LINKS</a>
                            <a>React</a>
                            <a>React-router</a>
                            <a>Koa</a>
                        </div>
                        <div className="foo_ico">
                            <a href="https://github.com/EdenStrive" target="_blank"><Icon type="github" style={{fontSize:"60px"}}/></a>
                        </div>
                    </div>
                    <p>@2019/05 MADE BY XINGWENPENG. &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;EMAIL:1059951183@qq.com</p>
                </div>
            </Div>
        )
    }
}
export default Footer
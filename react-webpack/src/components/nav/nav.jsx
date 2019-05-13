import React from 'react'
import styled from 'styled-components'
//--------------------css
const 
Li = styled.li`
    display:inline-block;
    font-size:18px;
    color:rgb(255,255,255);
    width:130px;
    text-align:center;
    opacity:0.8
`,
INav = styled.nav`
    display: flex;
    flex-direction: row;
    z-index:10;
    height:100px;
    align-items:center;
    justify-content:center
`,
Ndiv = styled.div`
    margin-left:400px;
    color:rgb(255,255,255)
`
//-------------------组件
class Nav extends React.Component{
    render(){
        return(
            <INav>
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
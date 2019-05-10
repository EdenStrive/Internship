import React from 'react'
import Nav from '../components/nav/nav'
import { GlobalStyle } from '@/css/style' //引用的全局变量


class Index extends React.Component{
    render(){
        return(
            <div>
                <GlobalStyle />
                <Nav></Nav>
            </div>
        )
    }
}
export default Index
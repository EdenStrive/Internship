import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../nav/nav' //nav为每次都会进行渲染
import SubRouter from './SubRouter' //分离路由

class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Nav>
                <SubRouter />
                </Nav>
            </BrowserRouter>
        )
    }
}
export default AppRouter
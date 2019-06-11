import React from 'react'
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import SubRouter from './SubRouter' //分离路由
import Nav from '../Nav/Nav' //nav为每次都会进行渲染 前台路由
import Admin from '../admin/admin' 



class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    {/* 后台路由 */}
                    <Route path = "/admin" component = {Admin} /> 
                    {/* 前台路由 */}
                    <Nav>
                        <SubRouter />
                    </Nav>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default AppRouter
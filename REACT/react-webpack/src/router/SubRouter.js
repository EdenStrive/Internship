import React from 'react' //创建组件、虚拟dom元素 生命周期
import { Route , Switch } from "react-router-dom"
import Index from "@/components/index/index"
import Blog from "@/components/blog/blog"
import Detail from "@/components/detail/detail"
import notFound from "@/components/404/notFound"
import LoginForm from "@/components/signIn/signin"

class SubRouter extends React.Component{
    render(){
        return(
            <Switch>
                {/* exact为精确匹配路径 */}  {/* 把路由组件配置分离开 */}
                <Route exact path = "/" component = {Index} /> 
                <Route path = "/blog" component = {Blog} /> 
                <Route path = "/signin" component = {LoginForm} /> 
                <Route path = "/detail/:id" component = {Detail} /> 
                <Route component={notFound} />
            </Switch>
        )
    }
}

export default SubRouter
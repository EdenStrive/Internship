import React from 'react' //创建组件、虚拟dom元素 生命周期
import { Route , Switch } from "react-router-dom"
// import Index from "@/components/index/index"
// import Blog from "@/components/blog/blog"
// import Detail from "@/components/detail/detail"
// import notFound from "@/components/404/notFound"
// import LoginForm from "@/components/signIn/signin"
// import Signups from "@/components/signup/signup"
import Loadable from 'react-loadable'; // 按路由拆分代码

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Index = Loadable({
    loader: () => import("@/components/index/index"),
    loading: MyLoadingComponent
});

const Blog = Loadable({
    loader: () => import("@/components/blog/blog"),
    loading: MyLoadingComponent
});

const Detail = Loadable({
    loader: () => import("@/components/detail/detail"),
    loading: MyLoadingComponent
});

const notFound = Loadable({
    loader: () => import("@/components/404/notFound"),
    loading: MyLoadingComponent
});

const LoginForm = Loadable({
    loader: () => import("@/components/signIn/signin"),
    loading: MyLoadingComponent
});

const Signups = Loadable({
    loader: () => import("@/components/signup/signup"),
    loading: MyLoadingComponent
});


class SubRouter extends React.Component{
    render(){
        return(
            <Switch>
                    {/* exact为精确匹配路径 */}  {/* 把路由组件配置分离开 */}
                    <Route exact path = "/" component = {Index} /> 
                    <Route path = "/blog" component = {Blog} /> 
                    <Route path = "/signin" component = {LoginForm} /> 
                    <Route path = "/signup" component = {Signups} /> 
                    <Route path = "/detail/:id" component = {Detail} /> 
                    <Route component={notFound} />
            </Switch>
        )
    }
}

export default SubRouter
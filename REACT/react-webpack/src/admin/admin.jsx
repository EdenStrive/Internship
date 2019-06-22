import React from 'react'
import "../../static/css/admin.less"
import { removeCookie, getCookie } from '@/cookie/jsCookie'
import { Menu, Dropdown, Icon , BackTop , message} from 'antd';
import "antd/dist/antd.css"
import Siderone from '@/components/roleOne/roleone'
import Sidertwo from '@/components/roleTwo/roletwo'
import Vmessage from '@/components/vmessage/vmessage' //查看留言
import Lmessage from '@/components/lmessage/lmessage' //留言
import Vblog from '@/components/vblog/vblog'
import Pblog from '@/components/pblog/pblog'
import store from '@/store/index'
import {withRouter} from "react-router-dom";

class Admin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            roleNav:<Siderone />,
            modul: 1,
            right : <Vmessage />
        }
        this.push = this.push.bind(this)
        this.changeM = this.changeM.bind(this)
        store.subscribe(this.changeM.bind(this))
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
        if (getCookie("edenRole") == "100") {
            this.setState({
                roleNav : <Sidertwo />
            })
        }
        if(!getCookie("edenName")){
            message.error("您还未登录，请前往登录页登录",1)
            setTimeout(() => {
                this.props.history.push("/signin");
            }, 1000);
        }
    }
    componentWillUnmount(){
            clearTimeout(this.push);
            this.setState = (state, callback) =>{
                return;
            }
    }
    changeM(){
        let stores = store.getState().admin
        switch (stores) {
            case 1:
                this.setState({
                    right: <Vmessage />
                })
                break;
    
            case 2:
                this.setState({
                    right: <Lmessage />
                })
                break;
            case 3:
                this.setState({
                    right: <Vblog />
                })
                break;
            case 4:
                this.setState({
                    right: <Pblog />
                })
                break;
    
            default:
                break;
        }
    }
    push(id){
        if (id == 1) {
            this.props.history.push("/");
        }else if(id == 2){
            removeCookie()
            message.success("已注销，即将跳转至首页",1.5)
            setTimeout(() => {
                this.props.history.push("/");
            }, 1500);
        }else if(id == 3){
            const action = {
              type:"change_meau2",
              value:2
            }
            store.dispatch(action)
        }
    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <a onClick = {this.push.bind(this,3)}>
                    留言
                </a>
              </Menu.Item>
              <Menu.Item>
                <a onClick = {this.push.bind(this,1)}>
                    返回首页
                </a>
              </Menu.Item>
              <Menu.Item onClick = {this.push.bind(this,2)}>
                <a>
                    退出登录
                </a>
              </Menu.Item>
            </Menu>
        );
        return(
            <div className = "a_body">
                <div className = "a_hidden">
                    <div className = "a_content">

                        <div className = "a_header">
                            <div className = "header_left" onClick = {this.push.bind(this,1)}>
                               <i>Eden</i> 
                            </div>
                            <div className = "header_right">
                                <span>Welcome : {getCookie('edenName')}</span>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" style={{marginRight:"50px"}}>
                                        <div></div>
                                        <Icon type="down" style={{position: "relative",top: "-18px"}}/>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>

                        <div className = "a_bottom">
                            <div className = "b_left">
                                {this.state.roleNav}
                            </div>
                            <div className = "b_right">
                                {this.state.right}
                            </div>
                        </div>
                        <div>
                            <BackTop />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Admin)
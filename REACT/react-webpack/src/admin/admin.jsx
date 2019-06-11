import React from 'react'
import "../../static/css/admin.less"
import { removeCookie, getCookie } from '@/cookie/jsCookie'
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            留言
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            返回首页
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            退出登录
        </a>
      </Menu.Item>
    </Menu>
  );

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
    }
    render(){
        return(
            <div className = "a_body">
                <div className = "a_hidden">
                    <div className = "a_content">

                        <div className = "a_header">
                            <div className = "header_left">
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

                            </div>
                            <div className = "b_right">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Admin
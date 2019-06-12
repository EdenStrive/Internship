import React from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu }  = Menu;

class Sidertwo extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    constructor(props){
        super(props)
        this.state = {
            openKeys: ['sub1']
        }
    }
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
        <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 200 }}
        >
        <SubMenu
        key="sub1"
        title={
            <span>
            <Icon type="mail" />
            <span>Message</span>
            </span>
        }
        >
        <Menu.Item key="1">View messages</Menu.Item>
        <Menu.Item key="2">Leaving message</Menu.Item>
        </SubMenu>
        <SubMenu
        key="sub3"
        title={
            <span>
            <Icon type="setting" />
            <span>Blog</span>
            </span>
        }
        >
        <Menu.Item key="5">View blog</Menu.Item>
        <Menu.Item key="4">Publish blog</Menu.Item>
        </SubMenu>
        <SubMenu
        key="sub4"
        title={
            <span>
            <Icon type="setting" />
            <span>Others</span>
            </span>
        }
        >
        <Menu.Item key="3">Developing</Menu.Item>
        </SubMenu>
    </Menu>
    );
  }
}
export default Sidertwo
import React from 'react'
import { Menu, Icon } from 'antd';
import store from '@/store/index'

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
  changeMeau(key){
    switch (key) {
      case 1:
          const action1 = {
            type:"change_meau1",
            value:1
          }
          store.dispatch(action1)        
          break;

      case 2:
        const action = {
          type:"change_meau2",
          value:2
        }
        store.dispatch(action)
          break;
      case 3:
        const action3 = {
          type:"change_meau3",
          value:3
        }
        store.dispatch(action3)
          break;
      case 4:
        const action4 = {
          type:"change_meau4",
          value:4
        }
        store.dispatch(action4)
          break;
          
          default:
          break;
    }
  }
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
        <Menu.Item key="1" onClick = {this.changeMeau.bind(this , 1)}>View messages</Menu.Item>
        <Menu.Item key="2" onClick = {this.changeMeau.bind(this , 2)}>Leaving message</Menu.Item>
        </SubMenu>
        <SubMenu
        key="sub3"
        title={
            <span>
            <Icon type="appstore" />
            <span>Blog</span>
            </span>
        }
        >
        <Menu.Item key="5" onClick = {this.changeMeau.bind(this , 3)}>View blog</Menu.Item>
        <Menu.Item key="4" onClick = {this.changeMeau.bind(this , 4)}>Publish blog</Menu.Item>
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
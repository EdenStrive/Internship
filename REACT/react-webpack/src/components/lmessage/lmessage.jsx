import React from 'react'
import "../../../static/css/admin.less"
import { Input , Button } from 'antd';
import { setSaid } from "../../../request/request"
import { getCookie } from '@/cookie/jsCookie'
import { message } from 'antd';
import store from '@/store/index'

const { TextArea } = Input;

class Lmessage extends React.Component {
  // submenu keys of first level

    constructor(props){
        super(props)
        this.state = {
            value : ""
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
       
    }
    tijiao(event){
        this.setState({value: event.target.value});
    }
    sub(){
        setSaid(getCookie('edenName'),this.state.value)
            .then(res=>{
                let flag = res.data.code
                if (flag == 0) {
                    message.success(res.data.value, 1);
                    setTimeout(() => {
                        const action = {
                          type:"change_meau1",
                          value:1
                        }
                        store.dispatch(action)
                    }, 1000);
                }
            })
    }
    render() {
        return (
            <div className = "lm_body">
                <div className = "lm_input">
                    <TextArea rows={8} value = {this.state.value} onChange = {this.tijiao.bind(this)}/>
                    <Button type="primary" onClick = {this.sub.bind(this)} style = {{marginTop:"30px"}}>Submit</Button>
                </div>
            </div>
        )
    }
}
export default Lmessage
import React from 'react'
import "../../../static/css/admin.less"
import { getsaid } from  '../../../request/request'
import { Spin, Alert } from 'antd'; //分页器

class Vmessage extends React.Component {
  // submenu keys of first level

    constructor(props){
        super(props)
        this.state = {
            said : []
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
        getsaid()
            .then(res=>{
                let arr = res.data.value
                let new_arr = arr.map((va)=>{
                    return (
                        <div className = "vm_message" key = {va.id}>
                            <h2>{va.user_id}<span>GOOD GOOD STUDY</span></h2>
                            <p>{va.content}</p>
                        </div>
                    )
                })
                this.setState({
                    said : new_arr
                })
            })
            .catch(err=>{
                console.log("报错了！",err)
            })
    }
    componentWillUnmount(){
        this.setState = (state, callback) =>{
            return;
        }
    }
    render() {
        return (
            <div className = "vm_body">
                <div className = "vm_message">
                    <h2>博主<span>GOOD GOOD STUDY</span><span style={{color:"red"}}>置顶</span></h2>
                    <p>文明留言，望各位大佬指点迷津</p>
                </div>
                {this.state.said.length == 0?
                <Spin tip="Loading..." size = "large">
                        <Alert
                        message="客官稍等~~~"
                        description="留言加载呢，不要急喽"
                        type="info"
                        />
                </Spin> : 
                this.state.said}
            </div>
        )
    }
}
export default Vmessage
import React from 'react'
import { Table, Divider } from 'antd';
import { blogList } from  '../../../request/request'
import "../../../static/css/admin.less"

const { Column } = Table;


class Vblog extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            list:null
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
        blogList()
            .then(res=>{
                let arr =res.data.value
                let new_arr = arr.map((va)=>{
                    return (
                        {key : va.id,firstName:va.title}
                    )
                })
                const data = new_arr
                this.setState({
                    list:<Table dataSource={data}>
                            <Column title="id" dataIndex="key" key="key" />
                            <Column title="Title" dataIndex="firstName" key="firstName" />
                            <Column
                                title="Action"
                                key="action"
                                render={(text, record) => (
                                    <span>
                                    <a href="javascript:;">修改 {record.key}</a>
                                    <Divider type="vertical" />
                                    <a href="javascript:;">删除</a>
                                    </span>
                                )}
                            />
                        </Table>
                })
            })
    }
    render() {
        return (
            <div className = "vb_body">
                <div className = "vb_content">
                    {this.state.list}
                </div>
            </div>
        );
    }
}
export default Vblog
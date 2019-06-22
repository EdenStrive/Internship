import React from 'react'
import "../../../static/css/admin.less"
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Input , Button } from 'antd';
import { pblog , getBlogtwo , cblog} from  '../../../request/request'
import { message } from 'antd';
import store from '@/store/index'


class Pblog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editorState: BraftEditor.createEditorState(null)
        }
    }
    componentDidMount () {
      scrollTo(0,0)//回到页面顶部
      let stores = store.getState().change
      if (stores !== null) {
          getBlogtwo(stores)
            .then(res=>{
               let title = res.data.value[0].title
               let content = res.data.value[0].content
               this.setState({value: title, editorState: BraftEditor.createEditorState(content)});
            })
      }
    }

    handleEditorChange = (editorState) => {
      this.setState({ editorState })
    }
    title(event){//title 的值为this.state.value
        this.setState({value: event.target.value});
    }
    sub(){
        let title = this.state.value
        let content = this.state.editorState.toHTML()
        let date=new Date;
        let year=date.getFullYear();
        let day = date.getDate() 
        let month=date.getMonth()+1;
        month =(month<10 ? "0"+month:month); 
        let mydate = (year.toString()+"-"+month.toString()+"-"+day.toString());
        if (store.getState().change == null) {
            pblog(title , content , mydate)
            .then(res=>{
                let flag = res.data
                if (flag == 0) {
                    message.success(res.data.value, 1);
                }
            })
        }else{
            cblog( store.getState().change , title, content)
                .then(res=>{
                    const action = {
                      type:"change_blog2",
                      admin:3,
                      value:null
                    }
                    store.dispatch(action)
                })
        }
    }
    render() {
        const { editorState } = this.state
        return (
            <div className = "pb_body">
                <div className = "pb_content">
                    <div><Input placeholder="请输入文章标题" value = {this.state.value} onChange = {this.title.bind(this)}/></div>
                    <div className="my-component">
                        <BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        />
                    </div>
                    <Button type="primary" onClick = {this.sub.bind(this)}>发布</Button>
                </div>
            </div>
        );
    }
}
export default Pblog
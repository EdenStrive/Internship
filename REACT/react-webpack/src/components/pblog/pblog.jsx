import React from 'react'
import "../../../static/css/admin.less"
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Input , Button } from 'antd';

class Pblog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editorState: null
        }
    }
    componentDidMount () {
      scrollTo(0,0)//回到页面顶部
      // 假设此处从服务端获取html格式的编辑器内容
    //   const htmlContent = await fetchEditorContent()
      // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    //   this.setState({
    //     editorState: BraftEditor.createEditorState(htmlContent)
    //   })
    }

    handleEditorChange = (editorState) => {
      this.setState({ editorState })
    }
    render() {
        const { editorState } = this.state
        return (
            <div className = "pb_body">
                <div className = "pb_content">
                    <div><Input placeholder="请输入文章标题" /></div>
                    <div className="my-component">
                        <BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        />
                    </div>
                    <Button type="primary">发布</Button>
                </div>
            </div>
        );
    }
}
export default Pblog
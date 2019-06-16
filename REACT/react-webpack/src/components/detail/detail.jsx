import React from 'react'
import styled from 'styled-components'
import '../../../static/css/detail.css'
import Footer from '../footer/footer'
import { Spin, Alert } from 'antd'; 
import { getBlogtwo } from '../../../request/request'
import 'braft-editor/dist/index.css'

const
Idiv_4 = styled.div`
    width:120%;
    height:200px;
    background: rgb(38,49,53);
    transform: rotate(-5deg);
    position: relative;
    top: 85px;
`


class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            det:{

            }
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
        let articleId = this.props.match.params.id
        getBlogtwo(articleId)
            .then(res=>{
                let blog = res.data.value[0]
                this.setState({
                   det:blog 
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render(){
        return(
            <div className = "d_body">
                <div className = "d_hidden">
                    <div className = "d_modul">
                        <div className = "d_content">
                        <div className = "d_blog">

                            {this.state.det.title ?  
                                <div>
                                    <div className = "d_border">
                                        <h1 className="d_title">{this.state.det.title}</h1>
                                        <p className = "d_time">time：{this.state.det.create_time}<span style={{cursor: "auto", fontSize: "16px", marginLeft: "26px"}}>
                                            作者：邢文鹏</span>
                                        </p>
                                    </div>
                                    <div className="d_contents" dangerouslySetInnerHTML={{__html:this.state.det.content}}></div>
                                </div>
                            :
                                <Spin tip="Loading..." size = "large">
                                    <Alert
                                    message="客官稍等~~~"
                                    description="博文加载呢，不要急喽"
                                    type="info"
                                    />
                                </Spin>
                            }
                            </div>


                            <Idiv_4></Idiv_4>
                            <Footer></Footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail
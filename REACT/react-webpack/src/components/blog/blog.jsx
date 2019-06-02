import React from 'react'
import Footer from '../footer/footer'
import styled from 'styled-components'
import { Pagination ,Spin, Alert } from 'antd'; //分页器
import { getTotal , getBlogone } from  '../../../request/request'
import '../../../static/css/blog.css'
import {withRouter} from "react-router-dom";
//--------------------css

const
Idiv_4 = styled.div`
    width:120%;
    height:200px;
    background: rgb(38,49,53);
    transform: rotate(-5deg);
    position: relative;
    top: 85px;
`,
Detail = styled.div`
    width: 1100px;
    height: 340px;
    left: 160px;
    position: relative;
    margin-top: 40px;
    background: rgb(232, 232, 232);
    border-radius: 10px;
    opacity: 0.9;
    &:hover{
        opacity:1
    }
`,
title = {
    fontSize:"30px",
    marginLeft:"40px",
    marginTop:"17px",
    display:"inline-block"
}
class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            totals:null,
            time_blogs:[]
        }
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
        //首先查询博文总数
        getTotal()
            .then((res)=>{
                let number = res.data.value[0]["count(*)"]
                let numbers = Math.floor(number/5)*5
                this.setState({
                    totals : numbers
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        //首次进入blog页面后进行查询前面5篇文章
        getBlogone(0,5)
            .then(res =>{
                let blog = res.data.value
                let arr = blog.map((va)=>{
                    return (
                        <Detail key = {va.id}>
                            <a style={title} onClick={this.detail.bind(this,va.id)}>{va.title}</a>
                            <p className="time">{va.create_time}</p>
                            <div className="content" dangerouslySetInnerHTML={{__html:va.content}}></div>
                        </Detail>   
                    )
                })
                this.setState({
                    time_blogs: arr
                })
            })
    }
    onChange(pageNumber){
        scrollTo(0,0)//回到页面顶部
        let number = pageNumber
        let start = 5*(number-1)
        let end = 5
        this.setState({
            time_blogs: []
        })
        getBlogone(start , end)
        .then(res =>{
            let blog = res.data.value
            let arr = blog.map((va)=>{
                return (
                    <Detail key = {va.id}>
                        <a style={title} onClick={this.detail.bind(this,va.id)}>{va.title}</a>
                        <p className="time">{va.create_time}</p>
                        <div className="content" dangerouslySetInnerHTML={{__html:va.content}}></div>
                    </Detail>   
                )
            })
            this.setState({
                time_blogs: arr
            })
        })

    }
    detail(id){
        let ids = id
        this.props.history.push("/detail/"+ids);
    }
    render(){
        return(
            <div className="blog">
                <div className = "hidden">
                    <div className="mids">
                        <div className = "body">
                            <div className = "blogs">
                                {this.state.time_blogs.length == 0 ?
                                    <Spin tip="Loading..." size = "large">
                                        <Alert
                                        message="客官稍等~~~"
                                        description="博文加载呢，不要急喽"
                                        type="info"
                                        />
                                    </Spin>: this.state.time_blogs                           
                                }
                            </div>
                            <div className = "fenye">
                                <Pagination showQuickJumper defaultPageSize={5} defaultCurrent={1} total={this.state.totals} onChange={this.onChange} />                           
                            </div>
                            <div className = "footer">
                                <Idiv_4></Idiv_4>
                                <Footer></Footer>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}
export default withRouter(Blog)
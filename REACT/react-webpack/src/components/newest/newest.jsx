import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd';
import { getNarticle } from  '../../../request/request'
import "../../../static/css/newest.css"


class Newest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            article:[]
        } 
    }

    componentDidMount(){
        getNarticle()
            .then((res)=>{
                let nartic = res.data.value
                let narr = []
                nartic.forEach((arc,id) => {
                    let child = (<div className="div_2" key={arc.id}>
                                    <img src={this.imgsrc(id)} alt="" style={{width:"95%",borderRadius:"10px",height:"305.89px"}} />
                                    <h2><u>{arc.title}</u></h2><br/>
                                    <span>{arc.create_time}</span>
                                    <div className="Ineirong" dangerouslySetInnerHTML={{__html:arc.content}} ></div>
                                </div>)
                    narr.push(child)
                });
                this.setState({
                    article: narr
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }
    imgsrc(id){ //当自定义的原型方法以
        let x = "./../../static/img/article_"+id+".jpg"
        return x
    }
    render(){
        //-------------------------------csss
        const Div = styled.div`
            z-index:95;
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            position: relative;
            top:${this.props.top} 
        `
        return(
            <Div>
                <p style={{textAlign:"center",fontSize:"40px"}}>Newest article{this.state.a}</p>
                <p style={{fontSize:"20px",opacity:"0.8",width:"40%",textIndent:"2rem"}}>
                    每个月会不定期的进行分享一个月以来的学习心得体会，点击导航栏Blog可以查看全部哦。有任何问题都可在后台进行留言QaQ。电子邮箱：1059951183@qq.com。
                </p>
                <div className="big_div">
                    {this.state.article.length == 0? <div className="loadings"><Spin size="large" /></div>: this.state.article} 
                </div> 
            </Div>
        )
    }
}
export default Newest
import React from 'react'
import Newest from '../newest/newest' //最新博文组件
import Footer from '../footer/footer'
import styled from 'styled-components'
import { Button , Icon , message } from "antd";
import { Link } from "react-router-dom"
import { getIntroduce , getLike , getLnumber , inserLike } from  '../../../request/request'
import "antd/dist/antd.css";
import "../../../static/css/index.css"
//--------------------css
const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
);

const
Img = styled.img`
    width:100%;
    position: absolute;
    z-index:-1;
    top:-110px;
`,
Idiv= styled.div`
    width: 750px;
    height: 300px;
    color:rgb(255,255,255);
    position:relative;
    top:290px;
    text-align:center;
    font-size:45px;
    display:flex;
    flex-direction:column;
    align-items: center
`,
Span = styled.span`
    font-size:25px;
    opacity: 0.6;
`,
index_button = {
    width:' 174px',
    height: '50px',
    fontSize:"20px",
    marginTop:"20px"
},
index_p = {
    margin:"0px"
},
blue = {
    display:"inline-block",
    borderBottom:"2px solid rgb(142, 139, 243)"
},
over = {
    overflow: "hidden",
    minHeight:"2964px",
    minWidth:"1400px",
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    position:"relative"
},
Idiv_2 = styled.div`
    position: relative;
    display:block;
    width:80%;
    background: rgb(255,255,255);
    height: 250px;
    top:63px;
    border-radius:10px;
    min-width:1190px;
`,
ISpan =styled.div`
    display: inline-block;
    position:relative;
    width: 80%;
    margin-left: 40px;
    top: 16px;
    font-size: 30px;
`,
icons={
    display:"bloc",
    fontSize:"40px",
    position:"relative",
    left:"30px",
    top:"20px"
},
contents = {
    top: "-23px",
    left:"38px"
},
Idiv_4 = styled.div`
    width:120%;
    height:200px;
    background: rgb(38,49,53);
    transform: rotate(-5deg);
    position: relative;
    top: 385px;
`




class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            introduce:{},
            like:  <Icon type="heart" style={{cursor:"pointer"}} theme="twoTone" twoToneColor="#eb2f96" onClick={this.subLick.bind(this)}/>,
            likeI : "点个赞吧~",
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
        //查询博文介绍 使用sessionStorage进行缓存优化，因为这个不常动的内容
        getIntroduce() 
            .then((res) =>{
                if (sessionStorage.getItem("intro")) {
                    this.setState({
                        introduce: JSON.parse(sessionStorage.getItem("intro"))
                    })
                }else{
                    let values = res.data.value[0]
                    this.setState({
                        introduce: values
                    })
                    sessionStorage.setItem("intro",JSON.stringify(values))
                }
            })
            .catch((err)=>{
                console.log("err:"+err)
            })
        //查询小心心
        let Ip = returnCitySN['cip']
        getLike(Ip)
            .then((res)=>{
                if (res.data.isLike > 0) {
                    this.setState({
                        like: <Icon component={HeartSvg} style={{color: 'hotpink'}} theme="twoTone" twoToneColor="#eb2f96" banner="true"/>,
                        likeI : "点赞万岁~"
                    })
                }
            })
            .catch((err)=>{
                console.log("err:"+ err)
            })
        //查询心的数量
        getLnumber()
            .then((res)=>{
                this.setState({
                    namber: res.data.namber
                }) 
            }).catch(err=>{
                console.log(err)
            })
    }
    subLick(){
        //returnCitySN方法为获取用户的ip以及ip所在地
        inserLike(returnCitySN['cip'],returnCitySN['cname'])
            .then(res =>{
                let thanks = res.data.data
                this.setState({
                    message:message.success(thanks, 6)
                })
                this.componentDidMount() //点赞结束后，数据库中新增内容，同时初始化接口进行异步请求改变state从而从新render
            })
    }
    render(){
        return(
            <div style={over}>
                    <Img src="../../static/img/bg_index.jpg" alt=""/>  {/* 页面背景图片 */}
                    <Idiv>{/*第一部分*/}
                        <p style={index_p}>Welcome To My Personal Blog</p>
                        <Span>Leave me more <div style={blue}>messages~</div></Span>
                        <Link to="/blog"><Button type="primary" style={index_button}>Entry</Button></Link>
                    </Idiv>
                    <div className="div_1"></div>
                    <div className="bowen">
                        <Idiv_2>
                            <Icon type="smile" theme="twoTone" style={icons}/>                            
                            <ISpan style={{color: "#9191de"}}>{this.state.introduce.title}</ISpan><br/>
                            <ISpan style={contents}>{this.state.introduce.content ? this.state.introduce.content : "内容稍后出现哦！"}</ISpan>  
                            <div style={{position: "relative", top:"0px",fontSize:" 23px",left: "84%"}}>
                                <div style={{display:"inline-block"}}>
                                {this.state.likeI}&nbsp;&nbsp;&nbsp;
                                </div>

                                {this.state.like==null ? "网络出问题啦!": this.state.like} &nbsp;&nbsp;

                                <span style={{fontSize:"14px",color:"red"}}>
                                    {this.state.namber}
                                </span>
                            </div>
                        </Idiv_2>    
                    </div>    
                    <div className = "Idiv_3"></div>
                    <Newest top = {"250px"}></Newest> {/*获取最新博文的组件。分离开，蹂杂在一起维护后期困难，传入子组件150px参数。表示相对定位的高度为150px*/}
                    <Idiv_4></Idiv_4>
                    <Footer top = {"269px"}></Footer>
            </div>
        )
    }
}
export default Index
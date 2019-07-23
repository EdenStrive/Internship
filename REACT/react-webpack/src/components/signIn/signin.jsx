import React from 'react'
import styled from 'styled-components'
import '../../../static/css/signin.css'
import { signin } from  '../../../request/request'
import Footer from '../footer/footer'
import { Form, Icon, Input, Button, Checkbox , message } from 'antd';
import { setCookie } from '@/cookie/jsCookie'
import store from '@/store/index'
import { withRouter } from "react-router-dom";

const
Idiv_4 = styled.div`
    width:120%;
    height:200px;
    background: rgb(38,49,53);
    transform: rotate(-5deg);
    position: relative;
    top: 85px;
`


class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            button: <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
    }
    seven(){
        this.props.history.push("/signup");
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    button: <Button type="primary" htmlType="submit" className="login-form-button" disabled>Log in</Button>
                })
                signin(values.username,values.password)
                    .then(res=>{
                        let code = res.data.code
                        let value = res.data.value
                        if (code == 0) {
                            message.success('登陆成功啦！', 2.5);
                            if (values.remember == true) {
                                setCookie(value[0].name , value[0].role , 7)
                            }else{
                                setCookie(value[0].name , value[0].role )
                            }
                            const action = {
                                type:"change_welcome",
                                value:true
                            }
                            store.dispatch(action)
                            setTimeout(() => {
                                this.props.history.push("/admin");
                            }, 2500);
                        }else{
                            message.error('请检查登陆的账号密码是否正确！');
                            setTimeout(() => {
                                this.setState({
                                    button: <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                                })
                            }, 3000);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }

        });
    }
    componentWillUnmount(){
        this.setState = (state, callback) =>{
            return;
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className = "si_body">
                <div className = "si_hidden">
                    <div className = "si_modul">
                        <div className = "si_content">
                            <div className = "sign_in">
                                <div className = "login_in">
                                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                                        <Icon type="idcard" style={{ fontSize: "43px",color: "rgb(112, 122, 255)",marginBottom: "15px" }}/>
                                        <Form.Item>
                                        {getFieldDecorator('username', {
                                            rules: [                                                    
                                                        { 
                                                            required: true,
                                                            message: 'Please input your Username!' 
                                                        },
                                                        {
                                                            min:4,
                                                            message: '用户名不能少于4个字符',
                                                        }, 
                                                        {
                                                            max:10,
                                                            message: '用户名不能大于10个字符',
                                                        }
                                                    ],
                                        })(
                                            <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                            />,
                                        )}
                                        </Form.Item>
                                        <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                        { 
                                                            required: true,
                                                            message: 'Please input your Password!' 
                                                        },
                                                        {
                                                            min:6,
                                                            message: '密码不能少于6个字符',
                                                        }, 
                                                        {
                                                            max:10,
                                                            message: '密码不能大于10个字符',
                                                        }
                                                    ],
                                        })(
                                            <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Password"
                                            />,
                                        )}
                                        </Form.Item>
                                        <Form.Item>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(<Checkbox>Remember me</Checkbox>)}<br/>
                                            {this.state.button}
                                            &nbsp;&nbsp;&nbsp;&nbsp;Or <a href="javascript:void(0)" onClick = {this.seven.bind(this)}>register now!</a>
                                        </Form.Item>
                                    </Form>
                                </div>
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
const LoginForm = Form.create({ name: 'normal_login' })(Signin);
export default withRouter(LoginForm)
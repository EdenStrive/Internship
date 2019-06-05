import React from 'react'
import styled from 'styled-components'
import '../../../static/css/signin.css'
import { signin } from  '../../../request/request'
import Footer from '../footer/footer'
import { Form, Icon, Input, Button, Checkbox , message } from 'antd';
import Cookies from 'js-cookie'

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
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                this.setState({
                    button: <Button type="primary" htmlType="submit" className="login-form-button" disabled>Log in</Button>
                })
                signin(values.username,values.password)
                    .then(res=>{
                        let code = res.data.code
                        let value = res.data.value
                        console.log(value)
                        if (code == 0) {
                            message.success('登陆成功啦！如需留言点击导航中的进入后台哦', 3);
                            if (values.remember == true) {
                                console.log(1)
                                Cookies.set("edenName", value[0].name , { expires: 7 })
                                Cookies.set("edenRole", value[0].role , { expires: 7 })
                            }else{
                                console.log(2)
                                setCookie("edenName", value[0].name)
                                Cookies.set("edenRole", value[0].role)
                            }
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
                                            &nbsp;&nbsp;&nbsp;&nbsp;Or <a href="">register now!</a>
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
export default LoginForm
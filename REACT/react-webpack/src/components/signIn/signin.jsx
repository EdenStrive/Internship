import React from 'react'
import styled from 'styled-components'
import '../../../static/css/signin.css'
import Footer from '../footer/footer'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

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
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values,this.initialValue,{/*是否选中remenber me*/});
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
                                                            message: 'Please input your Password!' 
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
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;Or <a href="">register now!</a>
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
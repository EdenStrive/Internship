import React from 'react'
import styled from 'styled-components'
import '../../../static/css/signup.css'
import Footer from '../footer/footer'
import { withRouter } from "react-router-dom";
import { Form, Input, Tooltip, Icon , Button ,message } from 'antd';
import { signup } from '../../../request/request'

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
};

const
Idiv_4 = styled.div`
    width:120%;
    height:200px;
    background: rgb(38,49,53);
    transform: rotate(-5deg);
    position: relative;
    top: 85px;
`

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            button:<Form.Item {...tailFormItemLayout}><Button type="primary" htmlType="submit">Register</Button></Form.Item>
        }
    }
    componentDidMount(){ //render后初始化部分请求
        scrollTo(0,0)//回到页面顶部
    }
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          signup(values.username,values.password,values.nickname)
            .then(res=>{
                if (res.data.code == 1) {
                    message.success('注册成功，跳转至登陆页面', 2);
                    setTimeout(() => {
                        this.props.history.push("/signin");
                    }, 2000);
                }else{
                    message.error('登陆出错啦~');
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
      });
    };

    handleConfirmBlur = e => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };


        return(
            <div className="up_body">
                <div className="up_hidden">
                    <div className="up_moduel">
                        <div className="up_content">
                            <div className="up_up">
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="Login account">
                                    {getFieldDecorator('username', {
                                            rules: [                                                    
                                                        { 
                                                            required: true,
                                                            message: 'Please input your Username!' 
                                                        },
                                                        {
                                                            min:4,
                                                            message: '登陆账号不能少于4个字符',
                                                        }, 
                                                        {
                                                            max:10,
                                                            message: '登陆账号不能大于10个字符',
                                                        }
                                                    ],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="Password" hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                        {
                                            min:4,
                                            message: '密码不能少于4个字符',
                                        }, 
                                        {
                                            max:10,
                                            message: '密码不能大于10个字符',
                                        },
                                        {
                                            validator: this.validateToNextPassword,
                                        },
                                        ],
                                    })(<Input.Password />)}
                                    </Form.Item>
                                    <Form.Item label="Confirm Password" hasFeedback>
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                        ],
                                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                                    </Form.Item>
                                    <Form.Item
                                    label={
                                        <span>
                                        Nickname&nbsp;
                                        <Tooltip title="What do you want others to call you?">
                                            <Icon type="question-circle-o" />
                                        </Tooltip>
                                        </span>
                                    }
                                    >
                                    {getFieldDecorator('nickname', {
                                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                                    })(<Input />)}
                                </Form.Item>
                                    {this.state.button}
                                </Form>
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
const Signups = Form.create({ name: 'register' })(Signup);
export default withRouter(Signups)
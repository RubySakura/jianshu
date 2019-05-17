import React, { Component } from "react";
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" />
                    <Input placeholder="密码" />
                    <Button>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
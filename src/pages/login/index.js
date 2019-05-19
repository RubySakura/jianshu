import React, { Component } from "react";
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import * as actionCreators from './store/actionCreators';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameVal: "",
            passwordVal: ""
        }
    }
    render() {
        if(!this.props.loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" onChange={this.handleUsernameChange.bind(this)} value={this.state.usernameVal} />
                        <Input placeholder="密码" onChange={this.handlePasswordChange.bind(this)} value={this.state.passwordVal} type="password" />
                        <Button onClick={() => this.props.login(this.state.usernameVal, this.state.passwordVal)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/" />
        }
        
    }

    handleUsernameChange(e) {
        this.setState({
            usernameVal: e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            passwordVal: e.target.value
        })
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.getIn(["login", "login"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(username, password) {
            console.log(username, password);
            dispatch(actionCreators.login(username, password))
        }
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
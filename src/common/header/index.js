import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators }  from './store/';
 
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe609;</i>
                    <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <ul>
                            <SearchInfoItem>小程序</SearchInfoItem>
                            <SearchInfoItem>vue</SearchInfoItem>
                            <SearchInfoItem>区块链</SearchInfoItem>
                            <SearchInfoItem>毕业</SearchInfoItem>
                            <SearchInfoItem>PHP</SearchInfoItem>
                            <SearchInfoItem>故事</SearchInfoItem>
                            <SearchInfoItem>flutter</SearchInfoItem>
                            <SearchInfoItem>理财</SearchInfoItem>
                            <SearchInfoItem>美食</SearchInfoItem>
                            <SearchInfoItem>投稿</SearchInfoItem>
                        </ul>
                    </SearchInfo>
                </SearchWrapper>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writing"><i className="iconfont">&#xe615;</i> 写文章</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
        )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
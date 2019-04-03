import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators }  from './store/';

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props;
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
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''} onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe609;</i>
                        {this.getSearchListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className="writing"><i className="iconfont">&#xe615;</i> 写文章</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

    getSearchListArea() {
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const pageList = [];
        if(list.size) {
            for (let i = page * 10; i <(page + 1) * 10; i++) {
                const item = list.get(i);
                if(item !== undefined) {
                    pageList.push(list.get(i));
                }
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage)}}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList.map(function(item) {
                            return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                        })}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getSearchList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage) {
            if(page < totalPage - 1) {
                page += 1;
            } else {
                page = 0;
            }
            dispatch(actionCreators.changePage(page));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
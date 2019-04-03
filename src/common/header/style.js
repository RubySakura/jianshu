import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.nav`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background-color: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20px;
    padding-right: 35px;
    color: #777;
    box-sizing: border-box;
    background-color: #eee;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 19px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: width .2s ease;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        width: 240px;
        transition: width .2s ease;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 56px;
    width: 240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding: 0 20px;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
`;

export const SearchInfoList = styled.ul`
    overflow: hidden;
    margin-bottom: 10px;
`;

export const SearchInfoItem = styled.li`
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    color: #969696;
    border: 1px solid #ddd;
    border-radius: 2px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: left;
    line-height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background-color: #ec6149;
    }
`;
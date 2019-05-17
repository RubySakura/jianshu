import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" className="banner-img" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScroll.bind(this)}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScroll() {
        window.scrollTo(0, 0);
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreator.getHomeData());
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop > 100) {
                dispatch(actionCreator.toogleTopShow(true));
            } else {
                dispatch(actionCreator.toogleTopShow(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
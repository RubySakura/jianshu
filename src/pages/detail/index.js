import React, { Component } from "react";
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreator';

class Detail extends Component {
    render() {
        console.log(this.props);
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id))
        }
    }
}

Detail = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default Detail;
import React, { PureComponent } from "react";
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item) => {
                        return (
                            <Link to={"/detail/" + item.get('id')} key={item.get('id')}>
                                <ListItem>
                                    <img src={item.get('imgURL')} alt="" className="pic" />
                                    <ListInfo>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                            
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
}

export default connect(mapStateToProps, null)(List);
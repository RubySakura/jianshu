// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    showScroll: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            });
        case 'toogle_top_show':
            return state.set('showScroll', action.show);
        default:
            return state; 
    }
}
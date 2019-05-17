import Axios from "axios";

const changeHomeData = (topicList, articleList) => ({
    type: 'change_home_data',
    topicList: topicList,
    articleList: articleList
});

export const getHomeData = () => {
    return (dispatch) => {
        Axios.get("/api/home.json").then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result.topicList, result.articleList);
            dispatch(action);
        });
    }
};

export const toogleTopShow = (show) => ({
    type: 'toogle_top_show',
    show
})
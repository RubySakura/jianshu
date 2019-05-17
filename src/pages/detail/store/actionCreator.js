import Axios from "axios";

const changeDetail = (title, content) => ({
    type: 'change_detail',
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get('/api/getDetail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content))
        })
    }
}
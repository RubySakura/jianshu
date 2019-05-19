import Axios from "axios";

const changeLogin = (value) => ({
    type: "change_login",
    value
})

export const login = (username, password) => {
    return (dispatch) => {
        Axios.get('/api/login.json?username=' + username + '&password=' + password).then((res) => {
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin(result));
            }else {
                alert("登陆失败");
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogin(false))
    }
}
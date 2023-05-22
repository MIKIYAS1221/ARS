import axios from "axios";

export const login = async (email, password) => {
    return axios.post("/users/login", { email, password }).then((response) => {
        return response.data;
    });
};

export const register = async (data) => {
    return axios.post("/users/signup", data).then((response) => {
        return response.data.data;
    });
};
export const forgotPassword = async (email) => {
    return axios.post("/users/forgotpassword", { email }).then((response) => {
        return response.data;
    });
}
export const resetPassword = async (password, confirmPassword, token) => {
    return axios.put(`/users/resetpassword/${token}`, { password, confirmPassword }).then((response) => {
        return response.data;
    });
}
export const verifyEmail = async (token) => {
    return axios.get(`/users/verify-email/${token}`).then((response) => {
        return response.data;
    });
}
export const addVisitor = async (visitor) => {
    return axios.post(`/users/addVisitor`, visitor).then((response) => {
        return response.data;
    });
}


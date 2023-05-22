import axios from "axios";

export const AllVisitor = async () => {
    return axios.get(`/guard/allVisitors`).then((response) => {
        return response.data;
    });
    }


export const acceptVisitor = async (id) => {
    return axios.put(`/guard/acceptVisitor/${id}`).then((response) => {
        return response.data;
    });
}

export const rejectVisitor = async (id) => {
    return axios.put(`/guard/rejectVisitor/${id}`).then((response) => {
        return response.data;
    });
}

export const allAcceptedVisitors = async () => {
    return axios.get(`/guard/allAcceptedVisitors`).then((response) => {
        return response.data;
    });
}

export const allRejectedVisitors = async () => {
    return axios.get(`/guard/allRejectedVisitors`).then((response) => {
        return response.data;
    });
}

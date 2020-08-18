import axios from "axios";

export const withToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    return { Authorization: "Bearer" + token };
};

export const api = axios.create({
    baseURL: "http://localhost:8080/v1",
});

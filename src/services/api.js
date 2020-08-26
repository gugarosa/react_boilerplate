import axios from "axios";

// Axios
export const api = axios.create({
    baseURL: "http://localhost:8080/v1",
});

// Additional functions
export const withToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    return { Authorization: "Bearer" + token };
};

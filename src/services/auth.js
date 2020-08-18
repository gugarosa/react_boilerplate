import { api } from "./api";

export const login = async (data) => {
    try {
        const res = await api.post("/login", data);

        return res.data;
    } catch (err) {
        return err;
    }
};

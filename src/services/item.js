import { api, withToken } from "./api";

export const find = async (id) => {
    try {
        const res = await api.get("/item/" + id, { headers: withToken() });

        return res.data;
    } catch (err) {
        return err;
    }
};

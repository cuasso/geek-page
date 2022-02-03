import { instance } from "./instance";

export const login = async (data) => {
    const url = `api/users/login`
    return await instance.post(url, data)
}
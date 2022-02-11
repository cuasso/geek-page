import { instance } from "./instances"

export const getPosts = async () => {
    const url = `api/posts`
    return await instance.get(url)
}
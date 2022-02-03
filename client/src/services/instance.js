import axios from 'axios'
import { URL_BASE } from '../configs'

export const instance = axios.create({
    baseURL: URL_BASE
})

instance.interceptors.response.use(
    (respose) => { return respose.data },
    (error) => {
        let response = error.response.data
        if (response.errors) {
            const invalidParam = response.errors[0].param
            response = `Invalid field ${invalidParam}.`
        }

        return Promise.reject(response)
    }
)
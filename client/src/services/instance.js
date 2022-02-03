import axios from 'axios'
import { URL_BASE } from '../configs'

export const instance = axios.create({
    baseURL: URL_BASE
})

instance.interceptors.response.use((respose) => {    
    return respose.data
})
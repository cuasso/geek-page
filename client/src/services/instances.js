import axios from 'axios'
import { URL_BASE } from '../configs'
import { getToken, deleteToken } from '../helpers/user-helper'

export const instance = axios.create({
    baseURL: URL_BASE
})

const successInterceptor = respose => { return respose.data }
const errorInterceptor = (error) => {

    let errorMessage = ''
    try {
        const { request: { status = 0 }, } = error
        if (status === 401) {
            deleteToken()
            return Promise.reject(error)
        }


        let response = error.response.data
        if (response.errors) {
            const invalidParam = response.errors[0].param
            errorMessage = `Invalid field ${invalidParam}.`
        }
    } catch (err) {
        errorMessage = 'There was an unexpected error, try later.'
    }

    return Promise.reject(errorMessage)
}

const onAuthInterceptor = (config) => {
    const token = getToken()
    config.headers = {
        Authorization: token ? `Bearer ${token}` : ''
    }
    return config
}

instance.interceptors.request.use(onAuthInterceptor, err => err)
instance.interceptors.response.use(successInterceptor, errorInterceptor)
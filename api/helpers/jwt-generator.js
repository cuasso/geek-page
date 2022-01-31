import jwt from 'jsonwebtoken'
import { SECRETET_KEY } from '../configurations'

export const generateToken = (id = '') => {
    return new Promise((resolver, reject) => {
        const payload = { id }
        const secretKey = SECRETET_KEY
        const options = { expiresIn: '4h' }

        jwt.sign(payload, secretKey, options, (err, token) => {
            if (err) {
                reject('cant create the token')
            } else {
                resolver(token)
            }
        })
    })
}
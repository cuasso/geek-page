import jwt from "jsonwebtoken"
import User from '../models/user'
import { SECRETET_KEY } from "../configurations"

export const validateJwt = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].replace('Bearer ', '')
        const { id } = jwt.verify(token, SECRETET_KEY)
        const user = await User.findById(id)

        if (!user) return res.status(401).send('Invalid user')

        req.user = user

        next()
    } catch (err) {
        console.error(err)
        return res.status(401).send('Invalid token')
    }
}
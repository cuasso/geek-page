import bcryptjs from 'bcryptjs'
import User from '../models/user'
import { generateToken } from '../helpers/jwt-generator'

export const create = async (req, res) => {
    const {
        name,
        username,
        mail,
        password } = req.body

    const existMail = await User.findOne({ mail: mail })
    if (existMail) {
        return res.status(400).send('A user with that mail already exist.')
    }

    const encryptedPass = await bcryptjs.hash(password, 10)

    const user = new User({
        name,
        username,
        mail,
        password: encryptedPass
    })

    await user.save()

    return res.status(200).json(user)
}

export const login = async (req, res) => {
    const { mail, password } = req.body
    const user = await User.findOne({ mail: mail })
    const validUser = user && bcryptjs.compareSync(password, user.password)

    if (!validUser) {
        return res.status(400).send('Invalid mail or password.')
    }

    const token = await generateToken(user._id)
    return res.status(200).json({ token, user })
}
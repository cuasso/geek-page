import mongoose from 'mongoose'
import { MONGODB_URL } from '../configurations'

export const connect = async () => {
    if (!MONGODB_URL) {
        throw new Error('MONGO_URL not set in env')
    }

    try {
        await mongoose.connect(MONGODB_URL)
        console.log('connect to database successfully')
    } catch (err) {
        console.error(err)
        throw new Error('There was an error trying to connecto to database')
    }
}
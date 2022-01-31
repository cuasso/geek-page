import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    username: {
        type: String,
        required: [true, 'The username is required']
    },
    mail: {
        type: String,
        required: [true, 'The mail is required']
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },
    profilePicture: {
        type: String,
        default: ''
    }
})

UserSchema.methods.toJSON = function () {

    const {
        name,
        username,
        mail,
        password,
        profilePicture,
        _id
    } = this.toObject()

    return {
        name,
        username,
        mail,
        password,
        profilePicture,
        id: _id
    }
}

export default model('User', UserSchema)
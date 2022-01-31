import { model, Schema } from 'mongoose'

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    body: {
        type: String,
        required: [true, 'body is required']
    },
    picture: {
        type: String,
        required: [true, 'picture is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


PostSchema.methods.toJSON = function () {
    const {
        title,
        body,
        picture,
        user,
        _id
    } = this.toObject()

    return {
        title,
        body,
        picture,
        userId: user._id,
        id: _id
    }
}

export default model('Post', PostSchema)
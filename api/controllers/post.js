import Post from '../models/posts'

export const getAllPost = async (req, res) => {

    const userId = req.user._id
    const post = await Post.find({ user: userId })
    return res.status(200).json({ post })
}

export const create = async (req, res) => {
    const { title, body, picture } = req.body
    const user = req.user._id

    const post = new Post({ title, body, picture, user })
    await post.save()

    return res.status(200).json(post)
}

export const remove = (req, res) => {
    return res.status(200)
}

export const update = (req, res) => {
    return res.status(200)
}
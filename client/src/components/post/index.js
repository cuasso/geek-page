import PropTypes from "prop-types"
import { PostContainer, Img } from "./style"

const Post = props => {
    const { title, body, picture } = props

    return (
        <PostContainer>
            <h1>{title}</h1>
            <Img src={picture} alt={title} />
            <p>{body}</p>
        </PostContainer>
    )
}

Post.prototype = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

export default Post
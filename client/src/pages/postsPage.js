import { useEffect, useState } from "react"
import to from 'await-catch';
import Post from "../components/post"
import { getPosts } from '../services/postsService'
import styled from "styled-components";

const post =
{
    title: 'cosa',
    picture: 'https://ep01.epimg.net/verne/imagenes/2016/08/23/articulo/1471965781_732292_1471970999_noticia_normal.jpg',
    body: 'body de la cosa que nunca sabremos si funciona o no'
}


const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const [err, { post }] = await to(getPosts())
            setPosts(post)
        }

        fetchPosts()
    }, [])

    console.log(posts)

    return (
        <PostsContainer>
            {posts.map((post, index) => <Post {...post} key={index + post.title} />)}
        </PostsContainer>
    )
}

const PostsContainer = styled.div`
    & > * {
        margin: 2rem  auto; 
    }
`

export default PostsPage
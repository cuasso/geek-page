import Post from "../components/post"

const post =
{
    title: 'cosa',
    picture: 'https://ep01.epimg.net/verne/imagenes/2016/08/23/articulo/1471965781_732292_1471970999_noticia_normal.jpg',
    body: 'body de la cosa que nunca sabremos si funciona o no'
}


const PostsPage = () => {
    return <Post {...post} />
}

export default PostsPage
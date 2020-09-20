import BlogPost from '../../components/pages/BlogPost'
import { getBlogPostBySlug, getAllBlogPostsWithSlug } from '../../api/api'

const Post = ({ post }) => {
    return (
        <BlogPost {...post.fields} />
    );
}

export async function getStaticProps(params) {
    const post = await getBlogPostBySlug(params.slug)
    return {
        props: {
            post,
        },
    }
}

export async function getStaticPaths() {
    const posts = await getAllBlogPostsWithSlug()
    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: true,
    }
}

export default Post
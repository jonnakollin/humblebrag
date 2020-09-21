import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import BlogPost from '../../components/pages/BlogPost'
import { getBlogPostBySlug, getAllBlogPostsWithSlug } from '../../api/api'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllBlogPostsWithSlug()
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const postBySlug = await getBlogPostBySlug(params?.slug)
    return { props: { post: postBySlug } }
}

const Post = ({ post }: any) => <BlogPost {...post.fields} />

export default Post
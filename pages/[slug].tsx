import { GetStaticProps, GetStaticPaths } from 'next'
import StyledPage from '../components/pages/Page'
import { getPageBySlug, getAllPagesWithSlug } from '../api/api'
import { Page as PageType } from '../types';

interface PageProps {
    page: PageType
}

const Page = ({ page }: PageProps) => {
    return <StyledPage {...page} />
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const page = await getPageBySlug(params.slug)
    return {
        props: {
            page,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getAllPagesWithSlug()
    return {
        paths: pages.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: true,
    }
}

export default Page
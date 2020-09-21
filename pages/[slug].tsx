import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import PageComponent from '../components/pages/Page'
import { getPageBySlug, getAllPagesWithSlug } from '../api/api'
import { Page as PageType } from '../types'

interface PageProps {
    page: PageType
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getAllPagesWithSlug()
    const paths = pages.map((page) => ({
        params: { slug: page.slug },
    }))
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const page = await getPageBySlug(params?.slug)
    return {
        props: {
            page,
        },
    }
}

const Page = ({ page }: PageProps) => <PageComponent {...page} />

export default Page
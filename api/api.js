import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getAllPosts = async () => {
    const entries = await client.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
    })
    return entries.items
}

export const getBlogPostBySlug = async (slug) => {
    const entries = await client.getEntries({
        content_type: "blogPost",
        'fields.slug[in]': slug,
    })
    return entries.items[0]
}

export const getPageBySlug = async (slug) => {
    const entries = await client.getEntries({
        content_type: "page",
        "fields.slug": slug
    })
    return parsePageResponse(entries.items[0])
}

export const getAllPagesWithSlug = async () => {
    const entries = await client.getEntries({
        content_type: 'page',
        select: 'fields.slug',
    })
    return entries?.items?.map((post) => post.fields)
}

export const getAllBlogPostsWithSlug = async () => {
    const entries = await client.getEntries({
        content_type: 'blogPost',
        select: 'fields.slug',
    })
    return entries?.items?.map((post) => post.fields)
}

const parsePageResponse = ({ fields }) => {
    return {
        title: fields.title,
        slug: fields.slug,
        image: fields.image.fields.file.url,
        content: fields.content
    }
}

function parseBlogPostResponse({ fields }) {
    return {
        title: fields.title,
        slug: fields.slug,
        publishedDate: fields.publishedDate,
        category: fields.category,
        featuredImages: fields.featuredImages[0]?.fields.file.url,
        content: fields.content,
        images: fields.images?.fields.file.url
    }
}
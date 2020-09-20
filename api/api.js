import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getAllPosts = async () => {
    const entries = await client.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
    });
    return entries.items
}
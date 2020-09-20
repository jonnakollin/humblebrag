import React, { useState } from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import FsLightbox from 'fslightbox-react'
import PageLayout from '../layout/PageLayout'
import Hero from '../Hero'
import { BlogPost as BlogPostType, Asset } from '../../types'

const BlogContent = styled(Markdown)`
    margin: 0 auto 40px;
    padding: 0 10px;
    line-height: 1.7;
    font-weight: 300;

    @media ${({ theme }) => theme.device.medium} {
        width: 90%;
        padding: 0;
    }

    @media ${({ theme }) => theme.device.large} {
        width: 790px;
    }
`

const Images = styled.div`
    padding: 0 10px;

    @media ${({ theme }) => theme.device.medium} {
        padding: 0 40px;
        text-align: center;
        column-count: 2;
    }


    @media ${({ theme }) => theme.device.large} {
        padding: 0 40px;
        text-align: center;
        column-count: 3;
    }
`

const Image = styled.img`
    cursor: pointer;
`

const BlogPost = ({ title, featuredImages, publishedDate, category, content, images }: BlogPostType) => {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <Hero image={featuredImages[0].fields.file.url} title={title} date={publishedDate} category={category} />
            <PageLayout>
                {content && <BlogContent source={content} />}
                <Images>
                    {images?.map((image: Asset) => (
                        <Image src={image.fields.file.url} onClick={() => setToggler(!toggler)} />
                    ))}
                </Images>
            </PageLayout>
            <FsLightbox
                toggler={toggler}
                sources={
                    images?.map((image: Asset) => (
                        image?.fields?.file?.url
                    ))
                }
            />
        </>
    )
}

export default BlogPost;
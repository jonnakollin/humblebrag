import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import BlogInfo from './BlogInfo'

interface BlogTeaserProps {
    title: string;
    slug: string;
    publishedDate: string;
    category: string;
    featuredImages: any
}

const Container = styled.div`
    position: relative;
    cursor: pointer;
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${({ theme }) => theme.device.large} {
        margin-bottom: 0px;
    }

`

const Tape = styled.div`
        position: absolute;
        background-color: tan;
        opacity: 0.85;
        height: 25px;
        width: 75px;
        transform: translateX(-30%) translateY(10%) rotate(-45deg);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
        z-index: 2;

        @media ${({ theme }) => theme.device.large} {
            width: 80px;
        }
`

const TopTape = styled(Tape)`
        top: 0px;
        left: 0px;

        @media ${({ theme }) => theme.device.large} {
            top: -5px;
            left: -5px;
        }
`

const BottomTape = styled(Tape)`
        bottom: 15px;
        right: -40px;

        @media ${({ theme }) => theme.device.large} {
            bottom: 9px;
            right: -56px;
        }
`

const Image = styled.img`
    position: relative;
    z-index: 1;
`

const Middle = styled.div`
   position: absolute;
    top: 50px;
    left: 50px;
    bottom: 50px;
    right: 50px;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &:hover {
        opacity: 0.9;
    }
`

const Paper = styled.div`
    @media ${({ theme }) => theme.device.large} {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 40px;
        left: 40px;
        background-color: ${({ theme }) => theme.color.beige};
    }
`

const BlogTeaser = ({ title, slug, publishedDate, category, featuredImages }: BlogTeaserProps) => {
    return (
        <Link href={`blog/${slug}`}>
            <Container>
                <TopTape />
                <Image src={featuredImages[0]?.fields?.file.url} />
                <BottomTape />
                <Paper />
                <Middle>
                    <BlogInfo title={title} publishedDate={publishedDate} slug={slug} arrow />
                </Middle>
            </Container>
        </Link>
    )
}

export default BlogTeaser
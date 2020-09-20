import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import Hero from '../Hero'
import PageLayout from '../layout/PageLayout'
import { Page as PageType } from '../../types';

const StyledPage = styled.div`
  animation: ${({ theme }) => theme.animation.zoom} 0.5s;
`

const Content = styled(Markdown)`
    margin: 0 auto;
    padding: 0 10px;
    line-height: 1.7;
    font-weight: 300;

    @media ${({ theme }) => theme.device.medium} {
        width: 90%;
        padding: 0;
    }

    @media ${({ theme }) => theme.device.large}  {
        width: 790px;
    }
`


const Page = ({ title, image, content }: PageType) => {
    return (
        <StyledPage>
            <Hero image={image} title={title}></Hero>
            <PageLayout>
                {content && <Content source={content} />}
            </PageLayout>
        </StyledPage>
    )
}

export default Page;
import React from 'react'
import styled from 'styled-components'
import BlogTeaser from '../BlogTeaser'
import PageContainer from '../layout/PageLayout'

interface HomePageProps {
    posts: any;
}

const StyledPageContainer = styled(PageContainer)`
    padding: 20px 10px;

    @media ${({ theme }) => theme.device.large} {
        display: grid;
        grid-template-columns: 40% 40%;
        align-items: center;
        justify-content: center;
        grid-gap: 150px;
        padding: 0;
        margin-bottom: 60px;
    }

`

const HomePage = ({ posts }: HomePageProps) => {
    return (
        <StyledPageContainer>
            {posts?.map((post, index) => (
                <BlogTeaser key={index} {...post.fields} />
            ))}
        </StyledPageContainer>
    )
}

export default HomePage
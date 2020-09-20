import React from 'react'
import styled from 'styled-components'
import BlogInfo from './BlogInfo'

interface HeroProps {
    image: string;
    title: string;
    date?: string;
    category?: string;
}

type Hero = {
    image: string;
}

const StyledHero = styled.div<Hero>`
    background-image: url(${props => props.image || 'black'});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: -webkit-optimize-contrast;
    position: relative;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.device.large} {
        height: 75vh;
        background-attachment: fixed;
    }
`

const StyledBlogInfo = styled(BlogInfo)`
    position: absolute;
    margin: 0 auto -15px auto;
    bottom: 0;
    width: 95%;

    @media ${({ theme }) => theme.device.medium} {
        max-width: 590px;
    }

    @media ${({ theme }) => theme.device.large} {
        width: 590px;
    }
`

const Hero = ({ image, title, date, category }: HeroProps) => {
    return (
        <StyledHero image={image}>
            <StyledBlogInfo title={title} publishedDate={date} category={category} headline />
        </StyledHero>
    )
}

export default Hero
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import links from '../../helper/links'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const Header = styled.div`
    height: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${({ theme }) => theme.device.large} {
        padding: 60px 40px;
    }
`

const StyledDesktopNavigation = styled(DesktopNavigation)`
    display: none;
    @media ${({ theme }) => theme.device.large} {
        display: block;
    }
`;

const StyledMobileNavigation = styled(MobileNavigation)`
    display: block;
    @media ${({ theme }) => theme.device.large} {
        display: none;
    }
`;

const Title = styled.h1`
    font-family: 'Questrial', sans-serif;
    font-size: 40px;
    letter-spacing: 2px;
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    transition: all .5s ease;

    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};
    }

    @media ${({ theme }) => theme.device.large} {
        font-size: 50px;
    }
`

const Navigation = () => (
    <Header>
        <Title><Link href="/"><a>jonna kollin</a></Link></Title>
        <StyledDesktopNavigation links={links} />
        <StyledMobileNavigation links={links} />
    </Header>

)

export default Navigation;
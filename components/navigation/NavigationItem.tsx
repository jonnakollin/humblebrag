import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface NavigationItemProps {
  path: string;
  name: string;
  external: boolean;
}

const StyledNavigationItem = styled.a`
    padding: 30px 0;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 8px;
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: color 5s linear;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }

    @media ${({ theme }) => theme.device.large} {
      padding: 0;
      font-size: 20px;
      margin-right: 30px;

    &:last-child {
        margin-right: 0;
      }
    }
`

const NavigationItem = ({ path, name, external }: NavigationItemProps) => {
  return external ? <StyledNavigationItem href={path}>{name}</StyledNavigationItem> : <Link href={path}><StyledNavigationItem>{name}</StyledNavigationItem></Link>
}

export default NavigationItem
import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'

interface MenuProps {
    open: boolean;
    links: []
}

type Navigation = {
    setOpen: Function;
    open: boolean;
}

const StyledMenu = styled.nav<Navigation>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.beige};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 4;
`

const Menu = ({ open, links }: MenuProps) => {
    return (
        <StyledMenu open={open}>
            {links?.map((link, index) => {
                return <NavigationItem key={index} {...link} />
            })}
        </StyledMenu>
    )
}

export default Menu;
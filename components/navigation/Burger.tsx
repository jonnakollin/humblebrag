import React from 'react'
import styled from 'styled-components'

interface BurgerProps {
  open: boolean;
  setOpen: any;
}

type Navigation = {
  open: boolean;
  setOpen: any;
}

const StyledBurger = styled.button<Navigation>`
  position: absolute;
  top: 35px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 5;

  &:focus {
    outline: none;
  }

  div {
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.color.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;
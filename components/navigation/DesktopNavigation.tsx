import React from 'react'
import NavigationItem from './NavigationItem'

interface DesktopNavigationProps {
    className?: string;
    links: [];

}

const DesktopNavigation = ({ className, links }: DesktopNavigationProps) => {
    return (
        <nav className={className}>
            {links.map((link, index) => {
                return <NavigationItem key={index} {...link} />
            })}
        </nav>
    )
}

export default DesktopNavigation
import { createGlobalStyle } from 'styled-components'
import { device } from './device'
import { color } from './color'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

html {
    font-family: 'Nunito Sans', sans-serif;
    color: ${color.black};
    font-size: 16px;
    line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 300;
}

h1 {
    font-size: 32px;
    line-height: 40px;

    @media ${device.medium} {
        font-size: 48px;
        line-height: 60px;
    }
}

h2 {
    font-size: 26px;
    line-height: 30px;

    @media ${device.medium} {
        font-size: 30px;
        line-height: 34px;
    }
}

h3 {
    font-size: 30px;
    line-height: 34px;

    @media ${device.medium} {
        font-size: 34px;
        line-height: 38px;
    }
}

h4 {
    font-size: 15px;
    line-height: 24px;
}

h5 {
    font-size: 13px;
    line-height: 24px;
}

h6 {
    font-size: 11px;
    line-height: 18px;
}

p {
    font-size: 18px;
    font-weight: 300;
}

a {
    text-decoration: none;
    color: inherit;

    @media ${device.large} {
        &:hover {
            color: ${color.charcoal};
            font-weight: normal;
        }
    }
}

img {
    height: auto;
    max-width: 100%;
}
`

export default GlobalStyle
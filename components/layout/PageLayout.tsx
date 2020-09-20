import styled from 'styled-components'

const PageLayout = styled.div`
    margin: 40px 0;

      @media ${({ theme }) => theme.device.large} {
        margin: 70px 0;
    }
`

export default PageLayout
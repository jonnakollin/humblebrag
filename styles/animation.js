import { keyframes } from 'styled-components'

export const zoom = keyframes`
    from {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }

    100 % {
        opacity: 1;
    }
`
import styled from 'styled-components';
import { device } from '../../../shared';

// eslint-disable-next-line
const IntroText = styled.div.attrs({
    className: "IntroText"
})
`
    position: relative;
    
    @media ${device.mobile425} {
        left: 0.58em;
    }
`

export default IntroText;
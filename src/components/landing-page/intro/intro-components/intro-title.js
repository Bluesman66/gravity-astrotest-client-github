import styled from 'styled-components';
import { device } from '../../../shared';

const IntroTitle = styled.div.attrs({
    className: "IntroTitle"
})
`
    font-family: 'Gilroy ExtraBold', sans-serif;
    font-style: normal;
    font-size: 2em;
    line-height: 2em;
    letter-spacing: -0.44px;
    text-align: center;

    @media ${device.tablet768} {    
        font-size: 1.6em;
    }

    @media ${device.mobile425} {    
        font-size: 1em;
        line-height: 2.2em;
    }
`

export default IntroTitle;
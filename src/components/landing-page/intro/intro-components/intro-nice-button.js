import styled from 'styled-components';

import { NiceButtonLinked, device } from '../../../shared';

// eslint-disable-next-line
const IntroNiceButton = styled(NiceButtonLinked).attrs({
    className: "IntroNiceButton"
})
`
    background: #DA4480;
    width: 18em;
    height: 3.5em;
    padding-top: 1.3em;        
    margin-bottom: 1.9em;
    z-index: 100;

    @media ${device.tablet1024} {
        height: 3em;
        padding: 1em;
    }    

    @media ${device.mobile425} {
        left: 0.58em;    
    }
`

export default IntroNiceButton;

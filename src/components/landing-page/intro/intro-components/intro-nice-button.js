import styled from 'styled-components';

import { NiceButton, device } from '../../../shared';

const IntroNiceButton = styled(NiceButton).attrs({
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

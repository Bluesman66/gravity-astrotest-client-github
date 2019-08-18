import styled from 'styled-components';

import { device } from '../../shared';

import AstroTestText from './astro-test-text';

// eslint-disable-next-line
const AstroTestTextBanner = styled(AstroTestText).attrs({
    className: "AstroTestTextBanner"
})
`   
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1.1em;    
    color: #DA4480;    

    @media ${device.tablet1024} {
        font-size: 1.2em;    
    } 

    @media ${device.mobile425} {
        font-size: 0.96em;
        line-height: 1.2em;
    }
`

export default AstroTestTextBanner;
import styled from 'styled-components';

import { device } from '../../shared';

// eslint-disable-next-line
const AstroTestBanner = styled.div.attrs({
    className: "AstroTestBanner"
})
`   
    height: 45%;
    background: #fff;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tablet1024} {    
        height: 80%;
        border-radius: 0.4em;    
    }

    @media ${device.mobile425} {    
        height: 60%;
    }
`

export default AstroTestBanner;
import styled from 'styled-components';
import { device } from '../../../shared';

const IntroDesc = styled.div.attrs({
    className: "IntroDesc"
})
`
    font-style: normal;
    font-weight: normal;
    font-size: 0.54em;
    line-height: 0.68em;
    text-align: center;

    @media ${device.mobile425} {        
        font-size: 0.4em;
        line-height: 0.75em;    
    }
`

export default IntroDesc;
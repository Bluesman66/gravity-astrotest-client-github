import styled from 'styled-components';

import { device } from '../../../shared';

const IntroButtons = styled.div.attrs({
    className: "IntroButtons"
})
`
    display: flex;
    flex-direction: column;    
    margin-bottom: 1.5em;

    @media ${device.tablet1024} {        
        margin-bottom: 3.15em;
    }

    @media ${device.mobile425} {        
        margin-bottom: 2.58em;
    }    
`

export default IntroButtons;
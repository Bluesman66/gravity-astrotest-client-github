import styled from 'styled-components';

import { device } from '../../shared';

// eslint-disable-next-line
const AstroTestControlPanel = styled.div.attrs({
    className: "AstroTestControlPanel"
})
` 
    font-style: normal;
    font-weight: 600;
    width: 50%;
    height: 100%;
    background: #fff;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media ${device.tablet1024} {
        width: 100%;
        height: 65%;        
        border-radius: 0.4em;        
    }

    @media ${device.mobile425} {        
        height: 80%;
        border-radius: 0;    
    }
`

export default AstroTestControlPanel;
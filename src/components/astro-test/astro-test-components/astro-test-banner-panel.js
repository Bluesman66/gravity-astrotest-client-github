import styled from 'styled-components';

import { device } from '../../shared';

// eslint-disable-next-line
const AstroTestBannerPanel = styled.div.attrs({
    className: "AstroTestBannerPanel"
})
`    
    width: 50%;
    height: 100%;
    background: url(${require('./images/bkg3.png')});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tablet1024} {
        width: 100%;
        height: 45%;
        background: none;
        border-radius: 0.4em;        
    }

    @media ${device.mobile425} {
        height: 24%;        
        justify-content: flex-end;
    }
`

export default AstroTestBannerPanel;
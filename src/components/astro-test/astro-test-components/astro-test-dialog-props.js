import styled from 'styled-components';

import { device } from '../../shared';

// eslint-disable-next-line
const AstroTestDialogProps = styled.div.attrs({
    className: "AstroTestDialogProps"
})
`    
    font-family: 'Source Sans Pro', sans-serif;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 36em;
    max-width: 36em;
    min-height: 20em;
    max-height: 20em;
    margin: 0 auto;    
    top: calc((100vh - 20em) / 2);

    @media ${device.tablet1024} {
        min-width: 14em;
        max-width: 14em;
        min-height: 26em;
        max-height: 26em;
        top: calc((100vh - 26em) / 2);    
    }

    @media ${device.desktop640} {
        min-width: 16em;
        max-width: 16em;
        min-height: 24em;
        max-height: 24em;
    }

    @media ${device.mobile425} {
        width: 100%;
        height: 100%;
        min-width: 0;
        max-width: 100vw;
        min-height: 0;
        max-height: 100vh;
        top: 0;
    }
`

export default AstroTestDialogProps;
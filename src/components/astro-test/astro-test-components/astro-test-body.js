import styled from 'styled-components';

import { device } from '../../shared';

// eslint-disable-next-line
const AstroTestBody = styled.div.attrs({
    className: "AstroTestBody"
})
`
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    box-shadow: 0em 0.1em 0.1em rgba(0, 0, 0, 0.25);
    border-radius: 0.4em;

    @media ${device.tablet1024} {
        width: 100%;
        min-width: 0;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        background: #fff0;
        border-radius: 0.4em;
    }

    @media ${device.mobile425} {
        width: 100%;
        height: 100%;
        display: flex;
        background: #fff;
        border-radius: 0;
    }
`

export default AstroTestBody;
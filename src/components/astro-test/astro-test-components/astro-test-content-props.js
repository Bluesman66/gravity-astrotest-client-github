import styled from 'styled-components';

import { device } from '../../shared';

// eslint-disable-next-line
const AstroTestContentProps = styled.div.attrs({
    className: "AstroTestContentProps"
})
`   
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
    background-color: #fff0;

    @media ${device.mobile425} {     
        border-radius: 0;
        background-color: #fff;        
    }
`

export default AstroTestContentProps;
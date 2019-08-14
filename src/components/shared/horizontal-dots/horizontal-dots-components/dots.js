import styled from 'styled-components';

import { device } from '../../../shared';

const Dots = styled.div.attrs({
    className: "Dots"
})
`
    width: ${props => props.width || "1.5em"};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    @media ${device.mobile425} {
        display: ${props => props.hide && "none"};
    }
`

export default Dots;
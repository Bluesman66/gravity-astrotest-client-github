import styled from 'styled-components';
import { device } from '../../shared';

const HeaderLogoText = styled.div`
    font-family: 'Gilroy ExtraBold', sans-serif;
    display: inline-block;
    font-size: ${props => props.size || "0.9em"};    
    color: #fff;
    text-decoration: none;
    &:hover {
        color: #fff;
        text-decoration: none;
    }

    @media ${device.mobile425} {
        display: none;
    }
`

export default HeaderLogoText;
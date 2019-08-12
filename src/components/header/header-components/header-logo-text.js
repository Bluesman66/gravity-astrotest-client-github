import styled from 'styled-components';
import { device } from '../../shared';

const HeaderLogoText = styled.div`
    display: inline-block;
    font-size: ${props => props.size};
    font-weight: bold;
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
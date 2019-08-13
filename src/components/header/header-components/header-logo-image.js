import styled from 'styled-components';
import logo from './images/logo.png';

const HeaderLogoImage = styled.div`
    display: inline-block;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    height: ${props => props.size || "1.8em"};
    width: ${props => props.size || "1.8em"};
`

export default HeaderLogoImage;
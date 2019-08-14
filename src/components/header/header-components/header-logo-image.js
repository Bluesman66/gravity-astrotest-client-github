import styled from 'styled-components';

// eslint-disable-next-line
const HeaderLogoImage = styled.div.attrs({
    className: "HeaderLogoImage"
})
`
    display: inline-block;
    background-image: url(${require('./images/logo.png')});
    background-repeat: no-repeat;
    background-size: cover;
    height: ${props => props.size || "1.8em"};
    width: ${props => props.size || "1.8em"};
`

export default HeaderLogoImage;
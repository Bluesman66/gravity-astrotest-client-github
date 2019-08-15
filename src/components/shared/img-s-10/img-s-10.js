import styled from 'styled-components';

import device from '../device';

// eslint-disable-next-line 
const ImgS10 = styled.img.attrs({
    className: "ImgS10",
    src: require('./s-10.png')
})
`
    position: absolute;
    display: initial;
    top: ${props => props.top || "25vh"};
    left: ${props => props.left || "25vw"};
    height: ${props => props.height || "2em"};

    @media ${device.mobile425} {
        display: ${props => props.hide && "none"};   
    }
`

export default ImgS10;
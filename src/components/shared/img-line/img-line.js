import styled from 'styled-components';

import device from '../device';

// eslint-disable-next-line 
const ImgLine = styled.img.attrs({
    className: "ImgLine",
    src: require('./images/line.png')
})
`
    position: absolute;
    display: initial;
    top: ${props => props.top || "18.5vh"};
    right: ${props => props.right || "27vw"};
    width: ${props => props.width || "3em"};
    height: ${props => props.height || "0.2em"};

    @media ${device.mobile425} {
        display: ${props => props.hide && "none"};   
    }
`

export default ImgLine;
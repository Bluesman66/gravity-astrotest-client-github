import styled from 'styled-components';

import device from '../device';

// eslint-disable-next-line 
const ImgS157 = styled.img.attrs({
    className: "ImgS157",
    src: require('./s-157.png')
})
`
    position: absolute;
    display: initial;
    bottom: 0;
    height: ${props => props.height || "5em"};

    @media ${device.mobile425} {
        display: ${props => props.hide && "none"};   
    }
`

export default ImgS157;
import styled from 'styled-components';

import device from '../device';

// eslint-disable-next-line 
const ImgS154 = styled.img.attrs({
    className: "ImgS154",
    src: require('./s-154.png')
})
`
    position: absolute;
    display: initial;
    bottom: 0;
    height: ${props => props.height || "4.5em"};

    @media ${device.mobile425} {
        display: ${props => props.hide && "none"};   
    }
`

export default ImgS154;
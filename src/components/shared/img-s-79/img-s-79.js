import styled from 'styled-components';

import device from '../device';

// eslint-disable-next-line 
const ImgS79 = styled.img.attrs({
    className: "ImgS79",
    src: require('./s-79.png')
})
`
    position: absolute;
    display: initial;
    top: ${props => props.top || "18vh"};
    right: ${props => props.right || "30vw"};
    height: ${props => props.height || "2em"};

    @media ${device.tablet1024} {     
        top: 18vh;
        right: 28vw;    
    }

    @media ${device.mobile425} {
        display: ${props => props.hide && "none"};   
    }
`

export default ImgS79;
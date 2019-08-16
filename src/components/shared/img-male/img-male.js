import styled from 'styled-components';

import { NiceButtonImgMixin } from '../mixins';

// eslint-disable-next-line 
const ImgMale = styled.img.attrs({
    className: "ImgMale",
    src: require('./male.png')
})
`
    ${NiceButtonImgMixin}   
`

export default ImgMale;
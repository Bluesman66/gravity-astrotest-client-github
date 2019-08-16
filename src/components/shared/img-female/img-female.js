import styled from 'styled-components';

import { NiceButtonImgMixin } from '../mixins';

// eslint-disable-next-line 
const ImgFemale = styled.img.attrs({
    className: "ImgFemale",
    src: require('./female.png')
})
`
    ${NiceButtonImgMixin}
`

export default ImgFemale;
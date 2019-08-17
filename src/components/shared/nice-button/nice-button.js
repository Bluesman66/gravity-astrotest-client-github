import styled from 'styled-components';

import {
    NiceButtonMixin
} from '../mixins';

// eslint-disable-next-line
const NiceButton = styled.a.attrs({
    className: "NiceButton"
})
`
    ${NiceButtonMixin}    
`

export default NiceButton;
import styled from 'styled-components';

import {
    NiceButton
} from '../../shared';

import {
    NiceButtonLargeMixin,
    NiceButtonPinkMixin
} from '../../shared/mixins';


// eslint-disable-next-line
const AstroTestButtonTakeTest = styled(NiceButton).attrs({
    className: "AstroTestButtonTakeTest",
    href: "#reports",
    "data-toggle": "modal" 
})
`    
    ${NiceButtonLargeMixin}
    ${NiceButtonPinkMixin}
`

export default AstroTestButtonTakeTest;
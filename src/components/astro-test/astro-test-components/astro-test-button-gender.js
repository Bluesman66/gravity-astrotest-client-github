import styled from 'styled-components';

import {
    NiceButton
} from '../../shared';

import {
    NiceButtonGenderMixin    
} from '../../shared/mixins';


// eslint-disable-next-line
const AstroTestButtonGender = styled(NiceButton).attrs({
    className: "AstroTestButtonGender",
    href: "#"
})
`    
    ${NiceButtonGenderMixin}
`

export default AstroTestButtonGender;
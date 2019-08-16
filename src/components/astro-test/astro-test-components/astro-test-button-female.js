import styled from 'styled-components';

import {
    NiceButton
} from '../../shared';

import {
    NiceButtonGenderMixin,
    NiceButtonFemaleMixin
} from '../../mixins';


// eslint-disable-next-line
const AstroTestButtonFemale = styled(NiceButton).attrs({
    className: "AstroTestButtonMale"
})
`    
    ${NiceButtonGenderMixin}
    ${NiceButtonFemaleMixin}
`

export default AstroTestButtonFemale;
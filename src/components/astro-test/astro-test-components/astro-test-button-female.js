import styled from 'styled-components';

import {
    NiceButton
} from '../../shared';

import {
    NiceButtonGenderMixin,
    NiceButtonFemaleMixin
} from '../../shared/mixins';


// eslint-disable-next-line
const AstroTestButtonFemale = styled(NiceButton).attrs({
    className: "AstroTestButtonFemale"
})
`    
    ${NiceButtonGenderMixin}
    ${NiceButtonFemaleMixin}
`

export default AstroTestButtonFemale;
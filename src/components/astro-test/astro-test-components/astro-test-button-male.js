import styled from 'styled-components';

import {
    NiceButton
} from '../../shared';

import {
    NiceButtonGenderMixin,
    NiceButtonMaleMixin
} from '../../shared/mixins';


// eslint-disable-next-line
const AstroTestButtonMale = styled(NiceButton).attrs({
    className: "AstroTestButtonMale"
})
`    
    ${NiceButtonGenderMixin}
    ${NiceButtonMaleMixin}
`

export default AstroTestButtonMale;
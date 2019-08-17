import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    NiceButtonMixin
} from '../mixins';

// eslint-disable-next-line
const NiceButtonLinked = styled(Link).attrs({
    className: "NiceButtonLinked"
})
`
    ${NiceButtonMixin}    
`

export default NiceButtonLinked;
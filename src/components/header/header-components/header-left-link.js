import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLeftLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${props => props.width};
    margin-left: 0.5em;
`

export default HeaderLeftLink;
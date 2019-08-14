import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
const HeaderLeftLink = styled(Link).attrs({
    className: "HeaderLeftLink"
})
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${props => props.width || "6em"};
    margin-left: 0.5em;
`

export default HeaderLeftLink;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
const NiceButton = styled(Link).attrs({
    className: "NiceButton"
})
`
    display: inline-block;
    position: relative;
    background: #DA4480;
    width: ${props => props.width || "4.7em"};
    height: ${props => props.height || "0.96em"};
    border-radius: ${props => props.borderRadius || "2em"};
    font-size: ${props => props.fontSize || "0.55em"};
    margin: 0 auto;
    box-shadow: 0em 0.51em 0.41em rgba(0, 0, 0, 0.25);    
    text-decoration: none;    
    color: #fff;
    text-align: center;

    &:hover {
        text-decoration: none;
    }
`

export default NiceButton;
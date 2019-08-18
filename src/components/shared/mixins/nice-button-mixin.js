import { css } from 'styled-components';

const NiceButtonMixin = css`    
    background: ${props => props.bkg || "#DA4480"};
    color: ${props => props.clr || "#fff"};
    width: ${props => props.width || "4.7em"};
    height: ${props => props.height || "0.96em"};
    border-radius: ${props => props.br || "2em"};
    font-size: ${props => props.font || "0.55em"};
    box-shadow: ${props => props.shadow || "0em 0.51em 0.41em rgba(0, 0, 0, 0.25)"};
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-align: center;
    margin: 0 auto;

    &:hover {
        text-decoration: none;
    }
`

export default NiceButtonMixin;
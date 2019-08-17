import { css } from 'styled-components';

const NiceButtonMixin = css`
    display: inline-block;
    position: relative;
    background: #DA4480;
    width: 4.7em;
    height: 0.96em;
    border-radius: 2em;
    font-size: 0.55em;
    margin: 0 auto;
    box-shadow: 0em 0.51em 0.41em rgba(0, 0, 0, 0.25);    
    text-decoration: none;    
    color: #fff;
    text-align: center;

    &:hover {
        text-decoration: none;
    }
`

export default NiceButtonMixin;
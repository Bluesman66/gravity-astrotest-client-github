import styled from 'styled-components';

// eslint-disable-next-line
const AstroTestText = styled.div.attrs({
    className: "AstroTestText"
})
`  
    width: ${props => props.width || "80%"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "1em"};
    line-height: ${props => props.lineHeight || "1em"};
    color: ${props => props.color || "#333F48"};
    font-style: normal;
    text-align: center;
`

export default AstroTestText;
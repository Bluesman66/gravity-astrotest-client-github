import styled from 'styled-components';

// eslint-disable-next-line
const AstroTestDOBElement = styled.select.attrs({
    className: "form-control AstroTestDOBElement"
})
    `    
    flex-basis: ${props => props.width || "100%"};
    margin-right: ${props => props.indent || "0"};
    font-size: 0.5em !important;
    height: 2.8em !important;    
`

export default AstroTestDOBElement;
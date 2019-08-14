import styled from 'styled-components';

// eslint-disable-next-line
const Dot = styled.div.attrs({
    className: "Dot"
})
`
    border-radius: 50%;
    width: ${props => props.size || "0.2em"};
    height: ${props => props.size || "0.2em"};
    background: ${props => props.color || "#FCE38A"};
`

export default Dot;
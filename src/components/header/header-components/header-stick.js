import styled from 'styled-components';

const HeaderStick = styled.div.attrs({
    className: "HeaderStick"
})
`
    position: relative; 
    top: ${props => props.top};
    right: ${props => props.right};   
    width: 1.5em;
    height: 0.15em;
    background: #fff;
`

export default HeaderStick;
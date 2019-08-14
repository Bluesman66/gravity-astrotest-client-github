import styled from 'styled-components';

// eslint-disable-next-line
const HeaderContainer = styled.header.attrs({
    className: "HeaderContainer"
})
`    
    position: absolute;
    margin-top: 0.5em;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
`

export default HeaderContainer;
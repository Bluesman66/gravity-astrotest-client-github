import styled from 'styled-components';

// eslint-disable-next-line
const AstroTestContainer = styled.div.attrs({
    className: "AstroTestContainer",
    id: "astro-test"
})
`
    background: linear-gradient(0deg, rgba(78, 76, 133, 0.0001) 0%, #3A3781 75%);
    width: 100vw;
    height: 100vh;
`

export default AstroTestContainer;
import styled from 'styled-components';

const HeaderNavLink = styled.a.attrs({
    className: "HeaderNavLink",
    href: "#"
})
`
    font-family: 'Gilroy Light', sans-serif;
    font-size: ${props => props.size || "0.6em"};    
    position: relative;
    top: 0.5em;
    right: 1.2em;
    color: #fff;
    text-decoration: none;
    transition: color .1s linear;
    
    &:hover {
        color: #fce38a;
        text-decoration: none;        
    }
`

export default HeaderNavLink;
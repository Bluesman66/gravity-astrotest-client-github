import React from 'react';

import { 
    HeaderContainer, 
    HeaderLeftLink, 
    HeaderRight,
    HeaderLogoImage,
    HeaderLogoText } from './header-components';

import './header.css';

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderLeftLink width="6em" to="/">
                <HeaderLogoImage size="1.8em"/>
                <HeaderLogoText size="0.9em">Gravity</HeaderLogoText>                
            </HeaderLeftLink>
            <HeaderRight>
                <nav className="nav">
                    {/* eslint-disable-next-line */}
                    <a className="nav__link" href="#">Menu</a>
                </nav>
                <div className="stick stick--position-upper stick--color-upper"></div>
                <div className="stick stick--position-lower stick--color-lower"></div>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
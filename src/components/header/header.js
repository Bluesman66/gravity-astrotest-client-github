import React from 'react';

import {
    HeaderContainer,
    HeaderLeftLink,
    HeaderRight,
    HeaderLogoImage,
    HeaderLogoText,    
    HeaderNavLink,
    HeaderStick
} from './header-components';

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderLeftLink to="/">
                <HeaderLogoImage />
                <HeaderLogoText>Gravity</HeaderLogoText>
            </HeaderLeftLink>
            <HeaderRight>
                <HeaderNavLink href="#">Menu</HeaderNavLink>
                <HeaderStick top="0.3em"></HeaderStick>
                <HeaderStick top="0.8em" right="0.8em"></HeaderStick>                
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
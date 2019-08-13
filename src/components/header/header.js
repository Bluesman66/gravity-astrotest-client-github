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
            <HeaderLeftLink width="6em" to="/">
                <HeaderLogoImage size="1.8em" />
                <HeaderLogoText size="0.9em">Gravity</HeaderLogoText>
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
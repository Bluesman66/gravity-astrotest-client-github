import React from 'react';

import {
    IntroContainer,
    IntroBottomContainer,
    IntroText,
    IntroTitle,
    IntroDesc,
    IntroButtons,
    IntroNiceButton
} from './intro-components';

import {
    HorizontalDots,
    ImgS10,
    ImgS79,
    ImgLine,
    ImgS154,
    ImgS157
} from '../../shared';

const Intro = () => {
    return (
        <IntroContainer>
            <IntroBottomContainer>
                <IntroText>
                    <IntroTitle>Welcome to Gravity</IntroTitle>
                    <IntroDesc>Where <strong>Astrological insight</strong> helps people connect</IntroDesc>
                </IntroText>
                <HorizontalDots hide />
                <IntroButtons>
                    <IntroNiceButton to="/astro">Get Started</IntroNiceButton>
                </IntroButtons>
            </IntroBottomContainer>

            <ImgS10 hide />
            <ImgS79 hide />
            <ImgLine hide />
            <ImgS154 hide />
            <ImgS157 hide />
            
        </IntroContainer>
    );
};

export default Intro;
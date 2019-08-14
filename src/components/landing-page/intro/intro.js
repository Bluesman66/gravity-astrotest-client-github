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
    ImgLine
} from '../../shared';

import s_154 from './images/s-154.png';
import s_157 from './images/s-157.png';

import './intro.css';

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

            <img className="intro-s-154 intro__shapes--hide" src={s_154} alt="" />
            <img className="intro-s-157 intro__shapes--hide" src={s_157} alt="" />
        </IntroContainer>
    );
};

export default Intro;
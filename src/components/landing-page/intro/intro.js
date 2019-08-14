import React from 'react';
import { Link } from 'react-router-dom';

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
    HorizontalDots
} from '../../shared';

import s_154 from './images/s-154.png';
import s_157 from './images/s-157.png';
import s_10 from './images/s-10.png';
import s_79 from './images/s-79.png';
import line from './images/line.png';

import './intro.css';

const Intro = () => {
    return (
        <IntroContainer>            
            <IntroBottomContainer>
                <IntroText>
                    <IntroTitle>Welcome to Gravity</IntroTitle>
                    <IntroDesc>Where <strong>Astrological insight</strong> helps people connect</IntroDesc>
                </IntroText>
                <HorizontalDots mobileHide />
                <IntroButtons>
                    <IntroNiceButton to="/astro">Get Started</IntroNiceButton>
                </IntroButtons>
            </IntroBottomContainer>                                
            
            <img className="intro-s-10 intro__shapes--hide" src={s_10} alt="" />
            <img className="intro-s-79 intro__shapes--hide" src={s_79} alt="" />
            <img className="intro-line intro__shapes--hide" src={line} alt="" />                                
                
            <img className="intro-s-154 intro__shapes--hide" src={s_154} alt="" />
            <img className="intro-s-157 intro__shapes--hide" src={s_157} alt="" />
        </IntroContainer>
    );
};

export default Intro;
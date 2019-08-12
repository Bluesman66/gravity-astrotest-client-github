import React from 'react';
import { Link } from 'react-router-dom';

import s_154 from './images/s-154.png';
import s_157 from './images/s-157.png';
import s_10 from './images/s-10.png';
import s_79 from './images/s-79.png';
import line from './images/line.png';

import './intro.css';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__main-container">
                <div className="intro__bottom-container intro__bottom-container--height">
                    <div className="intro_text intro_text--position">
                        <div className="intro__title intro__title--font-size">Welcome to Gravity</div>
                        <div className="intro__desc intro__desc--font-size">Where <strong>Astrological insight</strong> helps people connect</div>
                    </div>
                    <div className="horizontal-dots intro-horizontal-dots--hide">
                        <div className="dot horizontal-dot--size horizontal-dot--color"></div>
                        <div className="dot horizontal-dot--size horizontal-dot--color"></div>
                        <div className="dot horizontal-dot--size horizontal-dot--color"></div>
                    </div>
                    <div className="intro__buttons intro__buttons--margin-bottom">
                        <Link className="nice-button
                            nice-button--intro
                            nice-button--get_started" to="/astro">Get Started</Link>
                    </div>
                </div>                                
                
                <img className="intro-s-10 intro__shapes--hide" src={s_10} alt="" />
                <img className="intro-s-79 intro__shapes--hide" src={s_79} alt="" />
                <img className="intro-line intro__shapes--hide" src={line} alt="" />                                
                    
                <img className="intro-s-154 intro__shapes--hide" src={s_154} alt="" />
                <img className="intro-s-157 intro__shapes--hide" src={s_157} alt="" />                    
                
            </div>            
        </div>
    );
};

export default Intro;
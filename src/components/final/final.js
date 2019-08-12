import React, { Component } from 'react';

import pair from './images/pair.png';
import facebook from './images/facebook.png';
import insta from './images/insta.png';
import twitter from './images/twitter.png';
import mail from './images/mail.png';
import s_1 from './images/s-1.png';
import party from './images/party.png';

import './final.css';

const resultId = 'result-link';
const notifyId = 'notify-link';
const finalResultClass = '.final__result';
const finalNotifyClass = '.final__notify';

export default class Final extends Component {

    componentDidMount = () => {
        const finalActiveClass = 'final-nav__link--active';

        const finalResult = document.querySelector(finalResultClass);
        const finalNotify = document.querySelector(finalNotifyClass);

        const finalShowClass = 'final--show';
        const finalHideClass = 'final--hide';

        const resultIdLink = document.getElementById(resultId);
        const notifyIdLink = document.getElementById(notifyId);

        if (resultIdLink && notifyIdLink) {

            resultIdLink.addEventListener("click", (event) => {
                event.target.classList.add(finalActiveClass);

                finalResult.classList.add(finalShowClass);
                finalResult.classList.remove(finalHideClass);
                finalNotify.classList.add(finalHideClass);
                finalNotify.classList.remove(finalShowClass);

                notifyIdLink.classList.remove(finalActiveClass);
            });

            notifyIdLink.addEventListener("click", (event) => {
                event.target.classList.add(finalActiveClass);

                finalNotify.classList.add(finalShowClass);
                finalNotify.classList.remove(finalHideClass);
                finalResult.classList.add(finalHideClass);
                finalResult.classList.remove(finalShowClass);

                resultIdLink.classList.remove(finalActiveClass);
            });
        }
    }

    render() {
        return (
            <div className="modal fade" id="final">
                <div className="modal-dialog final--dialog-props">
                    <div className="modal-content final--content-props">
                        <div className="final__desktop-tablet">
                            <div className="final__header">
                                <div className="final__close">
                                    {/* eslint-disable-next-line */}
                                    <a href="#" className="final__cross" data-dismiss="modal" aria-hidden="true">&times;</a>
                                </div>
                            </div>

                            <div className="final__body">
                                <div className="final__result">
                                    <img className="final__top-image" src={party} alt="" />
                                    <div className="final__result-title" id="result-title">Correct!</div>
                                    <div className="final__result-desc" id="result-desc">You picked Gemini / Rat</div>
                                    <div className="final__gender-picts">
                                        <div className="final__male-pict" />
                                        <div className="final__female-pict" />
                                    </div>

                                    <div className="final__matching">
                                        <div className="final__score">
                                            <div className="final__score-value">77%</div>
                                            <div className="final__score-desc">of people also chose their correct star sign</div>
                                        </div>
                                    </div>

                                    <div className="final__share">                                        
                                        <div className="final__share-picts">
                                            <img className="final__facebook" src={facebook} alt="" />
                                            <img className="final__insta" src={insta} alt="" />
                                            <img className="final__twitter" src={twitter} alt="" />
                                            <img className="final__mail" src={mail} alt="" />
                                        </div>
                                        <div className="final__share-title">Share this test!</div>
                                    </div>
                                </div>

                                <div className="final__notify final--hide">
                                    <img className="final__pair final__pair--hide" src={pair} alt="" />
                                    <div className="final__vip-pass">VIP pass</div>

                                    <div className="notify" id="notify">
                                        <div className="notify__desc">Notify me when a VIP pass becomes available. Its free and you get access to your whole report.</div>
                                        <div className="notify__input">
                                            <input className="notify__input-control" placeholder="   Your email"></input>
                                            {/* eslint-disable-next-line */}
                                            <a className="notify__input-button" id="notify-me" href="#opps">Notify Me</a>
                                        </div>
                                        <div className="notify__message">We will never share your email with third parties and won’t spam you!</div>
                                    </div>

                                    <div className="final__flying-bar-2">
                                        <div className="final__dot-matrix">
                                            <div className="horizontal-dots">
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-2"></div>
                                            </div>
                                            <div className="horizontal-dots">
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-2"></div>
                                            </div>
                                            <div className="horizontal-dots">
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="final-nav final-nav--hide">
                                    <div className="final-nav__link final-nav__link--active" id={resultId}></div>
                                    <div className="final-nav__link" id={notifyId}></div>
                                </div>
                            </div>
                        </div>

                        <div className="final__phone">
                            <div className="final__header">
                                <div className="final__close">
                                    {/* eslint-disable-next-line */}
                                    <a href="#" className="final__cross" data-dismiss="modal" aria-hidden="true">&times;</a>
                                </div>
                            </div>

                            <div className="final__body">
                                <div className="final__result-page-1">
                                    <img className="final__top-image" src={party} alt="" />
                                    <div className="final__result-title" id="result-title">Correct!</div>
                                    <div className="final__result-desc" id="result-desc">You picked Gemini / Rat</div>
                                    <div className="final__gender-picts">
                                        <div className="final__male-pict" />
                                        <div className="final__female-pict" />
                                    </div>
                                </div>

                                <div className="final__result-page-2">
                                    <div className="final__matching">
                                        <div className="final__score">
                                            <div className="final__score-value">77%</div>
                                            <div className="final__score-desc">of people also chose their correct star sign</div>
                                        </div>
                                    </div>

                                    <div className="final__share">                                        
                                        <div className="final__share-picts">
                                            <img className="final__facebook" src={facebook} alt="" />
                                            <img className="final__insta" src={insta} alt="" />
                                            <img className="final__twitter" src={twitter} alt="" />
                                            <img className="final__mail" src={mail} alt="" />
                                        </div>
                                        <div className="final__share-title">Share this test!</div>
                                    </div>
                                </div>

                                <div className="final__notify final--hide">
                                    <img className="final__pair final__pair--hide" src={pair} alt="" />
                                    <div className="final__vip-pass">VIP pass</div>

                                    <div className="notify" id="notify">
                                        <div className="notify__desc">Notify me when a VIP pass becomes available. Its free and you get access to your whole report.</div>
                                        <div className="notify__input">
                                            <input className="notify__input-control" placeholder="   Your email"></input>
                                            {/* eslint-disable-next-line */}
                                            <a className="notify__input-button" id="notify-me" href="#opps">Notify Me</a>
                                        </div>
                                        <div className="notify__message">We will never share your email with third parties and won’t spam you!</div>
                                    </div>

                                    <div className="final__flying-bar-2">
                                        <div className="final__dot-matrix">
                                            <div className="horizontal-dots">
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-2"></div>
                                            </div>
                                            <div className="horizontal-dots">
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-2"></div>
                                            </div>
                                            <div className="horizontal-dots">
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-1"></div>
                                                <div className="dot horizontal-dot--size horizontal-dot--color-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="final-nav final-nav--hide">
                                    <div className="final-nav__link final-nav__link--active" id={resultId}></div>
                                    <div className="final-nav__link" id={notifyId}></div>
                                </div>
                            </div>
                        </div>

                        <div className="final__flying-bar-1 final__flying-bar-1--hide">
                            <img className="final-s-1" src={s_1} alt="" />
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
};
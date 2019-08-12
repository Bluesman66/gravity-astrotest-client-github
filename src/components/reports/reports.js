import React, { Component } from 'react';

import './reports.css';

const reportAId = 'reportA';
const reportBId = 'reportB';

const reportATitle = 'Report A';
const reportBTitle = 'Report B';

const headerATitle_1 = 'SWIPE RIGHT to see both reports';
const headerBTitle_1 = 'SWIPE LEFT to see both reports';
const headerDesktopTitle_2 = 'Chose the report that suits you best!';
const headerMobileTitle_2 = 'Chose which suits you best!';

const reportAText = `This Sign is a person who stubbornly, but charmingly, wishes to remain a child. These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards. Oh, yes, they will take long walks into the mountains, discover ruins and memorize each stone. But these very dea...
    This Sign is a person who stubbornly, but charmingly, wishes to remain a child. These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards. This Sign is a person who stubbornly, but charmingly, wishes to remain a child. These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards. Oh, yes, they will take long walks into the mountains, discover ruins and memorize each stone. But these very dea...
    This Sign is a person who stubbornly, but charmingly, wishes to remain a child. These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards.`;

const reportBText = `These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards. Oh, yes, they will take long walks into the mountains, discover ruins and memorize each stone. But these very dea...
    This Sign is a person who stubbornly, but charmingly, wishes to remain a child. These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards. This Sign is a person who stubbornly, but charmingly, wishes to remain a child. These people love all the trappings of adventure and gadgets, space races and long journeys to faraway lands. Of course, children cannot realize such dramatic dreams. They only imagine what it’s like to ride in a space ship or dive thousands of feet into the ocean’s depths. Well, those people are exactly the same. They fantasize about great adventures. But they never go further than their own backyards. Oh, yes, they will take long walks into the mountains, discover ruins and memorize each stone. But these very dea...`;

const buttonATitle = 'Report A is Me';
const buttonBTitle = 'Report B is Me';

export default class Reports extends Component {

    setElement = (place, content) => {
        if (place) {
            place.innerHTML = content;
        }
    }

    componentDidMount = () => {
        const reportActiveClass = 'reports-nav__link--active';

        const headerTitle_1_Placement = document.querySelector('.header__title-1');
        const headerTitle_2_Placement = document.querySelector('.header__title-2');
        const reportATitlePlacement = document.getElementById('reportA-title');
        const reportATextPlacement = document.getElementById('reportA-place');
        const reportsNavLinks = document.querySelectorAll('.reports-nav__link');
        const reportASwitcher = document.getElementById(reportAId);
        const reportAButtonPlacement = document.getElementById('reportA-button');        

        const mediaChange = (media) => {            
            if (media.matches) { 
                this.setElement(headerTitle_2_Placement, headerMobileTitle_2);
            } else {
                this.setElement(headerTitle_2_Placement, headerDesktopTitle_2);
            }
        }

        let tabletMedia = window.matchMedia("(max-width: 1024px)")
        tabletMedia.addListener(mediaChange)        

        this.setElement(reportATitlePlacement, reportATitle);
        this.setElement(reportATextPlacement, reportAText);

        if (reportASwitcher) {
            reportASwitcher.classList.add(reportActiveClass);
        }

        reportsNavLinks.forEach((elem) => {
            elem.addEventListener("click", (event) => {

                reportsNavLinks.forEach((elem) => {
                    elem.classList.remove(reportActiveClass);
                });

                event.target.classList.add(reportActiveClass);

                if (event.target.id === reportAId) {
                    this.setElement(headerTitle_1_Placement, headerATitle_1)
                    this.setElement(reportATitlePlacement, reportATitle);
                    this.setElement(reportATextPlacement, reportAText);
                    this.setElement(reportAButtonPlacement, buttonATitle);
                } else if (event.target.id === reportBId) {
                    this.setElement(headerTitle_1_Placement, headerBTitle_1)
                    this.setElement(reportATitlePlacement, reportBTitle);
                    this.setElement(reportATextPlacement, reportBText);
                    this.setElement(reportAButtonPlacement, buttonBTitle);
                }
            });
        });
    }

    render() {
        return (
            <div className="modal fade" id="reports" >
                <div className="modal-dialog reports--dialog-props">
                    <section className="modal-content reports--content-props">
                        <header className="reports_header">
                            <div className="header__title">
                                <div className="header__title-1 header__title-1--hide">{headerATitle_1}</div>
                                <div className="header__title-2">{headerDesktopTitle_2}</div>
                            </div>
                            <div className="reports__close">
                                <a href="0" className="reports__cross" data-dismiss="modal" aria-hidden="true">&times;</a>
                            </div>
                        </header>

                        <div className="reports__body">
                            <div className="reports__report reports__report--left">
                                <div className="reports__title reports__title--height" id="reportA-title">{reportATitle}</div>
                                <div className="reports__text reports__text--height" id="reportA-place"></div>
                                <div className="reports__footer reports__footer--height">
                                    <a className="nice-button nice-button--report" href="#final" data-toggle="modal" id="reportA-button">{buttonATitle}</a>
                                    <div className="reports-nav reports-nav--hide">
                                        <div className="reports-nav__link" id={reportAId}></div>
                                        <div className="reports-nav__link" id={reportBId}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="reports__report reports__report--right reports__report--hide">
                                <div className="reports__title reports__title--height">{reportBTitle}</div>
                                <div className="reports__text reports__text--height">{reportBText} </div>
                                <div className="reports__footer reports__footer--height">
                                    <a className="nice-button nice-button--report" href="#opps" data-toggle="modal" id="reportB-button">{buttonBTitle}</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
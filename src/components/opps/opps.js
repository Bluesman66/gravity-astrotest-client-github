import React from 'react';

import flower from './images/daisy icon.png';

import './opps.css';

const Opps = () => {
    return (
        <div className="modal fade" id="opps">
            <div className="modal-dialog opps--dialog-props">
                <section className="modal-content opps--content-props">
                    <header className="opps_header">                        
                        <div className="opps__close">
                            {/* eslint-disable-next-line */}
                            <a href="#" className="opps__cross" data-dismiss="modal" aria-hidden="true">&times;</a>
                        </div>
                    </header>
                    <div className="opps__body">
                        <div className="opps__title">
                            <img className="opps__title-pict" src={flower} alt=""/>
                            <div className="opps__title-text">Oopsie Daisy!</div>
                        </div>
                        <div className="opps__text">Please read through both Astrology reports before choosing which one is you!</div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Opps;
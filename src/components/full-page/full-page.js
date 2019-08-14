import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import GlobalStyle from '../global-style';

import LandingPage from '../landing-page';
import AstroPage from '../astro-page';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import '../shared/transitions.css';
import './overrides.css';

const FullPage = () => (
    <React.Fragment>
        <GlobalStyle />
        <ReactFullpage
            navigation={true}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>                        
                        <div className="section">
                            <Route render={({ location }) => (
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.key}
                                        timeout={500}
                                        classNames="fade"
                                    >
                                        <Switch location={location}>
                                            <Route exact path='/' component={LandingPage} />
                                            <Route path='/astro' component={AstroPage} />
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            )} />
                        </div>
                        <div className="section">

                        </div>
                        <div className="section">

                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />        
    </React.Fragment>
);

export default withRouter(FullPage);
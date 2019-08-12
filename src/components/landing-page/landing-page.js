import React from 'react';

import AppContainer from '../app-container';
import Header from '../header';
import Intro from './intro';

const LandingPage = () =>  {    
    return (
        <AppContainer>
            <Header />
            <Intro />
        </AppContainer>
    );    
}

export default LandingPage;
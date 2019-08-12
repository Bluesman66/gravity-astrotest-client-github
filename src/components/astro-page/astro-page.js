import React from 'react';

import AppContainer from '../app-container';

import Header from '../header';
import AstroTest from '../astro-test';
import Reports from '../reports';
import Opps from '../opps';
import Final from '../final';

const AstroPage = () =>  {    
    return (
        <AppContainer>
            <Header />
            <AstroTest />
            <Reports />
            <Opps />
            <Final />
        </AppContainer>
    );    
}

export default AstroPage;
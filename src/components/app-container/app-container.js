import styled from 'styled-components';

import { device } from '../shared';
import bkg from './images/bkg1.png';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;    
    font-family: 'Source Sans Pro', sans-serif;    
    line-height: 0.5em;
    color: #fff;
    background: url(${bkg}), linear-gradient(0deg, rgba(78, 76, 133, 0.0001) 0%, #3A3781 75%);    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${device.desktop3840} {
        font-size: 58px;
    }

    @media ${device.desktop2560} {
        font-size: 40px;
    }

    @media ${device.desktop2048} {
        font-size: 38px;
    }

    @media ${device.desktop1920} {
        font-size: 34px;
    }

    @media ${device.desktop1680} {
        font-size: 32px;
    }

    @media ${device.desktop1600} {
        font-size: 28px;
    }

    @media ${device.desktop1536} {
        font-size: 26px;
    }

    @media ${device.laptop1440} {
        font-size: 25px;
    }

    @media ${device.laptop1366} {
        font-size: 23px;
    }

    @media ${device.laptop1280} {
        font-size: 22px;
    }

    @media ${device.tablet1024} {
        font-size: 40px;
    }

    @media ${device.tablet768} {
        font-size: 32px;
    }

    @media ${device.desktop640} {
        font-size: 14px;
    }

    @media ${device.mobile425} {
        font-size: 30px;
    }

    @media ${device.mobile414} {
        font-size: 28px;
    }

    @media ${device.mobile411} {
        font-size: 27px;
    }

    @media ${device.mobile375} {
        font-size: 26px;
    }

    @media ${device.mobile360} {
        font-size: 24px;
    }

    @media ${device.mobile320} {
        font-size: 22px;
    }
`
export default AppContainer;
import styled from 'styled-components';
import { device } from '../../../shared';

const IntroBottomContainer = styled.div.attrs({
    className: "IntroBottomContainer"
})
`
    width: 100%;
    height: 55%;
    min-height: 7.75em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobile425} {
        height: 70%;
    }
`

export default IntroBottomContainer;
import React from 'react';

import { Dots, Dot } from './horizontal-dots-components';

const HorizontalDots = ({ mobileHide }) => {
    return (
        <Dots hide={mobileHide}><Dot /><Dot /><Dot /></Dots>
    );
}

export default HorizontalDots;
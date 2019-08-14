import React from 'react';

import { Dots, Dot } from '../dots';

const HorizontalDots = ({ hide }) => {
    return (
        <Dots hide={hide}><Dot /><Dot /><Dot /></Dots>
    );
}

export default HorizontalDots;
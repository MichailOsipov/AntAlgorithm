import * as React from 'react';
import PropTypes from 'prop-types';

export const Ant = ({x, y}) => (
    <circle
        cx={x}
        cy={y}
        stroke="black"
        fill="black"
        r={8}
    />
);

Ant.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
};

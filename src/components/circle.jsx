import * as React from 'react';
import PropTypes from 'prop-types';

const STROKE_WIDTH = 2;
const TEXT_OFFSET = STROKE_WIDTH * 2;

export const Circle = ({
    x,
    y,
    label
}) => (
    <React.Fragment>
        <circle
            cx={x}
            cy={y}
            stroke="black"
            strokeWidth={STROKE_WIDTH}
            fill="white"
            r={15}
        />
        {label && (
            <text
                x={x - TEXT_OFFSET}
                y={y + TEXT_OFFSET}
                fill="black"
            >
                {label}
            </text>
        )}
    </React.Fragment>
);

Circle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    label: PropTypes.string
};

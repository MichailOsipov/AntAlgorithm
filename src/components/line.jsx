import * as React from 'react';
import PropTypes from 'prop-types';

export const Line = ({from, to, label}) => (
    <React.Fragment>
        <line
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="black"
            strokeWidth={2}
        />
        {label && (
            <text
                x={(from.x + to.x) / 2}
                y={(from.y + to.y) / 2}
                fill="black"
            >
                {label}
            </text>
        )}
    </React.Fragment>
);

Line.propTypes = {
    from: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    to: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    label: PropTypes.string
};

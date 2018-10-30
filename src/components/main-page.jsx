import * as React from 'react';
import {ControlPanel} from './control-panel';
import {SvgField} from './svg-field';

export const MainPage = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex'
        }}
    >
        <ControlPanel />
        <SvgField />
    </div>
);

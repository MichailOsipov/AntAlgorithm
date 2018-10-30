import * as React from 'react';
import {connect} from 'react-redux';
import {InputDateForm} from './input-data-form';
import {startSalesmanProblemSolving} from './epic-actions';

export const ControlPanel = connect(
    null,
    dispatch => ({
        startSalesmanProblem: () => dispatch(startSalesmanProblemSolving())
    })
)(({
    startSalesmanProblem
}) => (
    <div>
        <InputDateForm />
        <button onClick={startSalesmanProblem}>
            Начать поиск пути
        </button>
    </div>
));

import * as React from 'react';
import {connect} from 'react-redux';
import {getIterationNumber} from 'domains/animation';
import {InputDateForm} from './input-data-form';
import {startSalesmanProblemSolving, clearNodesAndEdges} from './epic-actions';

export const ControlPanel = connect(
    state => ({
        iterationNumber: getIterationNumber(state)
    }),
    dispatch => ({
        onStartSalesmanProblemSolving: () => dispatch(startSalesmanProblemSolving()),
        onClearNodesAndEdges: () => dispatch(clearNodesAndEdges())
    })
)(({
    iterationNumber,
    onStartSalesmanProblemSolving,
    onClearNodesAndEdges
}) => (
    <div>
        <InputDateForm />
        <span>{`Номер итерации: ${iterationNumber || 0}`}</span><br />
        <button onClick={onStartSalesmanProblemSolving}>
            Начать поиск пути
        </button>
        <button onClick={onClearNodesAndEdges}>
            Очистить вершины и ребра
        </button>
    </div>
));

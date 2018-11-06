import * as React from 'react';
import {connect} from 'react-redux';
import {InputDateForm} from './input-data-form';
import {startSalesmanProblemSolving, clearNodesAndEdges} from './epic-actions';

export const ControlPanel = connect(
    null,
    dispatch => ({
        onStartSalesmanProblemSolving: () => dispatch(startSalesmanProblemSolving()),
        onClearNodesAndEdges: () => dispatch(clearNodesAndEdges())
    })
)(({
    onStartSalesmanProblemSolving,
    onClearNodesAndEdges
}) => (
    <div>
        <InputDateForm />
        <button onClick={onStartSalesmanProblemSolving}>
            Начать поиск пути
        </button>
        <button onClick={onClearNodesAndEdges}>
            Очистить вершины и ребра
        </button>
    </div>
));

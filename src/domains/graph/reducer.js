import {SET_NODES, SET_EDGES} from './actions';

const DEFAULT_STATE = {
    nodes: [],
    edges: []
};

export const graphReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_NODES: {
            const nodes = action.payload;
            return {
                ...state,
                nodes: [...nodes]
            };
        }
        case SET_EDGES: {
            const edges = action.payload;
            return {
                ...state,
                edges: [...edges]
            };
        }
        default:
            return state;
    }
};

import {SET_ITERATION_NUMBER} from './actions';

const DEFAULT_STATE = {};

export const animationReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_ITERATION_NUMBER: {
            const iterationNumber = action.payload;
            return {
                ...state,
                iterationNumber
            };
        }
        default:
            return state;
    }
};

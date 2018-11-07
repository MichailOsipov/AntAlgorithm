import {SET_ANTS} from './actions';

const DEFAULT_STATE = {
    ants: []
};

export const antsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_ANTS: {
            const ants = action.payload;
            return {
                ...state,
                ants
            };
        }
        default:
            return state;
    }
};

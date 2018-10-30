import {SET_ANTS_PHEROMONE} from './actions';

const DEFAULT_STATE = {
    antsPheromone: []
};

export const antsPheromoneReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_ANTS_PHEROMONE: {
            const antsPheromone = action.payload;
            return {
                ...state,
                antsPheromone
            };
        }
        default:
            return state;
    }
};

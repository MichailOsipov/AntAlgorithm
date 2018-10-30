import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {GRAPH_STORE_KEY, graphReducer} from 'domains/graph';
import {ANTS_PHEROMONE_STORE_KEY, antsPheromoneReducer} from 'domains/ants-pheromone';

export const rootReducer = combineReducers({
    form: formReducer,
    [GRAPH_STORE_KEY]: graphReducer,
    [ANTS_PHEROMONE_STORE_KEY]: antsPheromoneReducer
});

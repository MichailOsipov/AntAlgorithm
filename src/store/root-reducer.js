import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {GRAPH_STORE_KEY, graphReducer} from 'domains/graph';
import {ANTS_STORE_KEY, antsReducer} from 'domains/ants';

export const rootReducer = combineReducers({
    form: formReducer,
    [GRAPH_STORE_KEY]: graphReducer,
    [ANTS_STORE_KEY]: antsReducer
});

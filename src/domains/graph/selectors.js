import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {GRAPH_STORE_KEY} from './store-key';

const getGraphDomain = getDomain(GRAPH_STORE_KEY);

export const getNodes = createSelector(
    getGraphDomain,
    ({nodes}) => nodes
);

export const getEdges = createSelector(
    getGraphDomain,
    ({edges}) => edges
);

import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {ANTS_STORE_KEY} from './store-key';

const getAntsDomain = getDomain(ANTS_STORE_KEY);

export const getAnts = createSelector(
    getAntsDomain,
    ({ants}) => ants
);

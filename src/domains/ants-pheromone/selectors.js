import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {ANTS_PHEROMONE_STORE_KEY} from './store-key';

const getAntsPheromoneDomain = getDomain(ANTS_PHEROMONE_STORE_KEY);

export const getAntsPheromone = createSelector(
    getAntsPheromoneDomain,
    ({antsPheromone}) => antsPheromone
);

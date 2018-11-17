import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {ANIMATION_STORE_KEY} from './store-key';

const getAnimationDomain = getDomain(ANIMATION_STORE_KEY);

export const getIterationNumber = createSelector(
    getAnimationDomain,
    ({iterationNumber}) => iterationNumber
);

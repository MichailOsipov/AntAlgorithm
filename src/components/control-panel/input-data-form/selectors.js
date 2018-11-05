import {formValueSelector} from 'redux-form';
import {INPUT_DATA_FORM_NAME} from './constants';

const valueSelector = formValueSelector(INPUT_DATA_FORM_NAME);

export const getInputAntsCount = state => valueSelector(state, 'antsCount');
export const getInputIterationsCount = state => valueSelector(state, 'iterationsCount');
export const getInputPheromoneInitCount = state => valueSelector(state, 'pheromoneInitCount');
export const getPheromoneGrowthCount = state => valueSelector(state, 'pheromoneGrowthCount');

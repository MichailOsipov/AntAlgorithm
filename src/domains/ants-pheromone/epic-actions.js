import {setAntsPheromone} from './actions';

export const initializePheromone = (pheromoneInitCount, edges) => (dispatch) => {
    dispatch(setAntsPheromone(
        edges.map(({from, to}) => ({
            from: from.name,
            to: to.name,
            pheromone: pheromoneInitCount
        }))
    ));
};

export const updatePheromone = () => (dispatch, getState) => {

};

export const decreasePheromone = () => (dispatch, getState) => {

};

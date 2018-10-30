export {ANTS_PHEROMONE_STORE_KEY} from './store-key';
export {antsPheromoneReducer} from './reducer';
export {
    initializePheromone,
    updatePheromone,
    decreasePheromone
} from './epic-actions';
export {getAntsPheromone} from './selectors';

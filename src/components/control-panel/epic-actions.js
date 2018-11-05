import {setEdges, getNodes} from 'domains/graph';
import {
    initializePheromone,
    updatePheromone,
    decreasePheromone,
    getAntsPheromone
} from 'domains/ants-pheromone';
import {
    getInputAntsCount,
    getInputIterationsCount,
    getInputPheromoneInitCount,
    getPheromoneGrowthCount
} from './input-data-form';
import {
    createSalesmanEdges,
    getAntsPathsSalesman
} from './salesman';

// optimise edges array -> object
// optimise pheromone array -> object
export const startSalesmanProblemSolving = () => (dispatch, getState) => {
    const nodes = getNodes(getState());
    const antsCount = getInputAntsCount(getState());
    const iterationsCount = getInputIterationsCount(getState());
    const pheromoneInitCount = getInputPheromoneInitCount(getState());
    const pheromoneGrowthCount = getPheromoneGrowthCount(getState());

    const edges = createSalesmanEdges(nodes);
    dispatch(setEdges(edges));
    dispatch(initializePheromone(pheromoneInitCount, edges));
    let currentIteration = 0;
    const intervalId = setInterval(() => {
        if (currentIteration >= iterationsCount) {
            clearInterval(intervalId);
            return;
        }

        const antsPheromone = getAntsPheromone(getState());
        const antsPaths = getAntsPathsSalesman({
            antsCount,
            edges,
            nodes,
            antsPheromone
        });
        console.log(antsPaths);
        dispatch(updatePheromone(pheromoneGrowthCount, antsPaths, nodes));
        dispatch(decreasePheromone());
        currentIteration += 1;
    }, 10);
};

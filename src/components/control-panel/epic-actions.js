import {times} from 'lodash';
import {setNodes, setEdges, getNodes} from 'domains/graph';
import {
    initializePheromone,
    updatePheromone,
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
    // add setTimeout
    setTimeout(() => {
        const algorithmIterationsPaths = times(iterationsCount, () => {
            const antsPheromone = getAntsPheromone(getState());
            const antsPaths = getAntsPathsSalesman({
                antsCount,
                edges,
                nodes,
                antsPheromone
            });
            dispatch(updatePheromone(pheromoneGrowthCount, antsPaths, nodes));
            return antsPaths;
        });
        console.log(algorithmIterationsPaths);
    }, 0);
};

export const clearNodesAndEdges = () => (dispatch) => {
    dispatch(setNodes([]));
    dispatch(setEdges([]));
};

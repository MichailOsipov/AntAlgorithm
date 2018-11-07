import {times} from 'lodash';
import {setNodes, setEdges, getNodes} from 'domains/graph';
import {setAnts} from 'domains/ants';
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
import {
    initializePheromone,
    updatePheromone
} from './pheromone';
import {initializeAnts, moveAnts} from './ants-movement';

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
    let antsPheromone = initializePheromone(pheromoneInitCount, edges);
    // add setTimeout
    setTimeout(() => {
        const algorithmIterationsPaths = times(iterationsCount, () => {
            const antsPaths = getAntsPathsSalesman({
                antsCount,
                edges,
                nodes,
                antsPheromone
            });
            antsPheromone = updatePheromone(antsPheromone, pheromoneGrowthCount, antsPaths, nodes);
            return antsPaths;
        });
        console.log(algorithmIterationsPaths);
        const currAntsPaths = algorithmIterationsPaths[algorithmIterationsPaths.length - 1];
        let ants = initializeAnts(nodes, currAntsPaths);
        dispatch(setAnts(ants));
        let antsIterationsCount = 0;
        const antIntervalId = setInterval(() => {
            ants = moveAnts(nodes, ants, currAntsPaths);
            dispatch(setAnts(ants));
            antsIterationsCount += 1;
            if (antsIterationsCount > 50) {
                clearInterval(antIntervalId);
            }
        }, 100);
    }, 0);
};

export const clearNodesAndEdges = () => (dispatch) => {
    dispatch(setNodes([]));
    dispatch(setEdges([]));
};

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
    getAntsPathsSalesman,
    salesmanAntsPathGenerator
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
    // let antsPheromone = initializePheromone(pheromoneInitCount, edges);
    // add setTimeout

    const algorithmIterationsPaths = [];
    const antsPathsGenerator = salesmanAntsPathGenerator({
        pheromoneInitCount,
        pheromoneGrowthCount,
        antsCount,
        nodes,
        edges
    });
    for (let i = 0; i < iterationsCount; i += 1) {
        algorithmIterationsPaths.push(antsPathsGenerator.next().value);
    }
    console.log(algorithmIterationsPaths);

    // let ants = initializeAnts(nodes, algorithmIterationsPaths[algorithmIterationsPaths.length - 1]);
    // dispatch(setAnts(ants));
    // ants = moveAnts(nodes, ants, algorithmIterationsPaths[algorithmIterationsPaths.length - 1]);
    // dispatch(setAnts(ants));
};

export const clearNodesAndEdges = () => (dispatch) => {
    dispatch(setNodes({}));
    dispatch(setEdges([]));
};

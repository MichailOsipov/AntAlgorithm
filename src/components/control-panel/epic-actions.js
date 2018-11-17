import {setNodes, setEdges, getNodes} from 'domains/graph';
import {setIterationNumber, getIterationNumber} from 'domains/animation';
import {
    getInputAntsCount,
    getInputIterationsCount,
    getInputPheromoneInitCount,
    getInputPheromoneGrowthCount,
    getInputEvaporationCount
} from './input-data-form';
import {
    createSalesmanEdges,
    salesmanAntsPathGenerator
} from './salesman';
import {animateAntsMoving} from './animate-ants-moving';

export const startSalesmanProblemSolving = () => (dispatch, getState) => {
    const nodes = getNodes(getState());
    const antsCount = getInputAntsCount(getState());
    const iterationsCount = getInputIterationsCount(getState());
    const pheromoneInitCount = getInputPheromoneInitCount(getState());
    const pheromoneGrowthCount = getInputPheromoneGrowthCount(getState());
    const evaporationCount = getInputEvaporationCount(getState());

    const edges = createSalesmanEdges(nodes);
    dispatch(setEdges(edges));

    const antsPathsGenerator = salesmanAntsPathGenerator({
        pheromoneInitCount,
        pheromoneGrowthCount,
        evaporationCount,
        antsCount,
        nodes,
        edges
    });

    dispatch(setIterationNumber(0));
    const animateAntsPath = () => requestAnimationFrame(() => {
        const iterationNumber = getIterationNumber(getState());
        if (iterationNumber > iterationsCount) {
            return;
        }
        dispatch(setIterationNumber(iterationNumber + 1));
        dispatch(animateAntsMoving({
            antsPaths: antsPathsGenerator.next().value,
            nodes,
            edges
        })).then(animateAntsPath);
    });
    animateAntsPath();
};

export const clearNodesAndEdges = () => (dispatch) => {
    dispatch(setNodes({}));
    dispatch(setEdges([]));
};

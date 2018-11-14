import {setNodes, setEdges, getNodes} from 'domains/graph';
import {
    getInputAntsCount,
    getInputIterationsCount,
    getInputPheromoneInitCount,
    getInputPheromoneGrowthCount
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

    const edges = createSalesmanEdges(nodes);
    dispatch(setEdges(edges));

    const antsPathsGenerator = salesmanAntsPathGenerator({
        pheromoneInitCount,
        pheromoneGrowthCount,
        antsCount,
        nodes,
        edges
    });

    let iterationNumber = 1;
    const animateAntsPath = () => requestAnimationFrame(() => {
        if (iterationNumber > iterationsCount) {
            return;
        }
        iterationNumber += 1;
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

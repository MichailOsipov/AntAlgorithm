import {setAntsPheromone} from './actions';
import {getAntsPheromone} from './selectors';

export const initializePheromone = (pheromoneInitCount, edges) => (dispatch) => {
    dispatch(setAntsPheromone(
        edges.map(({from, to}) => ({
            from: from.name,
            to: to.name,
            pheromone: pheromoneInitCount
        }))
    ));
};

const pathContainsEdge = (node1, node2, path) => {
    const edgeInPathMiddle = path.some((curr, i) => {
        const prev = path[i - 1];
        return (curr === node1 && prev === node2) || (curr === node2 && prev === node1);
    });
    const pathFirst = path[0];
    const pathLast = path[path.length - 1];
    const edgeInStart = (pathFirst === node1 && pathLast === node2) || (pathFirst === node2 && pathLast === node1);
    return edgeInPathMiddle || edgeInStart;
};

const calcEdgeVisitorsCount = (from, to, antsPaths) =>
    antsPaths.reduce((summ, antPath) => (
        pathContainsEdge(from, to, antPath) ? summ + 1 : summ
    ), 0);

const calcNodesDistance = (from, to, nodes) => {
    const {x: x1, y: y1} = nodes.find(({name}) => name === from) || {};
    const {x: x2, y: y2} = nodes.find(({name}) => name === to) || {};
    return (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
};

export const updatePheromone = (pheromoneGrowthCount, antsPaths, nodes) => (dispatch, getState) => {
    const antsPheromone = getAntsPheromone(getState());
    const newAntsPheromone = antsPheromone.map(({from, to, pheromone}) => {
        const edgeVisitorsCount = calcEdgeVisitorsCount(from, to, antsPaths);
        // curr path length instead of distance
        const pheromonePerVisit = pheromoneGrowthCount / calcNodesDistance(from, to, nodes);
        return {
            from,
            to,
            pheromone: pheromone + (edgeVisitorsCount * pheromonePerVisit)
        };
    });
    dispatch(setAntsPheromone(newAntsPheromone));
};

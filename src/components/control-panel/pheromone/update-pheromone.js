import {findEdgeByNodeNames} from 'utils/find-edge-by-node-names';

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

export const updatePheromone = (antsPheromone, pheromoneGrowthCount, antsPaths, nodes, edges) =>
    antsPheromone.map(({from, to, pheromone}) => {
        const edgeVisitorsCount = calcEdgeVisitorsCount(from, to, antsPaths);
        const {distance} = findEdgeByNodeNames(edges, from, to);
        const pheromonePerVisit = pheromoneGrowthCount / distance;
        return {
            from,
            to,
            pheromone: pheromone + (edgeVisitorsCount * pheromonePerVisit)
        };
    });

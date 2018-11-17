import {times} from 'lodash';
import {findEdgeByNodeNames} from 'utils/find-edge-by-node-names';

const getNodesPossibilities = ({
    currentNodeName,
    nodesNamesToVisit,
    edges,
    antsPheromone
}) => {
    const nodesValues = nodesNamesToVisit.map((nodeName) => {
        const {distance} = findEdgeByNodeNames(edges, currentNodeName, nodeName) || {};
        const {pheromone} = findEdgeByNodeNames(antsPheromone, currentNodeName, nodeName) || {};
        return pheromone / distance;
    });
    const summValues = nodesValues.reduce((summ, curr) => summ + curr, 0);
    return nodesValues.map(nodeValue => nodeValue / summValues);
};

const selectNodeByPossibility = (possibilities) => {
    const randomValue = Math.random();
    const possibilitiesSumm = possibilities.reduce(
        (summArr, currValue) => {
            const last = summArr[summArr.length - 1] || 0;
            return [...summArr, last + currValue];
        },
        []
    );
    return possibilitiesSumm.findIndex(value => randomValue < value);
};

const getNextNode = ({path, edges, nodesNames, antsPheromone}) => {
    const nodesNamesToVisit = nodesNames.filter(nodeName => !path.includes(nodeName));
    const nodesPossibilities = getNodesPossibilities({
        currentNodeName: path[path.length - 1],
        nodesNamesToVisit,
        edges,
        antsPheromone
    });
    const selectedNodeIndex = selectNodeByPossibility(nodesPossibilities);
    return nodesNamesToVisit[selectedNodeIndex];
};

const getAntPath = ({edges, nodes, antsPheromone}) => {
    const nodesNames = Object.keys(nodes);
    const path = [];
    path.push(nodesNames[0]);
    while (path.length !== nodesNames.length) {
        path.push(getNextNode({path, edges, nodesNames, antsPheromone}));
    }
    return [...path, nodesNames[0]];
};

export const getAntsPathsSalesman = ({
    antsCount,
    edges,
    nodes,
    antsPheromone
}) => times(antsCount, () => getAntPath({edges, nodes, antsPheromone}));

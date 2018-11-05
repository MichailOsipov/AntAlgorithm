import {times} from 'lodash';

const calcDistance = (node1, node2) => {
    const {x: x1, y: y1} = node1;
    const {x: x2, y: y2} = node2;
    return (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
};

const getPheromone = (antsPheromone, node1, node2) => {
    const {name: node1Name} = node1;
    const {name: node2Name} = node2;
    return (antsPheromone.find(({from, to}) => (
        (node1Name === from && node2Name === to) ||
        (node1Name === to && node2Name === from)
    )) || {}).pheromone;
};

const getNodesPossibilities = ({
    currentNode,
    nodesToVisit,
    antsPheromone
}) => {
    const nodesValues = nodesToVisit.map((node) => {
        const distance = calcDistance(currentNode, node);
        const pheromone = getPheromone(antsPheromone, currentNode, node);
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

const getNextNode = ({path, edges, nodes, antsPheromone}) => {
    const nodesToVisit = nodes.filter(node => !path.includes(node));
    const nodesPossibilities = getNodesPossibilities({
        currentNode: path[path.length - 1],
        nodesToVisit,
        edges,
        antsPheromone
    });
    const selectedNodeIndex = selectNodeByPossibility(nodesPossibilities);
    return nodesToVisit[selectedNodeIndex];
};

const getAntPath = ({edges, nodes, antsPheromone}) => {
    const path = [];
    path.push(nodes[0]);
    while (path.length !== nodes.length) {
        path.push(getNextNode({path, edges, nodes, antsPheromone}));
    }
    return path.map(({name}) => name);
};

export const getAntsPathsSalesman = ({
    antsCount,
    edges,
    nodes,
    antsPheromone
}) => times(antsCount, () => getAntPath({edges, nodes, antsPheromone}));

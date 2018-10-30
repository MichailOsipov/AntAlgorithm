import {times} from 'lodash';

const getNodesPossibilities = ({
    currentNode,
    nodesToVisit,
    edges,
    antsPheromone
}) =>
    nodesToVisit.map((node) => {
        
    });
const getNextNode = ({path, edges, nodes, antsPheromone}) => {
    const nodesToVisit = nodes.filter(node => !path.includes(node));
    const nodesPossibilities = getNodesPossibilities({
        currentNode: path[path.length - 1],
        nodesToVisit,
        edges,
        antsPheromone
    });
};

const getAntPath = ({edges, nodes, antsPheromone}) => {
    const path = [];
    path.push(nodes[0]);
    // while (path.length !== nodes.length - 1) {
    //     path.push(getNextNode({path, edges, nodes, antsPheromone}));
    // }
};

export const getAntsPathsSalesman = ({
    antsCount,
    edges,
    nodes,
    antsPheromone
}) => times(antsCount, () => getAntPath({edges, nodes, antsPheromone}));

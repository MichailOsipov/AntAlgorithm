import {calculateNodesDistance} from 'utils/calculate-nodes-distance';

export const createSalesmanEdges = (nodes) => {
    const edges = [];
    const nodeNames = Object.keys(nodes);
    for (let i = 0; i < nodeNames.length; i += 1) {
        for (let j = i + 1; j < nodeNames.length; j += 1) {
            const fromNodeName = nodeNames[i];
            const toNodeName = nodeNames[j];
            edges.push({
                from: fromNodeName,
                to: toNodeName,
                distance: calculateNodesDistance(nodes[fromNodeName], nodes[toNodeName])
            });
        }
    }
    return edges;
};

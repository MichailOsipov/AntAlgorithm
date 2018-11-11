export const findEdgeByNodeNames = (edges, node1Name, node2Name) =>
    edges.find(({from, to}) =>
        (from === node1Name && to === node2Name) || (from === node2Name && to === node1Name)
    );

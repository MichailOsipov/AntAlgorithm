export const createSalesmanEdges = (nodes) => {
    const edges = [];
    for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
            const fromNode = nodes[i];
            const toNode = nodes[j];
            edges.push({
                from: {...fromNode},
                to: {...toNode}
            });
        }
    }
    return edges;
};

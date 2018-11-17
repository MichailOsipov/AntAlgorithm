export const shiftAnt = (fromNode, toNode, distanceToMove, nodesDistance) => {
    const {x: x0, y: y0} = fromNode;
    const {x: x1, y: y1} = toNode;
    return {
        x: x0 + ((x1 - x0) * (distanceToMove / nodesDistance)),
        y: y0 + ((y1 - y0) * (distanceToMove / nodesDistance))
    };
};

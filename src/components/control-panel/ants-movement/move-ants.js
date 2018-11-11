const DISTANCE_PER_MOVE = 50;

// const nodePassed = (currCoordinates, nextCoordinates, node) => {
//     const {x: x0, y: y0} = currCoordinates;
//     const {x: x1, y: y1} = nextCoordinates;
//     const {x: xn, y: yn} = node;
//     const xCoordinatePassed = (x0 < xn && x1 > xn) || (x0 > xn && x1 < xn);
//     const yCoordiantePassed = (y0 < yn && y1 > yn) || (y0 > yn && y1 < yn);
//     return xCoordinatePassed || yCoordiantePassed;
// };
//
// const moveCoordinateOnLine = (startLine, endLine) => {
//     const {x: x0, y: y0} = startLine;
//     const {x: x1, y: y1} = endLine;
//     const xn = x0 + DISTANCE_PER_MOVE;
//     return {
//         x: xn,
//         y: ((xn - x0) * ((y1 - y0) / (x1 - x0))) + y0
//     };
// };
//
// const moveAnt = (nodes, {x, y, nextNode}, antPath) => {
//     const nextCoordinates = moveCoordinateOnLine({x, y}, nextNode);
//     if (nodePassed({x, y}, nextCoordinates, nextNode)) {
//         const nextNodeName = antPath.find((nodeName, i) => antPath[i - 1] === nextNode.name);
//         const newNextNode = nodes.find(({name}) => name === nextNodeName);
//         return {
//             x: nextNode.x,
//             y: nextNode.y,
//             nextNode: newNextNode
//         };
//     }
//
//     return {
//         x: nextCoordinates.x,
//         y: nextCoordinates.y,
//         nextNode
//     };
// };

// const calcNodeDistance = ({x: x0, y: y0}, {x: x1, y: y1}) =>
//     (((x1 - x0) ** 2) + ((y1 - y0) ** 2)) ** 0.5;
//
// const moveAnt = (nodes, {x, y, nextNodeName}, antPath) => {
//     const nextNode = nodes.find(({name}) => name === nextNodeName);
//     const distanceToNextNode = calcNodeDistance({x, y}, nextNode);
//     if (distanceToNextNode < DISTANCE_PER_MOVE) {
//         //
//     }
// };

const moveAnt = () => ({});

export const moveAnts = (nodes, ants, antsPaths) =>
    ants.map((ant, i) => ({
        ...moveAnt(nodes, ant, antsPaths[i])
    }));

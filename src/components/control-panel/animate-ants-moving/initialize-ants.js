import {findEdgeByNodeNames} from 'utils/find-edge-by-node-names';

export const initializeAnts = ({antsPaths, nodes, edges}) =>
    antsPaths.map((antPath) => {
        const currNodeName = antPath[0];
        const nextNodeName = antPath[1];
        const {distance} = findEdgeByNodeNames(edges, currNodeName, nextNodeName);
        const offset = Math.random() * (distance / 4);
        return ({
            currNodeName,
            nextNodeName,
            distanceInEdgePassed: offset,
            coordinates: nodes[currNodeName],
            antPath
        });
    });
